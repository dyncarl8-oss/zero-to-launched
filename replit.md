# Build & Sell Apps on Whop - AI-Powered Guide

## Overview
A comprehensive, AI-powered guide that helps complete beginners build and sell their first web app. Features a built-in AI idea generator powered by Google Gemini, eliminating the need to leave the site. Users go from zero to launched app on Whop marketplace by following detailed, step-by-step instructions.

**NOW INCLUDES:** Full Whop authentication, access control, and payment processing. Users must purchase the course to access content.

**Target Audience:** Complete beginners and aspiring entrepreneurs who want to build and monetize their first app without coding knowledge.

## Features
- **Whop Authentication** - JWT-based user verification using Whop's public key
- **MongoDB User Storage** - Automatic storage of Whop users in MongoDB when they authenticate
- **Access Control** - Course content protected behind purchase requirement
- **High-Converting Sales Page** - Professional checkout page with proven conversion elements
- **Whop Payment Modal** - In-app payment modal using Whop iFrame SDK for seamless checkout
- **Payment Integration** - Whop payment API for one-time course purchase ($97)
- **Webhook Verification** - Secure payment confirmation with signature validation and user data sync
- **Built-in AI Idea Generator** - Powered by Google Gemini 2.5 Flash, generates 5 unique app ideas with features and target audience
- **Custom Prompt Generator** - Creates detailed Replit AI Builder prompts based on selected idea
- **Extremely Detailed Guide** - Step-by-step instructions covering every single action needed
- **Zero Assumptions** - Includes account creation, GitHub setup, payment configuration, and more
- **Copy-to-Clipboard Functionality** - Easy copying of all AI-generated prompts
- **Mobile Responsive** - Beautiful design across all devices
- **Notion-style Layout** - Clean sidebar navigation with smooth scrolling
- **Professional Design** - Pastel gradients with blue/purple color scheme

## Project Structure

### Backend
- **server/whop-sdk.ts** - Whop authentication and access control
  - `verifyUserToken()` - Validates JWT tokens from Whop using public key
  - `checkUserAccess()` - Verifies user has valid membership/purchase
  - `verifyWebhookSignature()` - Validates webhook payloads with HMAC-SHA256
- **server/storage.ts** - MongoDB and in-memory storage for Whop users
  - `MongoStorage` - Stores Whop users in MongoDB (whop_users collection)
  - `MemStorage` - In-memory fallback storage
  - `upsertUser()` - Creates new users or updates existing ones with email/metadata
  - Automatic user creation when users authenticate via Whop
  - Syncs user data from webhook events
- **server/gemini.ts** - Google Gemini AI integration with retry logic
  - `generateAppIdeas()` - Generates 5 app ideas with structured JSON output
  - `generateReplitPrompt()` - Creates custom Replit prompts based on selected idea
  - Uses gemini-2.5-flash model with 3 retry attempts for reliability
- **server/routes.ts** - API endpoints
  - `POST /api/generate-ideas` - Generate app ideas
  - `POST /api/generate-prompt` - Generate Replit prompt from selected idea
  - `GET /api/auth/me` - Verify user authentication, access level, and auto-store user in DB
  - `POST /api/payment/charge` - Create one-time payment for course access
  - `POST /api/webhooks/whop` - Handle Whop webhook events (payment.succeeded, membership.went_valid) and sync user data
  - `GET /api/debug/users` - Debug endpoint to list all stored users (remove in production)

### Frontend Components
- **WhopIframeSdkProvider** (`client/src/lib/whop-iframe.tsx`) - Whop iFrame SDK integration
  - Creates and provides iFrame SDK instance using @whop-apps/iframe
  - Synchronous initialization with useMemo for immediate availability
  - Error handling for missing VITE_WHOP_APP_ID configuration
  - useIframeSdk hook for consuming SDK in components
- **AIIdeaGenerator** - Complete workflow component
  - Generate ideas button with loading state
  - Selectable idea cards with features
  - Custom prompt generation
  - Copy functionality for generated prompts
- **AppSidebar** - Navigation with step icons
- **CodeBlock** - Reusable component with copy-to-clipboard
- **Shadcn UI Components** - Card, Button, Badge, Sidebar primitives

### Pages & Content
- **Checkout (`/checkout`)** - High-converting sales page
  - $97 one-time payment offer
  - Feature list with 8+ benefits
  - Social proof (500+ students, 4.9/5 rating)
  - 3 benefit cards (24hr launch, start earning, no coding)
  - FAQ section addressing common objections
  - 30-day money-back guarantee
  - Dual CTA buttons (top and bottom)
- **Protected Experience (`/experiences/:experienceId`)** - Access control wrapper
  - Verifies user authentication via Whop JWT token
  - Checks if user has purchased course
  - Shows checkout page if no access
  - Shows course content if purchased
  - Loading and error states
- **Home (`/`)** - Complete guide with detailed sections:
  - **Hero** - Value proposition and overview
  - **Step 1: Get Your App Idea** - Built-in AI generator (no ChatGPT needed)
    - Generates 5 ideas with Gemini AI
    - Select idea and generate custom Replit prompt
    - Explanation of what makes a good app idea
  - **Step 2: Build with Replit** - 6 detailed substeps
    1. Create Replit account
    2. Open Replit AI Agent
    3. Paste custom prompt
    4. Let AI build the app
    5. Test the app
    6. Make improvements (optional)
  - **Step 3: Deploy to Vercel** - 6 detailed substeps
    1. Create GitHub account (if needed)
    2. Connect Replit to GitHub
    3. Create Vercel account
    4. Import project to Vercel
    5. Configure and deploy
    6. Get app URL
  - **Step 4: Launch on Whop** - 8 detailed substeps
    1. Create Whop account
    2. Set up payments (Stripe integration)
    3. Create product listing
    4. Write compelling description
    5. Set pricing (one-time or subscription)
    6. Add screenshots
    7. Publish product
    8. Share and promote
  - **Bonus Tips** - Marketing, scaling, and next app ideas
  - **Resources** - Links to Replit, Vercel, Whop, GitHub
  - **Footer** - Motivational message

### Design System
**Colors:**
- Primary: `245 70% 62%` (Pastel Blue)
- Secondary: `270 65% 70%` (Soft Purple)
- Background: Pure white
- Sidebar: Subtle blue-gray tint
- Code blocks: Light blue-gray background

**Typography:**
- Headings: Poppins (600-800 weight)
- Body: Inter (400-600 weight)
- Code: Courier New monospace

**Spacing:**
- Sections: py-20 (generous vertical spacing)
- Content: max-w-4xl container
- Cards: p-6 padding with rounded-xl

## Tech Stack
- **Frontend:** React 18 + TypeScript
- **Backend:** Express.js + Node.js
- **AI:** Google Gemini 2.5 Flash API
- **Styling:** Tailwind CSS + Shadcn UI
- **Routing:** Wouter
- **State Management:** TanStack Query
- **Icons:** Lucide React
- **Build:** Vite

## Key User Journeys
1. **Generate App Idea** - User clicks button → AI generates 5 ideas → User selects one → AI creates custom Replit prompt
2. **Build App** - User copies prompt → Opens Replit → Pastes prompt → AI builds complete app
3. **Deploy App** - User connects GitHub → Imports to Vercel → Deploys with one click → Gets live URL
4. **Launch on Whop** - User creates product → Sets price → Publishes → Shares link
5. **First Sale** - User promotes app → Gets first customer → Earns money

## Data Model
- **WhopUser Schema** (`shared/schema.ts`)
  - `id` - UUID primary key
  - `whopUserId` - Unique Whop user ID from JWT token
  - `email` - User email (populated from webhooks)
  - `metadata` - JSON string for additional webhook data
  - `createdAt` - Timestamp of first user creation

## Recent Changes
- **2025-10-25:** Fixed MongoDB user storage for Whop authentication
  - **Schema Update:** Replaced custom User (username/password) with WhopUser (whopUserId/email/metadata)
  - **Storage Rewrite:** Implemented proper upsert logic that updates existing users with new webhook data
  - **Auto-Storage:** Users are automatically stored in MongoDB when they authenticate via /api/auth/me
  - **Webhook Sync:** payment.succeeded and membership.went_valid events now properly store/update user data
  - **Removed Custom Auth:** Deleted login/register pages and routes - now 100% Whop authentication
  - **MongoDB Collection:** Changed from "users" to "whop_users" collection
  - **Logging:** Added detailed logging for create/update operations (📝 Creating, 🔄 Updated, ♻️ Already exists)
  - **Debug Endpoint:** Added /api/debug/users to verify users are being stored correctly
- **2025-10-25:** Implemented Whop iFrame SDK payment modal integration
  - **Payment Modal Implementation:** Switched from redirect-based checkout to in-app payment modal
    - Created `client/src/lib/whop-iframe.tsx` with WhopIframeSdkProvider using @whop-apps/iframe
    - Integrated iFrame SDK provider in App.tsx root level
    - Updated checkout page to use `iframeSdk.inAppPurchase({ planId })` for modal payments
    - Fixed SDK initialization race condition using useMemo instead of useEffect
    - Added proper error handling for missing VITE_WHOP_APP_ID and VITE_WHOP_PLAN_ID
    - Differentiated payment cancellation vs payment failure with appropriate toast messages
    - Success flow shows toast and redirects to home after 2 seconds
  - **Environment Variables Required:**
    - `VITE_WHOP_APP_ID` - Whop App ID (frontend accessible)
    - `VITE_WHOP_PLAN_ID` - Whop Pricing Plan ID (frontend accessible)
    - `WHOP_API_KEY` - Whop API Key (backend only)
    - `WHOP_WEBHOOK_SECRET` - Webhook signature verification (backend only)
  - Implemented JWT-based user authentication with Whop's public key
  - Created access control system to gate course content
  - Built high-converting checkout page with proven conversion elements
  - Implemented secure webhook handler with signature validation
  - Added product-specific membership filtering
  - Created header utility to pass Whop tokens from frontend to backend
  - Protected /experiences/:experienceId route behind purchase requirement
- **2025-10-09:** Complete AI-powered guide implementation
  - Integrated Google Gemini 2.5 Flash for idea generation
  - Built AI Idea Generator component with full workflow
  - Created backend API routes with retry logic and error handling
  - Rewrote all guide steps with extreme detail for beginners:
    - Step 1: AI idea generator replacing ChatGPT
    - Step 2: 6 detailed Replit build substeps
    - Step 3: 6 detailed Vercel deployment substeps
    - Step 4: 8 detailed Whop launch substeps
  - Added bonus tips section for marketing and scaling
  - Updated hero section and sidebar
  - Fixed undefined checks and API error handling
  - Added automatic retry logic for Gemini API (3 attempts)

## Development Notes
- Backend uses Gemini AI with structured JSON output for reliability
- Retry logic handles temporary API overload issues
- All prompts are AI-generated on demand (no static content)
- Guide is designed for complete beginners with zero technical assumptions
- Each step includes account creation instructions
- Copy functionality uses Clipboard API
- Sidebar uses Shadcn's sidebar primitives for consistency
- Mobile-first responsive design approach

## API Integration
- **Gemini API Key:** Managed via Replit Secrets as `GEMINI_API_KEY`
- **Model:** gemini-2.5-flash (most stable and current)
- **Retry Strategy:** 3 attempts with 2-second delay between retries
- **Response Format:** Structured JSON with schema validation
