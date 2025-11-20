import { CodeBlock } from "@/components/code-block";
import { Card } from "@/components/ui/card";
import { AIIdeaGenerator } from "@/components/ai-idea-generator";
import { 
  ExternalLink, 
  Lightbulb, 
  Code, 
  Cloud, 
  DollarSign, 
  Sparkles, 
  BookOpen, 
  Heart,
  Github,
  CheckCircle2,
  Zap
} from "lucide-react";

export default function Experience() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-primary/10 via-accent/10 to-background py-20 px-6 md:px-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Build & Sell Your First App on Whop
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            The complete beginner's guide to launching your app empire
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
              <p className="text-foreground">Generate app ideas with our built-in AI</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
              <p className="text-foreground">Build it instantly using Replit AI Builder</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
              <p className="text-foreground">Host it for free on Render</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
              <p className="text-foreground">Launch and sell it on Whop marketplace</p>
            </div>
          </div>
          <p className="mt-8 text-primary font-semibold text-lg">
            No coding required. 100% free to start. Your first app launches today.
          </p>
        </div>
      </section>

      {/* Step 1: Get Your Whop API Key */}
      <section id="step-1" className="py-20 px-6 md:px-12 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Step 1: Set Up Your Whop Developer Account
            </h2>
          </div>
          
          <div className="space-y-8">
            <p className="text-lg text-foreground leading-relaxed">
              First things first—you need a Whop developer account and credentials. This will allow your app to work inside Whop's platform, 
              handle authentication automatically, and get listed in the Whop App Store.
            </p>

            <Card className="p-6 bg-accent/10 border-accent/30">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                Why start with Whop?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Unlike building a standalone website, Whop Apps run inside creator communities with built-in authentication, 
                payments, and distribution. This means you don't need to build login systems or payment processors—Whop handles it all!
              </p>
            </Card>

            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Get Your Credentials:
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">Create Your Whop Developer Account</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>
                          Go to{" "}
                          <a
                            href="https://whop.com/dashboard/developer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center gap-1"
                            data-testid="link-whop-developer"
                          >
                            whop.com/dashboard/developer
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Sign in or create a Whop account (it's free!)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>You'll see the developer dashboard</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">Create Your App & Get Credentials</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Look for the "Create app" button and click it</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Choose a name for your app—don't worry, you can always change it later</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Hit "Save" and you're in!</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Scroll down to find the "Environment variables" section—this is where your app's credentials live</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>
                          <strong className="text-foreground">Copy all of these credentials!</strong> These are like your app's secret keys—you'll paste them into Replit in Step 3 to connect everything together
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">Save Your Credentials Safely</h4>
                    <p className="text-muted-foreground">
                      Keep your credentials handy—you'll paste them into Replit when building your app. <strong className="text-foreground">Never share these publicly!</strong>
                    </p>
                    <Card className="p-4 bg-muted/50">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Pro tip:</strong> Save them in a notes app temporarily. 
                        You'll use them in Step 3 when Replit asks for environment variables.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <p className="text-foreground font-semibold mb-2">
                ✓ You now have your Whop developer account and credentials!
              </p>
              <p className="text-muted-foreground">
                Next up: Generate your app idea and get a custom build prompt optimized for Whop.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Step 2: Get Your App Idea */}
      <section id="step-2" className="py-20 px-6 md:px-12 bg-card/30 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Step 2: Get Your App Idea
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">
                Now that you have your Whop account set up, let's find the perfect app idea. Our AI generator creates app ideas 
                specifically designed to work as Whop Apps—embedded in creator communities with built-in monetization.
              </p>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                What makes a great Whop App idea?
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Solves a specific problem for community members or creators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Simple enough to build in one session with AI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Works well inside an iframe (no complex navigation needed)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Can be monetized (per seat, monthly, transaction fee, or installation fee)</span>
                </li>
              </ul>
            </Card>

            <div className="border-t border-border pt-8">
              <AIIdeaGenerator />
            </div>

            <div className="mt-8 p-6 bg-accent/5 border border-accent/20 rounded-xl">
              <p className="text-foreground font-semibold mb-2">
                What happens next?
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Once you've selected an idea and generated your custom Replit prompt, copy it and head to Step 3. 
                This prompt is specially crafted to build a Whop-compatible app that will work perfectly inside Whop's iframe!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3: Build with Replit */}
      <section id="step-3" className="py-20 px-6 md:px-12 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Step 3: Build Your Whop App with Replit
            </h2>
          </div>
          
          <div className="space-y-8">
            <p className="text-lg text-foreground leading-relaxed">
              Now that you have your Whop API key and custom prompt, it's time to build! Replit AI Builder will create 
              a complete Whop App with Next.js, Whop SDK, and all the iframe compatibility you need.
            </p>

            <Card className="p-6 bg-accent/10 border-accent/30">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                What's Different About Building Whop Apps?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The AI prompt you generated includes special instructions for Whop compatibility: Next.js App Router, 
                @whop/next package, experience view routes, and iframe support. Replit will build all of this automatically!
              </p>
            </Card>

            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Detailed Step-by-Step Instructions:
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">Create a Replit Account (if you don't have one)</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>
                          Go to{" "}
                          <a
                            href="https://replit.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center gap-1"
                            data-testid="link-replit"
                          >
                            replit.com
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Click "Sign up" in the top right corner</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Sign up with Google, GitHub, or email (Google is fastest)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Complete the quick onboarding (takes 30 seconds)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">Paste Your Whop-Compatible Prompt</h4>
                    <p className="text-muted-foreground">
                      Once logged in, you'll immediately see a chat input. Copy the Whop-specific prompt you generated in Step 2 and paste it directly into the chat box.
                    </p>
                    <Card className="p-4 bg-accent/10 border-accent/30">
                      <p className="text-sm text-foreground mb-1">
                        <strong>Important:</strong> Use the AI-generated prompt from Step 2!
                      </p>
                      <p className="text-xs text-muted-foreground">
                        It includes critical Whop requirements like Next.js App Router, @whop/next package, 
                        experience view routes, and iframe compatibility that make your app work in Whop.
                      </p>
                    </Card>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">Let AI Build Your App</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Hit Enter or click "Send" to start the magic</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>The AI will start planning your app—this typically takes a couple of minutes. Grab a coffee while it thinks!</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>When asked, choose "Build the entire app" and let the AI work its magic—it's coding everything for you</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">Add Your Whop Credentials to Replit</h4>
                    <Card className="p-4 bg-accent/10 border-accent/30 mb-3">
                      <p className="text-sm text-foreground mb-1">
                        <strong>CRITICAL STEP!</strong> Your app needs the Whop credentials to work.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Without these, your app will show errors when deployed to Whop.
                      </p>
                    </Card>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>While the AI is building, look for the "+Tools & files" button (or a plus icon) at the top of your Replit workspace</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Type "Secrets" in the search box—you'll see it with a lock icon. Click on it</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>At the bottom of the Secrets panel, you'll see a button labeled "Edit as env."—click that</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Now paste all the credentials you copied from Step 1 (all 4 of them at once), then hit save</span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-3">
                      ✓ Your credentials are now securely stored in Replit and will be available to your app!
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    5
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">Test Your App in Whop</h4>
                    <p className="text-muted-foreground">
                      Exciting! Your app is built. Now let's see it running inside Whop, just like your users will see it.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>First, get your app's URL from Replit: Click "+Tools & files" again and search for "networking"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>You'll see your dev URL—copy it. This is your app's temporary web address</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Now, connect it to Whop: Head back to whop.com/dashboard/developer and click on your app</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Look for the "Hosting" section—you'll see a "base url" field. Paste your dev URL there</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Scroll back up and click "Save" to apply your changes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Time to install and test: Back on the developer dashboard, find the 3-dot menu on the right side of your app and click it</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Select "Install app" from the menu</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Click "Add" to install your app—now you can see it live in your Whop dashboard!</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    6
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">Troubleshooting & Debugging</h4>
                    <p className="text-muted-foreground">
                      Running into issues? Don't worry—the AI can fix them! Whether your app won't load, you're seeing errors, or it's not displaying properly in the Whop iframe, just tell the AI what's wrong.
                    </p>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>"I'm getting an error that says [paste the error message]"</li>
                      <li>"The app isn't showing up in the Whop iframe [tell AI what's wrong or what you see]"</li>
                      <li>"My app is displaying a blank screen"</li>
                      <li>"Fix this error: [describe what's happening]"</li>
                    </ul>
                    <p className="text-muted-foreground text-sm">
                      Simply describe the problem or paste the error message, and the AI will diagnose and fix it for you!
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    7
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">Make Improvements (Optional)</h4>
                    <p className="text-muted-foreground">
                      Want to add features or change the design? Just ask the AI agent:
                    </p>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>"Can you change the color scheme to blue and white?"</li>
                      <li>"Add a contact form at the bottom"</li>
                      <li>"Make the buttons bigger and more prominent"</li>
                      <li>"Add a pricing section with 3 plans"</li>
                    </ul>
                    <p className="text-muted-foreground text-sm">
                      The AI will implement your changes in seconds!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <p className="text-foreground font-semibold mb-2">
                ✓ Your app is now built and working!
              </p>
              <p className="text-muted-foreground">
                Next up: We'll deploy it to the internet for free using Render, so anyone can access your app from anywhere.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Step 4: Host on Render */}
      <section id="step-4" className="py-20 px-6 md:px-12 bg-card/30 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Cloud className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Step 4: Deploy to Render (100% Free Hosting)
            </h2>
          </div>
          
          <div className="space-y-8">
            <p className="text-lg text-foreground leading-relaxed">
              Now that your Whop App is built in Replit, it's time to deploy it! Render will host 
              your app completely free and give you the URL you'll use to connect it to Whop.
            </p>

            <Card className="p-6 bg-accent/10 border-accent/30">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                Why Render for Whop Apps?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Render is perfect for hosting web apps. It's free, fast, and gives you a public URL 
                that Whop can load in their iframe. Plus, it automatically redeploys when you push updates!
              </p>
            </Card>

            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Detailed Deployment Instructions:
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">Connect Replit to GitHub</h4>
                    <p className="text-muted-foreground">
                      To get your code onto Render, we first need to save it to GitHub—think of it like Dropbox for code.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Back in your Replit project, click the "+Tools & files" button again and search for "Git"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Click "Connect to Github" and log into your GitHub account (if you don't have one, you can create it right there)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Click the "Install and Authorize" button to let Replit save your code to GitHub</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Click "Create Remote" to set up the connection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Finally, click "Create repository on github"—your code is now safely stored on GitHub!</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">Create a Render Account</h4>
                    <p className="text-muted-foreground">
                      Now let's get you set up on Render—it's super quick and 100% free.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>
                          Head over to{" "}
                          <a
                            href="https://render.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center gap-1"
                            data-testid="link-render-signup"
                          >
                            render.com
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Click "Get Started" and then "Sign up with GitHub"—this is the easiest way since you just connected GitHub</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Authorize Render to see your GitHub repositories</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Complete your account setup—everything is free for your app!</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">Deploy Your Project on Render</h4>
                    <p className="text-muted-foreground">
                      Time to bring your app into Render so it can go live on the internet!
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>On your Render dashboard, click "+ Add New " and then select "Web Service"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>You'll see all your GitHub repositories listed here</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Look for your app's repository—the one you just created from Replit. It should be at the top</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Click the "Import" button next to it</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">Add Whop Credentials to Render</h4>
                    <Card className="p-4 bg-accent/10 border-accent/30 mb-3">
                      <p className="text-sm text-foreground mb-1">
                        <strong>CRITICAL!</strong> Add your credentials BEFORE deploying.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Without these, your app won't work in Whop's iframe!
                      </p>
                    </Card>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>On the import screen, scroll down until you find the "Environment Variables" section</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Click "Add" or the dropdown arrow to open it up</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Add each credential from Step 1, one at a time: WHOP_API_KEY, NEXT_PUBLIC_WHOP_APP_ID, and the others</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>For each credential, copy the exact key name and value from your Whop dashboard</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span><strong className="text-foreground">Pro tip:</strong> Add each credential carefully to ensure your app works correctly!</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    5
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">Deploy Your App</h4>
                    <p className="text-muted-foreground">
                      This is it—the moment your app goes live on the internet!
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Render will automatically detect your build settings and configure everything for you</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Take a quick moment to double-check that all your Whop credentials are in the Environment Variables section</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>When you're ready, click the "Create Web Service" button</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Sit back and relax for 3-5 minutes while Render builds and deploys your app—you'll see the build progress</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>When the build is complete and shows "Live," your app is officially live on the internet!</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    6
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">Get Your App's URL</h4>
                    <p className="text-muted-foreground">
                      Your app is live! Now let's grab its permanent web address.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>After the confetti clears, you'll see a preview of your app running live</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Look for the URL at the top—it'll look something like <code className="px-2 py-1 bg-muted rounded text-xs font-mono">your-app-name.onrender.com</code></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Copy this URL somewhere safe—you'll paste it into Whop in the next step</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Click "Visit" to open your app in a new tab and see it in action!</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Feel free to share the link with friends—it's live for anyone in the world to see</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-foreground mb-2">
                    Your app is now live on the internet!
                  </p>
                  <p className="text-muted-foreground">
                    Anyone in the world can access your app using the Render URL. Next, we'll list it on Whop 
                    so you can start making money from it!
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Step 5: Connect to Whop */}
      <section id="step-5" className="py-20 px-6 md:px-12 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Step 5: Connect Your App to Whop
            </h2>
          </div>
          
          <div className="space-y-8">
            <p className="text-lg text-foreground leading-relaxed">
              Final step! Now we'll connect your deployed Render app to Whop so it works inside the Whop iframe. 
              This is what makes your app accessible to creators and their communities!
            </p>

            <Card className="p-6 bg-accent/10 border-accent/30">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                What This Step Does
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                You'll configure Whop to load your Render URL when someone installs your app. Whop will embed your app 
                in an iframe, handle authentication, and make it available to thousands of creators!
              </p>
            </Card>

            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Connect Your App:
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">Go to Whop Developer Dashboard</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>
                          Open{" "}
                          <a
                            href="https://whop.com/dashboard/developer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center gap-1"
                            data-testid="link-whop-developer-final"
                          >
                            whop.com/dashboard/developer
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Find your app in the list (the one you created in Step 1)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Click on it to open the app settings</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">Configure App Hosting</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Scroll down to the "Hosting" section</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>For "App Base URL", paste your Render URL from Step 4</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>For "Experience View Path", enter: <code className="text-sm bg-muted px-1 py-0.5 rounded">/experiences/[experienceId]</code></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Click "Save" or "Update"</span>
                      </li>
                    </ul>
                    <Card className="p-4 bg-muted/30 mt-3">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">What this does:</strong> Tells Whop where to load your app. 
                        The <code className="text-xs bg-background px-1 py-0.5 rounded">[experienceId]</code> part is a placeholder 
                        that Whop replaces with the actual ID when someone installs your app.
                      </p>
                    </Card>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">Test Your App in Whop</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>In the developer dashboard, find the "Install app" button</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Click it or copy the installation link</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Create a test Whop community if you don't have one (it's free)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Install your app into your test community</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Click on your app in the Whop sidebar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Your app should load inside Whop's iframe—you did it!</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1 space-y-3">
                    <h4 className="font-semibold text-foreground text-lg">Submit to Whop App Store (Optional)</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Once your app is working perfectly, go back to developer dashboard</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Add app description, screenshots, and branding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Set your pricing model (per seat, monthly subscription, installation fee, or transaction fees)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Click "Submit for review" to get listed in the Whop App Store</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">→</span>
                        <span>Once approved, thousands of creators can discover and install your app!</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-foreground mb-2">
                    Congratulations! Your Whop App is Live!
                  </p>
                  <p className="text-muted-foreground">
                    Your app is now working inside Whop's iframe and ready for creators to install. When you're ready, 
                    submit it to the Whop App Store to reach thousands of potential customers!
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Helpful Resources Section */}
      <section id="resources" className="py-20 px-6 md:px-12 bg-card/30 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Helpful Tips & Resources
            </h2>
          </div>
          
          <div className="space-y-8">
            <p className="text-lg text-foreground leading-relaxed">
              You've built your first Whop App! Here are some tips to help you succeed and resources to learn more.
            </p>

            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Pro Tips for Success:
              </h3>

              <div className="grid gap-4">
                <Card className="p-6">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Start Simple, Then Iterate
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Launch with core features first. Get feedback from real users, then add advanced features based on what they actually need.
                  </p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Test in Whop's Iframe Before Submitting
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Always test your app inside a Whop community first. Some features might work on your local machine but break in the iframe environment.
                  </p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Use Whop's Built-in Features
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    The Whop SDK provides user data, authentication, and payment info automatically. Don't rebuild what Whop already gives you!
                  </p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    Keep Your WHOP_API_KEY Secret
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Never commit your API key to GitHub or share it publicly. Always use environment variables (Replit Secrets or Render Environment Variables).
                  </p>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Essential Resources:
              </h3>

              <div className="grid gap-4">
                <Card className="p-4 hover-elevate">
                  <a 
                    href="https://docs.whop.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group"
                    data-testid="link-whop-docs"
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Whop Documentation</p>
                        <p className="text-sm text-muted-foreground">Official guides for building Whop Apps</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  </a>
                </Card>

                <Card className="p-4 hover-elevate">
                  <a 
                    href="https://docs.replit.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group"
                    data-testid="link-replit-docs"
                  >
                    <div className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Replit Documentation</p>
                        <p className="text-sm text-muted-foreground">Learn how to use Replit for development</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  </a>
                </Card>

                <Card className="p-4 hover-elevate">
                  <a 
                    href="https://vercel.com/docs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group"
                    data-testid="link-vercel-docs"
                  >
                    <div className="flex items-center gap-3">
                      <Cloud className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Render Documentation</p>
                        <p className="text-sm text-muted-foreground">Master deployment and hosting</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  </a>
                </Card>

                <Card className="p-4 hover-elevate">
                  <a 
                    href="https://nextjs.org/docs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group"
                    data-testid="link-nextjs-docs"
                  >
                    <div className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Next.js Documentation</p>
                        <p className="text-sm text-muted-foreground">Learn the framework powering your app</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  </a>
                </Card>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <Sparkles className="w-10 h-10" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Ready to Build Your Next App?
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  You now have everything you need to create and sell Whop Apps! Use the AI prompt generator at the top 
                  to brainstorm your next idea, then follow the 5 steps again.
                </p>
                <div className="pt-4">
                  <p className="text-sm text-foreground font-semibold">
                    Happy building!
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              Built for aspiring Whop App developers
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Heart className="w-4 h-4 fill-primary text-primary" />
              <span>Made by developers, for developers</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
