import whopApiModule from "@whop-apps/api";
import { type Request } from "express";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const { WhopAPI, makeWebhookHandler } = whopApiModule;

if (!process.env.WHOP_API_KEY) {
  console.warn("Warning: WHOP_API_KEY environment variable is not set");
}

const JWT_PEM = `-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAErz8a8vxvexHC0TLT91g7llOdDOsN
uYiGEfic4Qhni+HMfRBuUphOh7F3k8QgwZc9UlL0AHmyYqtbhL9NuJes6w==
-----END PUBLIC KEY-----`;

export async function verifyUserToken(req: Request): Promise<{ userId: string }> {
  const userToken = req.headers["x-whop-user-token"] as string;
  
  if (!userToken) {
    throw new Error("No user token provided");
  }

  try {
    const decoded = jwt.verify(userToken, JWT_PEM, {
      issuer: "urn:whopcom:exp-proxy",
      algorithms: ["ES256"]
    }) as { sub: string; aud: string };

    if (decoded.aud !== process.env.WHOP_APP_ID) {
      throw new Error("Token audience mismatch");
    }

    if (!decoded.sub) {
      throw new Error("Invalid token payload");
    }

    return { userId: decoded.sub };
  } catch (error) {
    console.error("Error verifying user token:", error);
    throw new Error("Failed to verify user token");
  }
}

export async function checkUserAccess(userId: string, productId?: string, hasManualAccess?: boolean): Promise<{ hasAccess: boolean; accessLevel: 'admin' | 'customer' | 'no_access' }> {
  // Check manual access override first (for testing)
  if (hasManualAccess) {
    console.log(`✅ Manual access granted for user: ${userId}`);
    return { hasAccess: true, accessLevel: 'customer' };
  }

  try {
    const api = WhopAPI.app({ apiKey: process.env.WHOP_API_KEY });
    
    const membershipsResponse = await api.GET("/app/memberships", {
      params: {
        query: {
          user_id: userId,
          valid: true,
        }
      }
    });

    if (!membershipsResponse.data || !membershipsResponse.data.data || membershipsResponse.data.data.length === 0) {
      return { hasAccess: false, accessLevel: 'no_access' };
    }

    let hasValidMembership = false;
    
    if (productId) {
      hasValidMembership = membershipsResponse.data.data.some((m: any) => 
        (m.status === 'active' || m.status === 'trialing') &&
        m.product_id === productId
      );
    } else {
      hasValidMembership = membershipsResponse.data.data.some((m: any) => 
        m.status === 'active' || m.status === 'trialing'
      );
    }

    return {
      hasAccess: hasValidMembership,
      accessLevel: hasValidMembership ? 'customer' : 'no_access'
    };
  } catch (error) {
    console.error("Error checking user access:", error);
    return { hasAccess: false, accessLevel: 'no_access' };
  }
}

export async function fetchUserFromWhop(userId: string): Promise<{ email: string | null }> {
  try {
    const api = WhopAPI.app({ apiKey: process.env.WHOP_API_KEY });
    
    const userResponse = await api.GET("/app/users/{id}", {
      params: {
        path: { id: userId }
      }
    });

    if (userResponse.data) {
      return { email: userResponse.data.email || null };
    }
    
    return { email: null };
  } catch (error) {
    console.error("Error fetching user from Whop:", error);
    return { email: null };
  }
}

export function verifyWebhookSignature(payload: string, signature: string, secret: string): boolean {
  try {
    const hmac = crypto.createHmac('sha256', secret);
    const expectedSignature = hmac.update(payload).digest('hex');
    
    if (signature.length !== expectedSignature.length) {
      console.error(`Signature length mismatch: received ${signature.length}, expected ${expectedSignature.length}`);
      return false;
    }
    
    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expectedSignature)
    );
  } catch (error) {
    console.error("Error verifying webhook signature:", error);
    return false;
  }
}

export const whopAPI = WhopAPI;
