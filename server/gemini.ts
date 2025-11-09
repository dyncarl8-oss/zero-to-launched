import { GoogleGenAI } from "@google/genai";

// DON'T DELETE THIS COMMENT
// Follow these instructions when using this blueprint:
// - Note that the newest Gemini model series is "gemini-2.5-flash" or gemini-2.5-pro"
// Using gemini-2.5-pro for advanced reasoning capabilities

// This API key is from Gemini Developer API Key, not vertex AI API Key
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const GEMINI_MODEL_PRO = "gemini-2.5-pro";
const GEMINI_MODEL_FLASH = "gemini-2.5-flash";
const MAX_RETRIES = 3;
const RETRY_DELAY = 2000;

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface AppIdea {
  name: string;
  description: string;
  targetAudience: string;
  features: string[];
}

export async function generateAppIdeas(): Promise<AppIdea[]> {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    // Use Pro model for first 2 attempts, fall back to Flash on final attempt
    const modelToUse =
      attempt < MAX_RETRIES ? GEMINI_MODEL_PRO : GEMINI_MODEL_FLASH;

    if (attempt === MAX_RETRIES && lastError) {
      console.log(`🔄 Falling back to ${modelToUse} for final attempt...`);
    }

    try {
      const systemPrompt = `You are an expert app strategist and market researcher specializing in micro-SaaS and Whop marketplace apps.

Your task is to generate 3 UNIQUE, HIGH-QUALITY app ideas that can be built with Replit and sold on Whop.

CRITICAL REQUIREMENTS FOR UNIQUENESS:
- Generate COMPLETELY DIFFERENT ideas each time you're asked
- Think about EMERGING trends and UNDERSERVED niches
- Avoid repeating any ideas you've generated before
- Each idea must solve a DIFFERENT type of problem
- Use your knowledge of successful SaaS products, trending markets, and current technology

RESEARCH & ANALYSIS APPROACH:
1. Consider successful micro-SaaS products and Whop marketplace trends
2. Analyze current creator economy, automation, and productivity needs
3. Identify specific pain points in underserved markets
4. Think about tools that save time or make money for specific groups

Each app MUST:
- Solve a SPECIFIC, REAL problem that people will pay for ($20-$200/month)
- Be simple enough to build with AI tools in one focused session
- Have clear, immediate value for a specific audience
- Target a niche that's currently underserved
- Be unique and NOT a generic tool

AVOID these overused, generic ideas:
- Basic todo lists, note-taking apps, or habit trackers
- Simple calculators, converters, or basic dashboards
- Generic AI chatbots without specific, valuable use cases
- Social media post schedulers (too saturated)
- Simple form builders or survey tools

PRIORITIZE these high-value categories:
- Automation tools that save hours of manual work for specific jobs
- Tools that directly help people make money (e.g., for content creators, entrepreneurs, freelancers)
- Niche-specific analytics or insights tools for underserved industries
- Specialized tools for emerging platforms or communities
- Cross-platform integration tools that solve friction points
- Data extraction and processing tools for specific use cases

EXAMPLES OF GOOD IDEAS (for inspiration, but generate DIFFERENT ones):
- "Instagram Caption Generator for Local Businesses" - helps small business owners create engaging captions
- "Etsy Keyword Research Tool" - helps Etsy sellers find high-converting keywords
- "Discord Community Analytics" - tracks engagement metrics for community managers
- "TikTok Trend Alerter for Brands" - notifies brands of relevant trending sounds/hashtags

Respond with JSON in this exact format:
{
  "ideas": [
    {
      "name": "Specific, Catchy App Name (3-5 words)",
      "description": "Clear 2-3 sentence description explaining WHAT it does, WHO it helps, and the SPECIFIC BENEFIT they get",
      "targetAudience": "Very specific demographic with their pain point (e.g., 'Podcast hosts who struggle to create show notes and timestamps')",
      "features": ["Specific feature 1", "Specific feature 2", "Specific feature 3", "Specific feature 4"]
    }
  ]
}`;

      const userPrompt = `Think deeply about current market opportunities and generate 3 completely unique app ideas.

Consider these emerging areas:
- Creator economy tools (YouTube, TikTok, Instagram, Twitch, podcasting)
- E-commerce optimization (Shopify, Etsy, Amazon sellers)
- Community management (Discord, Slack, Circle)
- Freelance and gig economy tools
- Small business automation
- Content repurposing and distribution
- Niche data analysis and insights

Generate 3 unique ideas NOW. Each must be completely different from common productivity tools. Focus on solving real, specific problems that people will pay to fix.`;

      const response = await ai.models.generateContent({
        model: modelToUse,
        config: {
          systemInstruction: systemPrompt,
          responseMimeType: "application/json",
          responseSchema: {
            type: "object",
            properties: {
              ideas: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    description: { type: "string" },
                    targetAudience: { type: "string" },
                    features: {
                      type: "array",
                      items: { type: "string" },
                    },
                  },
                  required: [
                    "name",
                    "description",
                    "targetAudience",
                    "features",
                  ],
                },
              },
            },
            required: ["ideas"],
          },
          temperature: 1.3,
          topP: 0.95,
          topK: 64,
        },
        contents: userPrompt,
      });

      const rawJson = response.text;
      if (rawJson) {
        const data = JSON.parse(rawJson);
        return data.ideas;
      } else {
        throw new Error("Empty response from model");
      }
    } catch (error) {
      lastError = error as Error;
      console.error(`Attempt ${attempt}/${MAX_RETRIES} failed:`, error);

      if (attempt < MAX_RETRIES) {
        console.log(`Retrying in ${RETRY_DELAY}ms...`);
        await sleep(RETRY_DELAY);
      }
    }
  }

  console.error("All retry attempts failed for generating app ideas");
  throw new Error(
    `Failed to generate app ideas after ${MAX_RETRIES} attempts: ${lastError?.message}`,
  );
}

export async function generateReplitPrompt(appIdea: AppIdea): Promise<string> {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    // Use Pro model for first 2 attempts, fall back to Flash on final attempt
    const modelToUse =
      attempt < MAX_RETRIES ? GEMINI_MODEL_PRO : GEMINI_MODEL_FLASH;

    if (attempt === MAX_RETRIES && lastError) {
      console.log(`🔄 Falling back to ${modelToUse} for prompt generation...`);
    }

    try {
      const prompt = `Create a simple, clear prompt for Replit AI Builder based on this app idea:

App Name: ${appIdea.name}
Description: ${appIdea.description}
Target Audience: ${appIdea.targetAudience}
Features: ${appIdea.features.join(", ")}

IMPORTANT: Output ONLY the actual prompt that should be pasted into Replit AI Builder. Do NOT include any introductory text like "Here's a prompt" or explanations. Start directly with the instructions for building the app.

The prompt should be concise and tell Replit AI to:
1. Build this app for Whop marketplace
2. Make it work with Whop's iframe and authentication
3. Follow Whop's official documentation (provide these links for Replit AI to reference):
-https://docs.whop.com/apps/introduction
-https://docs.whop.com/apps/getting-started
-https://docs.whop.com/apps/guides/permissions
-https://docs.whop.com/apps/guides/authentication
-https://docs.whop.com/apps/guides/app-views
-https://docs.whop.com/apps/guides/payins
-https://docs.whop.com/apps/guides/payouts
-https://docs.whop.com/apps/guides/iframe

Keep it simple - just describe the app requirements and reference the Whop docs. Let Replit AI figure out the technical implementation by reading the documentation.`;

      const response = await ai.models.generateContent({
        model: modelToUse,
        contents: prompt,
      });

      return response.text || "Unable to generate prompt";
    } catch (error) {
      lastError = error as Error;
      console.error(`Attempt ${attempt}/${MAX_RETRIES} failed:`, error);

      if (attempt < MAX_RETRIES) {
        console.log(`Retrying in ${RETRY_DELAY}ms...`);
        await sleep(RETRY_DELAY);
      }
    }
  }

  console.error("All retry attempts failed for generating prompt");
  throw new Error(
    `Failed to generate Replit prompt after ${MAX_RETRIES} attempts: ${lastError?.message}`,
  );
}
