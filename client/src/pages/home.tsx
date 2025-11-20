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
  Zap,
  ArrowRight,
  Rocket,
  Check,
  AlertCircle,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Step 1 - Whop Setup Images
import whopCreateAppBtn from "@/course-images/step-1/whop-create-app-button.png";
import whopCreateAppForm from "@/course-images/step-1/whop-create-app-form.png";
import whopAppCreated from "@/course-images/step-1/whop-app-created.png";
import whopEnvVariables from "@/course-images/step-1/whop-env-variables.png";

// Step 2 - AI Idea Generator Images
import replitAiChat from "@/course-images/step-2/replit-ai-chat.png";
import replitBuildChoice from "@assets/image_1761477752154.png";

// Step 3 - Build with Replit Images
import replitConsole from "@/course-images/step-3/replit-console.png";
import replitNetworking from "@assets/Screenshot_347_1761478110510.png";
import replitSecretsSearch from "@/course-images/step-3/replit-secrets-search.png";
import replitSecretsTab from "@/course-images/step-3/replit-secrets-tab.png";
import replitSecretsEditor from "@/course-images/step-3/replit-secrets-editor.png";
import replitDevUrl from "@/course-images/step-3/replit-dev-url.png";
import replitGitSearch from "@assets/Screenshot_352_1761478742354.png";
import replitConnectGithub from "@/course-images/step-3/replit-connect-github.png";
import githubAuthorize from "@/course-images/step-3/github-authorize.png";
import replitCreateRemote from "@assets/image (1)_1761479697707.png";
import replitCreateRepo from "@assets/image (2)_1761479697705.png";

// Step 4 - Deploy to Render Images
import renderOverview from "@/course-images/step-4/render-overview.png";
import renderGitSearch from "@/course-images/step-4/render-git-search.png";
import renderInstanceType from "@/course-images/step-4/render-instance-type.png";
import renderEnvSection from "@/course-images/step-4/render-env-section.png";
import renderEnvPaste from "@assets/Screenshot_342_1761480309559.png";
import renderAdvanced from "@/course-images/step-4/render-advanced.png";

// Step 5 - Go Live on Whop Images
import whopHostingConfig from "@/course-images/step-5/whop-hosting-config.png";
import whopInstallApp from "@/course-images/step-5/whop-install-app.png";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Hero Section */}
      <section id="home" className="relative py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 md:space-y-8">
            <Badge
              variant="outline"
              className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 text-purple-200 px-4 md:px-5 py-1.5 md:py-2 text-xs md:text-sm font-medium shadow-lg"
              data-testid="badge-hero"
            >
              <Rocket className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
              Build & Monetize in 24 Hours
            </Badge>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent tracking-tight leading-[1.1] px-2">
              Launch Your First
              <br />
              Whop App Today
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              No coding experience needed. Follow 5 simple steps to build,
              deploy, and start earning from your own app using AI.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 pt-2 md:pt-4 px-4">
              <div className="flex items-center gap-1.5 md:gap-2 text-gray-400 text-xs md:text-sm">
                <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                <span>500+ Apps Built</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block"></div>
              <div className="flex items-center gap-1.5 md:gap-2 text-gray-400 text-xs md:text-sm">
                <Zap className="w-3 h-3 md:w-4 md:h-4 text-cyan-400 flex-shrink-0" />
                <span>100% Free Tools</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-600 hidden sm:block"></div>
              <div className="flex items-center gap-1.5 md:gap-2 text-gray-400 text-xs md:text-sm">
                <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-emerald-400 flex-shrink-0" />
                <span>Beginner Friendly</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 mt-12 md:mt-16 lg:mt-20 max-w-6xl mx-auto">
            {[
              {
                step: 1,
                title: "Setup Whop",
                icon: DollarSign,
                gradient: "from-purple-500/10 to-purple-600/5",
                border: "border-purple-500/30",
                text: "text-purple-300",
              },
              {
                step: 2,
                title: "Get App Idea",
                icon: Lightbulb,
                gradient: "from-cyan-500/10 to-cyan-600/5",
                border: "border-cyan-500/30",
                text: "text-cyan-300",
              },
              {
                step: 3,
                title: "Build with AI",
                icon: Code,
                gradient: "from-purple-500/10 to-purple-600/5",
                border: "border-purple-500/30",
                text: "text-purple-300",
              },
              {
                step: 4,
                title: "Deploy Free",
                icon: Cloud,
                gradient: "from-cyan-500/10 to-cyan-600/5",
                border: "border-cyan-500/30",
                text: "text-cyan-300",
              },
              {
                step: 5,
                title: "Go Live",
                icon: Zap,
                gradient: "from-purple-500/10 to-purple-600/5",
                border: "border-purple-500/30",
                text: "text-purple-300",
              },
            ].map(({ step, title, icon: Icon, gradient, border, text }) => (
              <button
                key={step}
                onClick={() => scrollToSection(`#step-${step}`)}
                className={`group relative p-4 md:p-5 lg:p-6 rounded-lg md:rounded-xl border ${border} bg-gradient-to-br ${gradient} hover-elevate active-elevate-2 text-left transition-all`}
                data-testid={`button-nav-step-${step}`}
              >
                <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border ${border} flex items-center justify-center`}
                  >
                    <Icon className={`w-5 h-5 md:w-6 md:h-6 ${text}`} />
                  </div>
                  <div>
                    <div className={`text-xs font-bold mb-0.5 md:mb-1 ${text}`}>
                      Step {step}
                    </div>
                    <p className="text-xs md:text-sm text-gray-300 font-medium">{title}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Step 1 - Setup Whop */}
      <section
        id="step-1"
        className="relative py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-12 scroll-mt-16 md:scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 lg:space-y-10">
          <div className="space-y-3 md:space-y-4 lg:space-y-5">
            <Badge className="bg-purple-500/10 border border-purple-500/30 text-purple-300 px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm">
              <span className="font-bold mr-1.5 md:mr-2">01</span> First Things First
            </Badge>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent tracking-tight leading-tight">
              Set Up Your Whop Developer Account
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed">
              First things first—you need a Whop developer account and
              credentials. This will allow your app to work inside Whop's
              platform, handle authentication automatically, and get listed in
              the Whop App Store.
            </p>
          </div>

          <Card className="p-5 md:p-8 lg:p-10 bg-gradient-to-br from-purple-950 to-black border-purple-500/30">
            <div className="space-y-2 md:space-y-3 mb-6 md:mb-8 p-4 md:p-5 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <h3 className="font-semibold text-base md:text-lg text-purple-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                Why start with Whop?
              </h3>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                Unlike building a standalone website, Whop Apps run inside
                creator communities with built-in authentication, payments, and
                distribution. This means you don't need to build login systems
                or payment processors—Whop handles it all!
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 shadow-lg">
                  1
                </div>
                <div className="flex-1 space-y-2 md:space-y-3">
                  <h3 className="font-bold text-lg md:text-xl text-white">
                    Create Your Whop Developer Account
                  </h3>
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base">
                    <li className="flex items-start gap-2 md:gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Go to{" "}
                        <a
                          href="https://whop.com/dashboard/developer"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-300 underline underline-offset-2 hover:text-purple-200 inline-flex items-center gap-1 font-medium"
                          data-testid="link-whop-developer"
                        >
                          whop.com/dashboard/developer
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>Sign in or create a Whop account (it's free!)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>You'll see the developer dashboard</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

              <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 shadow-lg">
                  2
                </div>
                <div className="flex-1 space-y-2 md:space-y-3">
                  <h3 className="font-bold text-lg md:text-xl text-white">
                    Create Your App & Get Credentials
                  </h3>
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Look for the{" "}
                        <span className="font-semibold text-white">
                          "Create app"
                        </span>{" "}
                        button and click it
                      </span>
                    </li>
                  </ul>
                  <img
                    src={whopCreateAppBtn}
                    alt="Whop Apps dashboard with Create app button"
                    className="rounded-lg md:rounded-xl border border-purple-500/20 w-full max-w-full shadow-2xl"
                    data-testid="img-whop-create-btn"
                  />
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base mt-3 md:mt-4">
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Choose a name for your app—don't worry, you can always
                        change it later
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Hit{" "}
                        <span className="font-semibold text-white">
                          "Create"
                        </span>{" "}
                        and you're in!
                      </span>
                    </li>
                  </ul>
                  <img
                    src={whopCreateAppForm}
                    alt="Create app form with name field"
                    className="rounded-lg md:rounded-xl border border-purple-500/20 w-full max-w-full shadow-2xl"
                    data-testid="img-whop-create-form"
                  />
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base mt-3 md:mt-4">
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Click on your app name to open its details page
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Scroll down to find the{" "}
                        <span className="font-semibold text-white">
                          "Environment variables"
                        </span>{" "}
                        section—this is where your app's credentials live
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        You'll see 4 important values: API key, App ID, Agent
                        User ID, and Company ID
                      </span>
                    </li>
                  </ul>
                  <img
                    src={whopEnvVariables}
                    alt="Whop app environment variables showing API key and IDs"
                    className="rounded-lg md:rounded-xl border border-purple-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-whop-env"
                  />
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base mt-3 md:mt-4">
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Copy all of these credentials! These are like your app's
                        secret keys—you'll paste them into Replit in Step 3
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

              <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 shadow-lg">
                  3
                </div>
                <div className="flex-1 space-y-2 md:space-y-3">
                  <h3 className="font-bold text-lg md:text-xl text-white">
                    Save Your Credentials Safely
                  </h3>
                  <p className="text-gray-300">
                    Keep your credentials handy—you'll paste them into Replit
                    when building your app. Never share these publicly!
                  </p>
                  <div className="p-5 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    <p className="text-sm text-gray-300 flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-semibold text-cyan-300">
                          Pro tip:
                        </span>{" "}
                        Save them in a notes app temporarily. You'll use them in
                        Step 3 when Replit asks for environment variables.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 lg:mt-10 p-4 md:p-5 lg:p-6 rounded-lg md:rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30">
              <p className="text-emerald-300 font-medium flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6" />
                You now have your Whop developer account and credentials!
              </p>
            </div>
          </Card>

          <div className="flex items-center justify-center gap-3 text-gray-400 text-sm">
            <span>Next up</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-cyan-300 font-medium">
              Generate your app idea and get a custom build prompt optimized for
              Whop
            </span>
          </div>
        </div>
      </section>

      {/* Step 2 - Get App Idea */}
      <section
        id="step-2"
        className="relative py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-12 scroll-mt-16 md:scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 lg:space-y-10">
          <div className="space-y-3 md:space-y-4 lg:space-y-5">
            <Badge className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm">
              <span className="font-bold mr-1.5 md:mr-2">02</span> Get Creative
            </Badge>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent tracking-tight leading-tight">
              Get Your App Idea
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Now that you have your Whop account set up, let's find the perfect
              app idea. Our AI generator creates app ideas specifically designed
              to work as Whop Apps—embedded in creator communities with built-in
              monetization.
            </p>
          </div>

          <div className="space-y-4 md:space-y-5 mb-6 md:mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 md:gap-3">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
              What makes a great Whop App idea?
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              {[
                {
                  title: "Community-Focused",
                  desc: "Solves a specific problem for community members or creators",
                  gradient: "from-purple-500/10",
                },
                {
                  title: "AI-Buildable",
                  desc: "Simple enough to build in one session with AI",
                  gradient: "from-cyan-500/10",
                },
                {
                  title: "Iframe-Compatible",
                  desc: "Works well inside an iframe (no complex navigation needed)",
                  gradient: "from-purple-500/10",
                },
                {
                  title: "Monetizable",
                  desc: "Can be monetized (per seat, monthly, transaction fee, or installation fee)",
                  gradient: "from-cyan-500/10",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-xl border ${i % 2 === 0 ? "border-purple-500/30" : "border-cyan-500/30"} bg-gradient-to-br ${item.gradient} to-transparent `}
                >
                  <div
                    className={`text-base font-bold mb-2 ${i % 2 === 0 ? "text-purple-200" : "text-cyan-200"}`}
                  >
                    {item.title}
                  </div>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <AIIdeaGenerator />

          <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
            <h4 className="font-bold text-lg text-cyan-200 mb-2">
              What happens next?
            </h4>
            <p className="text-gray-300 text-sm">
              Once you've selected an idea and generated your custom Replit
              prompt, copy it and head to Step 3. This prompt is specially
              crafted to build a Whop-compatible app that will work perfectly
              inside Whop's iframe!
            </p>
          </div>
        </div>
      </section>

      {/* Step 3 - Build with Replit */}
      <section
        id="step-3"
        className="relative py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-12 scroll-mt-16 md:scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 lg:space-y-10">
          <div className="space-y-3 md:space-y-4 lg:space-y-5">
            <Badge className="bg-purple-500/10 border border-purple-500/30 text-purple-300 px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm">
              <span className="font-bold mr-1.5 md:mr-2">03</span> Build Time
            </Badge>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent tracking-tight leading-tight">
              Build Your Whop App with Replit
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Now that you have your Whop API key and custom prompt, it's time
              to build! Replit AI Builder will create a complete Whop App with
              Next.js, Whop SDK, and all the iframe compatibility you need.
            </p>
          </div>

          <Card className="p-5 md:p-8 lg:p-10 bg-gradient-to-br from-cyan-950 to-black border-cyan-500/30">
            <div className="space-y-2 md:space-y-3 mb-6 md:mb-8 p-4 md:p-5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <h3 className="font-semibold text-base md:text-lg text-cyan-200 flex items-center gap-2">
                <Code className="w-5 h-5" />
                What's Different About Building Whop Apps?
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The AI prompt you generated includes special instructions for
                Whop compatibility: Next.js App Router, @whop/next package,
                experience view routes, and iframe support. Replit will build
                all of this automatically!
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 shadow-lg">
                  1
                </div>
                <div className="flex-1 space-y-2 md:space-y-3">
                  <h3 className="font-bold text-lg md:text-xl text-white">
                    Create a Replit Account (if you don't have one)
                  </h3>
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Go to{" "}
                        <a
                          href="https://replit.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-300 underline underline-offset-2 hover:text-cyan-200 inline-flex items-center gap-1 font-medium"
                          data-testid="link-replit"
                        >
                          replit.com
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>Click "Sign up" in the top right corner</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Sign up with Google, GitHub, or email (Google is
                        fastest)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Complete the quick onboarding (takes 30 seconds)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

              <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 shadow-lg">
                  2
                </div>
                <div className="flex-1 space-y-3 md:space-y-4">
                  <h3 className="font-bold text-lg md:text-xl text-white">
                    Paste Your Whop-Compatible Prompt
                  </h3>
                  <p className="text-gray-300">
                    Once logged in, you'll immediately see a chat input. Copy
                    the Whop-specific prompt you generated in Step 2 and paste
                    it directly into the chat box.
                  </p>
                  <img
                    src={replitAiChat}
                    alt="Replit AI chat asking what do you want to make"
                    className="rounded-lg md:rounded-xl border border-cyan-500/20 w-full max-w-full shadow-2xl"
                    data-testid="img-replit-ai-chat"
                  />
                  <div className="p-5 rounded-lg bg-purple-500/10 border border-purple-500/30">
                    <p className="text-sm text-gray-300 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>
                        <span className="font-semibold text-purple-300">
                          Important:
                        </span>{" "}
                        Use the AI-generated prompt from Step 2! It includes
                        critical Whop requirements like Next.js App Router,
                        @whop/next package, experience view routes, and iframe
                        compatibility that make your app work in Whop.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

              <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 shadow-lg">
                  3
                </div>
                <div className="flex-1 space-y-2 md:space-y-3">
                  <h3 className="font-bold text-lg md:text-xl text-white">
                    Let AI Build Your App
                  </h3>
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Hit Enter or click "Start chat" to start the magic
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        The AI will start planning your app—this typically takes
                        a couple of minutes. Grab a coffee while it thinks!
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        When asked, choose{" "}
                        <span className="font-semibold text-white">
                          "Build the entire app"
                        </span>{" "}
                        and let the AI work its magic—it's coding everything for
                        you
                      </span>
                    </li>
                  </ul>
                  <img
                    src={replitBuildChoice}
                    alt="Replit AI asking how to continue with Build the entire app option"
                    className="rounded-lg md:rounded-xl border border-cyan-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-replit-build-choice"
                  />
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

              <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 shadow-lg">
                  4
                </div>
                <div className="flex-1 space-y-3 md:space-y-4">
                  <h3 className="font-bold text-lg md:text-xl text-white">
                    Add Your Whop Credentials to Replit
                  </h3>
                  <div className="p-5 rounded-lg bg-red-500/10 border border-red-500/30">
                    <p className="text-sm font-bold text-red-300 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      CRITICAL STEP! Your app needs the Whop credentials to
                      work.
                    </p>
                    <p className="text-xs text-gray-300">
                      Without these, your app will show errors when deployed to
                      Whop.
                    </p>
                  </div>
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        While the AI is building, look for the{" "}
                        <span className="font-semibold text-white">
                          "+Tools & files"
                        </span>{" "}
                        button (or a plus icon) at the top of your Replit
                        workspace
                      </span>
                    </li>
                  </ul>
                  <img
                    src={replitConsole}
                    alt="Replit tools and files button at the top of workspace"
                    className="rounded-lg md:rounded-xl border border-cyan-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-replit-console"
                  />
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base mt-3 md:mt-4">
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Type "Secrets" in the search box—you'll see it with a
                        lock icon. Click on it
                      </span>
                    </li>
                  </ul>
                  <img
                    src={replitSecretsSearch}
                    alt="Replit search showing Secrets option with lock icon"
                    className="rounded-lg md:rounded-xl border border-cyan-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-replit-secrets-search"
                  />
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base mt-3 md:mt-4">
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        At the bottom of the Secrets panel, you'll see a button
                        labeled{" "}
                        <span className="font-semibold text-white">
                          "Edit as .env"
                        </span>
                        —click that
                      </span>
                    </li>
                  </ul>
                  <img
                    src={replitSecretsTab}
                    alt="Replit Secrets tab with Edit as .env button"
                    className="rounded-lg md:rounded-xl border border-cyan-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-replit-secrets-tab"
                  />
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base mt-3 md:mt-4">
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Now paste all the credentials you copied from Step 1
                        (all 4 of them at once), then hit save
                      </span>
                    </li>
                  </ul>
                  <img
                    src={replitSecretsEditor}
                    alt="Replit secrets editor for pasting environment variables"
                    className="rounded-lg md:rounded-xl border border-cyan-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-replit-secrets-editor"
                  />
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

              <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 shadow-lg">
                  5
                </div>
                <div className="flex-1 space-y-3 md:space-y-4">
                  <h3 className="font-bold text-lg md:text-xl text-white">
                    Test Your App in Whop
                  </h3>
                  <p className="text-gray-300">
                    Exciting! Your app is built. Now let's see it running inside
                    Whop, just like your users will see it.
                  </p>
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        First, get your app's URL from Replit: Click "+Tools &
                        files" again and search for "networking"
                      </span>
                    </li>
                  </ul>
                  <img
                    src={replitNetworking}
                    alt="Replit tools and files search for networking"
                    className="rounded-lg md:rounded-xl border border-cyan-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-replit-networking"
                  />
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base mt-3 md:mt-4">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        You'll see your dev URL—copy it. This is your app's
                        temporary web address
                      </span>
                    </li>
                  </ul>
                  <img
                    src={replitDevUrl}
                    alt="Replit networking tab showing dev URL and QR code"
                    className="rounded-lg md:rounded-xl border border-cyan-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-replit-dev-url"
                  />
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base mt-3 md:mt-4">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Now, connect it to Whop: Head back to{" "}
                        <a
                          href="https://whop.com/dashboard/developer"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-300 underline underline-offset-2 hover:text-cyan-200 inline-flex items-center gap-1 font-medium"
                          data-testid="link-whop-developer-step3"
                        >
                          whop.com/dashboard/developer
                          <ExternalLink className="h-3 w-3" />
                        </a>{" "}
                        and click on your app
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Look for the "Hosting your" section—you'll see a "base
                        url" field. Paste your dev URL there
                      </span>
                    </li>
                  </ul>
                  <img
                    src={whopHostingConfig}
                    alt="Whop hosting configuration showing Base URL field"
                    className="rounded-lg md:rounded-xl border border-cyan-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-whop-hosting-step3"
                  />
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base mt-3 md:mt-4">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Scroll back up and click "Save" to apply your changes
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Time to install and test: Back on the developer
                        dashboard, find the 3-dot menu on the right side of your
                        app and click it
                      </span>
                    </li>
                  </ul>
                  <img
                    src={whopAppCreated}
                    alt="Whop Apps dashboard showing your app with 3-dot menu"
                    className="rounded-lg md:rounded-xl border border-cyan-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-whop-dashboard"
                  />
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base mt-3 md:mt-4">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>Select "Install app" from the menu</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Click "Add" to install your app—now you can see it live
                        in your Whop dashboard!
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

              <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 shadow-lg">
                  6
                </div>
                <div className="flex-1 space-y-2 md:space-y-3">
                  <h3 className="font-bold text-lg md:text-xl text-white">
                    Troubleshooting & Debugging
                  </h3>
                  <p className="text-gray-300">
                    Running into issues? Don't worry—the AI can fix them! Whether
                    your app won't load, you're seeing errors, or it's not
                    displaying properly in the Whop iframe, just tell the AI what's
                    wrong.
                  </p>
                  <div className="grid gap-3">
                    {[
                      '"I\'m getting an error that says [paste the error message]"',
                      '"The app isn\'t showing up in the Whop iframe [tell AI what\'s wrong or what you see]"',
                      '"My app is displaying a blank screen"',
                      '"Fix this error: [describe what\'s happening]"',
                    ].map((example, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20 text-sm text-gray-300 font-mono"
                      >
                        {example}
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm">
                    Simply describe the problem or paste the error message, and the
                    AI will diagnose and fix it for you!
                  </p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

              <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 shadow-lg">
                  7
                </div>
                <div className="flex-1 space-y-2 md:space-y-3">
                  <h3 className="font-bold text-lg md:text-xl text-white">
                    Make Improvements (Optional)
                  </h3>
                  <p className="text-gray-300">
                    Want to add features or change the design? Just ask the AI
                    agent:
                  </p>
                  <div className="grid gap-3">
                    {[
                      '"Can you change the color scheme to blue and white?"',
                      '"Add a contact form at the bottom"',
                      '"Make the buttons bigger and more prominent"',
                      '"Add a pricing section with 3 plans"',
                    ].map((example, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20 text-sm text-gray-300 font-mono"
                      >
                        {example}
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm">
                    The AI will implement your changes in seconds!
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 lg:mt-10 p-4 md:p-5 lg:p-6 rounded-lg md:rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30">
              <p className="text-emerald-300 font-medium flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6" />
                Your app is now built and working!
              </p>
            </div>
          </Card>

          <div className="flex items-center justify-center gap-3 text-gray-400 text-sm">
            <span>Next up</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-purple-300 font-medium">
              We'll deploy it to the internet for free using Render, so anyone
              can access your app from anywhere
            </span>
          </div>
        </div>
      </section>

      {/* Step 4 - Deploy to Render */}
      <section
        id="step-4"
        className="relative py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-12 scroll-mt-16 md:scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 lg:space-y-10">
          <div className="space-y-3 md:space-y-4 lg:space-y-5">
            <Badge className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm">
              <span className="font-bold mr-1.5 md:mr-2">04</span> Go Live
            </Badge>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent tracking-tight leading-tight">
              Deploy to Render
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-1 md:mt-2 text-gray-400">
                (100% Free Hosting)
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Now that your Whop App is built in Replit, it's time to deploy it!
              Render will host your app completely free and give you the URL
              you'll use to connect it to Whop.
            </p>
          </div>

          <Card className="p-5 md:p-8 lg:p-10 bg-gradient-to-br from-purple-950 to-black border-purple-500/30">
            <div className="space-y-2 md:space-y-3 mb-6 md:mb-8 p-4 md:p-5 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <h3 className="font-semibold text-base md:text-lg text-purple-200 flex items-center gap-2">
                <Cloud className="w-5 h-5" />
                Why Render for Whop Apps?
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Render is perfect for Next.js apps (which your Whop App uses).
                It's free, fast, and gives you a public URL that Whop can load
                in their iframe. Plus, it automatically redeploys when you push
                updates!
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 shadow-lg">
                  1
                </div>
                <div className="flex-1 space-y-3 md:space-y-4">
                  <h3 className="font-bold text-lg md:text-xl text-white">
                    Connect Replit to GitHub
                  </h3>
                  <p className="text-gray-300">
                    To get your code onto Render, we first need to save it to
                    GitHub—think of it like Dropbox for code.
                  </p>
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Back in your Replit project, click the "+Tools & files"
                        button again and search for "Git"
                      </span>
                    </li>
                  </ul>
                  <img
                    src={replitGitSearch}
                    alt="Replit tools and files search showing Git option"
                    className="rounded-lg md:rounded-xl border border-purple-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-replit-git-search"
                  />
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base mt-3 md:mt-4">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Click "Connect to Github" and log into your GitHub
                        account (if you don't have one, you can create it right
                        there)
                      </span>
                    </li>
                  </ul>
                  <img
                    src={replitConnectGithub}
                    alt="Replit Git tab with Connect to GitHub button"
                    className="rounded-lg md:rounded-xl border border-purple-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-replit-github"
                  />
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base mt-3 md:mt-4">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Click the "Install and Authorize" button to let Replit
                        save your code to GitHub
                      </span>
                    </li>
                  </ul>
                  <img
                    src={githubAuthorize}
                    alt="GitHub authorization screen for Replit"
                    className="rounded-lg md:rounded-xl border border-purple-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-github-auth"
                  />
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base mt-3 md:mt-4">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Click "Create Remote" to set up the connection
                      </span>
                    </li>
                  </ul>
                  <img
                    src={replitCreateRemote}
                    alt="Replit Git showing Create Remote button"
                    className="rounded-lg md:rounded-xl border border-purple-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-replit-create-remote"
                  />
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base mt-3 md:mt-4">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Add a repository name, then click "Create repository on GitHub"—your code
                        is now safely stored on GitHub!
                      </span>
                    </li>
                  </ul>
                  <img
                    src={replitCreateRepo}
                    alt="GitHub repository creation form with repository name field"
                    className="rounded-lg md:rounded-xl border border-purple-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-replit-create-repo"
                  />
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

              <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 shadow-lg">
                  2
                </div>
                <div className="flex-1 space-y-2 md:space-y-3">
                  <h3 className="font-bold text-lg md:text-xl text-white">
                    Create a Render Account
                  </h3>
                  <p className="text-gray-300">
                    Now let's get you set up on Render—it's super quick and 100%
                    free.
                  </p>
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Head over to{" "}
                        <a
                          href="https://dashboard.render.com/register"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-300 underline underline-offset-2 hover:text-purple-200 inline-flex items-center gap-1 font-medium"
                          data-testid="link-render"
                        >
                          dashboard.render.com/register
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Click "Sign Up with GitHub"—this is the easiest way
                        since you just connected GitHub
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Authorize Render to see your GitHub repositories
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        The free tier is automatically selected—it's perfect for
                        your app!
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

              <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 shadow-lg">
                  3
                </div>
                <div className="flex-1 space-y-3 md:space-y-4">
                  <h3 className="font-bold text-lg md:text-xl text-white">
                    Create a New Web Service
                  </h3>
                  <p className="text-gray-300">
                    Time to bring your app into Render so it can go live on the
                    internet!
                  </p>
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        On your Render dashboard, click the "New +" button and
                        select "Web Service"
                      </span>
                    </li>
                  </ul>
                  <img
                    src={renderOverview}
                    alt="Render dashboard overview with Add new button"
                    className="rounded-lg md:rounded-xl border border-purple-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-render-overview"
                  />
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base mt-3 md:mt-4">
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        You'll see all your GitHub repositories listed
                        here—search for and select your app's repository
                      </span>
                    </li>
                  </ul>
                  <img
                    src={renderGitSearch}
                    alt="Render Git Provider showing repository search"
                    className="rounded-lg md:rounded-xl border border-purple-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-render-git-search"
                  />
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

              <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 shadow-lg">
                  4
                </div>
                <div className="flex-1 space-y-3 md:space-y-4">
                  <h3 className="font-bold text-lg md:text-xl text-white">
                    Configure and Deploy
                  </h3>
                  <div className="p-5 rounded-lg bg-red-500/10 border border-red-500/30">
                    <p className="text-sm font-bold text-red-300 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      CRITICAL! Add your Whop credentials before deploying.
                    </p>
                    <p className="text-xs text-gray-300">
                      Without these, your app won't work in Whop's iframe!
                    </p>
                  </div>
                  <p className="text-gray-300">
                    Almost there! Just a few quick settings and your app will be
                    live.
                  </p>
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Scroll down and choose the "Free" instance type (Starter
                        plan)
                      </span>
                    </li>
                  </ul>
                  <img
                    src={renderInstanceType}
                    alt="Render instance type selection showing Starter plan"
                    className="rounded-lg md:rounded-xl border border-purple-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-render-instance"
                  />
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base mt-3 md:mt-4">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Find the "Environment Variables" section and click <span className="font-semibold text-white">"Add from .env"</span> to add your Whop credentials
                      </span>
                    </li>
                  </ul>
                  <img
                    src={renderEnvSection}
                    alt="Render environment variables section"
                    className="rounded-lg md:rounded-xl border border-purple-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-render-env-vars"
                  />
                  <div className="p-5 rounded-lg bg-red-500/10 border border-red-500/30 mt-4">
                    <p className="text-sm font-bold text-red-300 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      CRITICAL STEP!
                    </p>
                    <p className="text-sm text-gray-300">
                      Paste all your Whop credentials from Step 1 (WHOP_API_KEY, NEXT_PUBLIC_WHOP_APP_ID, etc.), then click <span className="font-semibold text-white">"Add variables"</span>
                    </p>
                  </div>
                  <img
                    src={renderEnvPaste}
                    alt="Render Add from .env dialog showing where to paste environment variables"
                    className="rounded-lg md:rounded-xl border border-purple-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-render-env-paste"
                  />
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base mt-3 md:mt-4">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Click "Deploy Web Service"
                      </span>
                    </li>
                  </ul>
                  <img
                    src={renderAdvanced}
                    alt="Render showing Deploy Web Service button"
                    className="rounded-lg md:rounded-xl border border-purple-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-render-advanced"
                  />
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base mt-3 md:mt-4">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Render will build and deploy your app—this takes 3-5
                        minutes. Watch the live build log!
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        When you see "Your service is live," your app is
                        officially on the internet!
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

              <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 shadow-lg">
                  5
                </div>
                <div className="flex-1 space-y-2 md:space-y-3">
                  <h3 className="font-bold text-lg md:text-xl text-white">
                    Get Your App's URL
                  </h3>
                  <p className="text-gray-300">
                    Your app is live! Now let's grab its permanent web address.
                  </p>
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Once deployment is complete, you'll see your app's URL
                        at the top of the page
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        It will look something like{" "}
                        <span className="font-mono text-sm text-cyan-300">
                          your-app-name.onrender.com
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Copy this URL somewhere safe—you'll paste it into Whop
                        in the next step
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Click on the URL to open your app in a new tab and see
                        it in action!
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Feel free to share the link with friends—it's live for
                        anyone in the world to see
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 lg:mt-10 p-4 md:p-5 lg:p-6 rounded-lg md:rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30">
              <p className="text-emerald-300 font-medium flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6" />
                Your app is now live on the internet!
              </p>
            </div>
          </Card>

          <div className="flex items-center justify-center gap-3 text-gray-400 text-sm">
            <span>Next up</span>
            <ArrowRight className="w-4 h-4" />
            <span className="text-cyan-300 font-medium">
              We'll list it on Whop so you can start making money from it!
            </span>
          </div>
        </div>
      </section>

      {/* Step 5 - Launch on Whop */}
      <section
        id="step-5"
        className="relative py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-12 scroll-mt-16 md:scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 lg:space-y-10">
          <div className="space-y-3 md:space-y-4 lg:space-y-5">
            <Badge className="bg-purple-500/10 border border-purple-500/30 text-purple-300 px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm">
              <span className="font-bold mr-1.5 md:mr-2">05</span> Final Step
            </Badge>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent tracking-tight leading-tight">
              Connect Your App to Whop
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Final step! Now we'll connect your deployed Render app to Whop so
              it works inside the Whop iframe. This is what makes your app
              accessible to creators and their communities!
            </p>
          </div>

          <Card className="p-5 md:p-8 lg:p-10 bg-gradient-to-br from-cyan-950 to-black border-cyan-500/30">
            <div className="space-y-2 md:space-y-3 mb-6 md:mb-8 p-4 md:p-5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
              <h3 className="font-semibold text-base md:text-lg text-cyan-200 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                What This Step Does
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                You'll configure Whop to load your Render URL when someone
                installs your app. Whop will embed your app in an iframe, handle
                authentication, and make it available to thousands of creators!
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 shadow-lg">
                  1
                </div>
                <div className="flex-1 space-y-2 md:space-y-3">
                  <h3 className="font-bold text-lg md:text-xl text-white">
                    Go to Whop Developer Dashboard
                  </h3>
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Open{" "}
                        <a
                          href="https://whop.com/dashboard/developer"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-300 underline underline-offset-2 hover:text-cyan-200 inline-flex items-center gap-1 font-medium"
                        >
                          whop.com/dashboard/developer
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Find your app in the list (the one you created in Step
                        1)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>Click on it to open the app settings</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

              <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 shadow-lg">
                  2
                </div>
                <div className="flex-1 space-y-3 md:space-y-4">
                  <h3 className="font-bold text-lg md:text-xl text-white">
                    Configure App Hosting
                  </h3>
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>Scroll down to the "Hosting" section</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        For "Base URL", update your Replit dev URL to your new Render production URL from Step 4 (e.g., https://your-app.onrender.com)
                      </span>
                    </li>
                  </ul>
                  <img
                    src={whopHostingConfig}
                    alt="Whop hosting configuration showing Base URL field"
                    className="rounded-lg md:rounded-xl border border-cyan-500/20 w-full max-w-full shadow-2xl mt-2 md:mt-3"
                    data-testid="img-whop-hosting"
                  />
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base mt-3 md:mt-4">
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>
                        For "Experience View Path", enter:{" "}
                        <span className="font-mono text-sm text-cyan-300">
                          /experiences/[experienceId]
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>Scroll up, then click "Save"</span>
                    </li>
                  </ul>
                  <div className="p-5 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    <p className="text-sm text-gray-300">
                      <span className="font-semibold text-cyan-300">
                        What this does:
                      </span>{" "}
                      Tells Whop where to load your app. The [experienceId] part
                      is a placeholder that Whop replaces with the actual ID
                      when someone installs your app.
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

              <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 shadow-lg">
                  3
                </div>
                <div className="flex-1 space-y-2 md:space-y-3">
                  <h3 className="font-bold text-lg md:text-xl text-white">
                    Test Your App in Whop
                  </h3>
                  <p className="text-gray-300">
                    Go back to where you installed your app in Step 3 (your test community).
                  </p>
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>Click on your app in the Whop sidebar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" />
                      <span>
                        Your app should now load with your production Render URL—you did it!
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

              <div className="flex items-start gap-3 md:gap-4 lg:gap-5">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white flex items-center justify-center text-base md:text-lg font-bold flex-shrink-0 shadow-lg">
                  4
                </div>
                <div className="flex-1 space-y-2 md:space-y-3">
                  <h3 className="font-bold text-lg md:text-xl text-white">
                    Submit to Whop App Store (Optional)
                  </h3>
                  <p className="text-gray-300">
                    Ready to reach thousands of creators? List your app in the
                    Whop App Store!
                  </p>
                  <ul className="space-y-1.5 md:space-y-2 text-gray-300 text-sm md:text-base">
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Once your app is working perfectly, go back to developer
                        dashboard, in discover section
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Add app description, screenshots, and branding
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Set your pricing model (per seat, monthly subscription,
                        installation fee, or transaction fees)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Click "Submit for review" to get listed in the Whop App
                        Store
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>
                        Once approved, thousands of creators can discover and
                        install your app!
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 p-8 rounded-xl bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-cyan-500/10 border border-emerald-500/30">
              <h4 className="font-bold text-2xl text-emerald-300 mb-3 flex items-center gap-3">
                <Rocket className="w-8 h-8" />
                Congratulations! Your Whop App is Live!
              </h4>
              <p className="text-gray-300">
                Your app is now working inside Whop's iframe and ready for
                creators to install. When you're ready, submit it to the Whop
                App Store to reach thousands of potential customers!
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Bonus - Pro Tips */}
      <section id="bonus" className="relative py-20 px-6 md:px-12 scroll-mt-20">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-5 text-center">
            <Badge className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 text-yellow-300 px-5 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Pro Tips & Resources
            </Badge>
            <h2 className="font-heading text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent tracking-tight leading-tight">
              Helpful Tips & Resources
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              You've built your first Whop App! Here are some tips to help you
              succeed and resources to learn more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-gradient-to-br from-purple-950 to-black border-purple-500/30 ">
              <h3 className="font-bold text-2xl text-white mb-6 flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-yellow-400" />
                Pro Tips for Success
              </h3>
              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold text-base md:text-lg text-purple-200 mb-2">
                    Start Simple, Then Iterate
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Launch with core features first. Get feedback from real
                    users, then add advanced features based on what they
                    actually need.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg text-purple-200 mb-2">
                    Test in Whop's Iframe Before Submitting
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Always test your app inside a Whop community first. Some
                    features might work on your local machine but break in the
                    iframe environment.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg text-purple-200 mb-2">
                    Use Whop's Built-in Features
                  </h4>
                  <p className="text-gray-300 text-sm">
                    The Whop SDK provides user data, authentication, and payment
                    info automatically. Don't rebuild what Whop already gives
                    you!
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg text-purple-200 mb-2">
                    Keep Your WHOP_API_KEY Secret
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Never commit your API key to GitHub or share it publicly.
                    Always use environment variables (Replit Secrets or Render
                    Environment Variables).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-cyan-950 to-black border-cyan-500/30 ">
              <h3 className="font-bold text-2xl text-white mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-cyan-400" />
                Essential Resources
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Whop Documentation",
                    desc: "Official guides for building Whop Apps",
                    url: "https://docs.whop.com",
                  },
                  {
                    title: "Replit Documentation",
                    desc: "Learn how to use Replit for development",
                    url: "https://docs.replit.com",
                  },
                  {
                    title: "Render Documentation",
                    desc: "Master deployment and hosting",
                    url: "https://render.com/docs",
                  },
                  {
                    title: "Next.js Documentation",
                    desc: "Learn the framework powering your app",
                    url: "https://nextjs.org/docs",
                  },
                ].map((resource, i) => (
                  <a
                    key={i}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-5 rounded-lg border border-cyan-500/20 bg-cyan-500/5 hover-elevate active-elevate-2 group"
                  >
                    <h4 className="font-semibold text-base text-cyan-200 mb-1 flex items-center gap-2 group-hover:text-cyan-100">
                      {resource.title}
                      <ExternalLink className="w-4 h-4" />
                    </h4>
                    <p className="text-gray-400 text-sm">{resource.desc}</p>
                  </a>
                ))}
              </div>
            </Card>
          </div>

          <div className="text-center mt-16 p-10 rounded-xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-purple-500/10 border border-purple-500/30">
            <h3 className="font-heading text-3xl font-bold text-white mb-4">
              Ready to Build Your Next App?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              You now have everything you need to create and sell Whop Apps! Use
              the AI prompt generator at the top to brainstorm your next idea,
              then follow the 5 steps again.
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection("#step-2")}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold px-8 py-6 text-lg shadow-2xl"
              data-testid="button-generate-new-idea"
            >
              <Lightbulb className="w-5 h-5 mr-2" />
              Generate Another App Idea
            </Button>
            <p className="text-gray-400 text-sm mt-6">Happy building! 🚀</p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section
        id="resources"
        className="relative py-20 px-6 md:px-12 pb-32 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              <Heart className="w-4 h-4" />
              Made with love for aspiring app builders
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
