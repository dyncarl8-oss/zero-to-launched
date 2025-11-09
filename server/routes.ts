import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateAppIdeas, generateReplitPrompt, type AppIdea } from "./gemini";
import { verifyUserToken, checkUserAccess, fetchUserFromWhop, whopAPI } from "./whop-sdk";
import { sendPurchaseInitiatedEmail, sendPaymentSuccessEmail } from "./resend";

export async function registerRoutes(app: Express): Promise<Server> {
  // Debug route to check users in database (remove in production)
  app.get("/api/debug/users", async (req, res) => {
    try {
      if ('listAllUsers' in storage && typeof storage.listAllUsers === 'function') {
        const users = await (storage as any).listAllUsers();
        res.json({ 
          count: users.length,
          users: users.map((u: any) => ({ 
            id: u.id, 
            whopUserId: u.whopUserId, 
            email: u.email,
            hasManualAccess: u.hasManualAccess,
            createdAt: u.createdAt
          }))
        });
      } else {
        res.json({ message: "Using in-memory storage, cannot list users" });
      }
    } catch (error) {
      console.error("Error listing users:", error);
      res.status(500).json({ error: "Failed to list users" });
    }
  });

  // Whop Authentication & Access Control Routes
  app.get("/api/auth/me", async (req, res) => {
    try {
      const { userId } = await verifyUserToken(req);
      
      // Fetch user email from Whop API
      const { email } = await fetchUserFromWhop(userId);
      
      // Store/update user in database with email
      const user = await storage.upsertUser({
        whopUserId: userId,
        email: email,
        metadata: null,
        hasManualAccess: undefined
      });
      
      const productId = req.query.productId as string | undefined;
      const access = await checkUserAccess(userId, productId, user.hasManualAccess ?? false);
      
      res.json({
        userId,
        hasAccess: access.hasAccess,
        accessLevel: access.accessLevel
      });
    } catch (error) {
      // Only log actual errors, not missing tokens (expected on initial page load)
      if (error instanceof Error && !error.message.includes("No user token provided")) {
        console.error("Error verifying user:", error);
      }
      res.status(401).json({ 
        error: "Unauthorized" 
      });
    }
  });

  // Grant manual access for testing
  app.post("/api/admin/grant-access", async (req, res) => {
    try {
      const { whopUserId, hasAccess } = req.body;
      
      if (!whopUserId) {
        return res.status(400).json({ error: "whopUserId is required" });
      }

      const user = await storage.upsertUser({
        whopUserId: whopUserId,
        email: undefined,
        metadata: undefined,
        hasManualAccess: hasAccess ?? true
      });

      console.log(`🔓 Manual access ${hasAccess ? 'granted' : 'revoked'} for user: ${whopUserId}`);

      res.json({ 
        success: true,
        user: {
          whopUserId: user.whopUserId,
          email: user.email,
          hasManualAccess: user.hasManualAccess
        }
      });
    } catch (error) {
      console.error("Error granting access:", error);
      res.status(500).json({ 
        error: "Failed to grant access" 
      });
    }
  });

  // AI Idea Generator Routes
  app.post("/api/generate-ideas", async (req, res) => {
    try {
      const ideas = await generateAppIdeas();
      res.json({ ideas });
    } catch (error) {
      console.error("Error generating ideas:", error);
      res.status(500).json({ 
        error: "Failed to generate ideas. Please try again." 
      });
    }
  });

  app.post("/api/generate-prompt", async (req, res) => {
    try {
      const { appIdea } = req.body as { appIdea: AppIdea };
      
      if (!appIdea || !appIdea.name || !appIdea.description) {
        return res.status(400).json({ 
          error: "Invalid app idea data" 
        });
      }

      const prompt = await generateReplitPrompt(appIdea);
      res.json({ prompt });
    } catch (error) {
      console.error("Error generating prompt:", error);
      res.status(500).json({ 
        error: "Failed to generate prompt. Please try again." 
      });
    }
  });

  // Track purchase initiation
  app.post("/api/track-purchase-click", async (req, res) => {
    try {
      const { userId } = await verifyUserToken(req);
      const { email } = await fetchUserFromWhop(userId);
      
      // Send email notification asynchronously (don't wait for it)
      if (email) {
        sendPurchaseInitiatedEmail(email, userId).catch(err => 
          console.error('Error sending purchase initiated email:', err)
        );
      }
      
      res.json({ success: true });
    } catch (error) {
      console.error("Error tracking purchase click:", error);
      // Don't fail the request if tracking fails
      res.json({ success: false });
    }
  });

  // Grant access after successful purchase
  app.post("/api/grant-purchase-access", async (req, res) => {
    try {
      const { userId } = await verifyUserToken(req);
      
      console.log(`🎉 Purchase completed! Granting access to user: ${userId}`);
      
      // Grant manual access immediately
      const user = await storage.upsertUser({
        whopUserId: userId,
        email: undefined,
        metadata: undefined,
        hasManualAccess: true
      });

      console.log(`✅ Access granted successfully for user: ${userId}`);

      res.json({ 
        success: true,
        hasAccess: true
      });
    } catch (error) {
      console.error("Error granting purchase access:", error);
      res.status(500).json({ 
        error: "Failed to grant access" 
      });
    }
  });

  app.post("/api/payment/charge", async (req, res) => {
    try {
      const { userId } = await verifyUserToken(req);
      
      const planId = process.env.WHOP_PLAN_ID;
      
      if (!planId) {
        console.error("WHOP_PLAN_ID environment variable is not set");
        return res.status(500).json({ 
          error: "Payment configuration error. Please contact support." 
        });
      }

      const purchaseUrl = `https://whop.com/checkout/${planId}`;
      
      res.json({
        planId,
        purchaseUrl
      });
    } catch (error) {
      console.error("Error creating charge:", error);
      res.status(500).json({ 
        error: "Failed to create charge" 
      });
    }
  });

  app.post("/api/webhooks/whop", async (req, res) => {
    try {
      const { action, data } = req.body;
      
      if (!action) {
        console.error("Missing action in webhook payload");
        return res.status(400).json({ error: "Invalid webhook payload" });
      }

      console.log(`📥 Webhook received: ${action}`);
      
      // Handle test webhooks (data is null when testing from Whop dashboard)
      if (data === null) {
        console.log("✅ Test webhook received successfully");
        return res.status(200).json({ received: true, test: true });
      }

      console.log(`📦 Webhook data:`, JSON.stringify(data, null, 2));

      // Store user data when payment succeeds or membership is created
      if (action === "payment.succeeded" || action === "membership.went_valid") {
        const userId = data.user_id || data.user;
        if (userId) {
          console.log(`💳 Storing user from webhook: ${userId}`);
          console.log(`🔓 AUTOMATICALLY GRANTING ACCESS for user: ${userId}`);
          
          await storage.upsertUser({
            whopUserId: userId,
            email: data.email || null,
            metadata: JSON.stringify(data),
            hasManualAccess: true
          });
          
          console.log(`✅ User access granted successfully: ${userId}`);
          
          // Send payment success email notification
          const userEmail = data.email || 'Unknown';
          sendPaymentSuccessEmail(userEmail, userId, data).catch(err => 
            console.error('Error sending payment success email:', err)
          );
        }
      }

      res.status(200).json({ received: true });
    } catch (error) {
      console.error("Error processing webhook:", error);
      res.status(500).json({ 
        error: "Failed to process webhook" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
