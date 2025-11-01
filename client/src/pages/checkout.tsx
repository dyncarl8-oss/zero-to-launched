import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Clock, Zap, Shield, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useIframeSdk } from "@/lib/whop-iframe";

export default function Checkout() {
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const { toast } = useToast();

  // Countdown timer - starts at 11:11:11
  useEffect(() => {
    const targetTime =
      new Date().getTime() + 11 * 60 * 60 * 1000 + 11 * 60 * 1000 + 11 * 1000;

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetTime - now;

      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  let iframeSdk: ReturnType<typeof useIframeSdk> | undefined;
  try {
    iframeSdk = useIframeSdk();
  } catch (error) {
    console.error("SDK initialization error:", error);
  }

  const handlePurchase = async () => {
    if (!iframeSdk) {
      toast({
        title: "Configuration Error",
        description:
          "Payment system is not properly configured. Please contact support.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Track purchase click
    try {
      await fetch("/api/track-purchase-click", {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      console.error("Failed to track purchase click:", err);
      // Continue with purchase even if tracking fails
    }

    try {
      const planId = import.meta.env.VITE_WHOP_PLAN_ID;

      if (!planId) {
        throw new Error("Plan ID not configured. Please contact support.");
      }

      const result = await iframeSdk.inAppPurchase({ planId });

      if (result.status === "ok") {
        // Grant immediate access to the user
        try {
          const grantResponse = await fetch("/api/grant-purchase-access", {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (grantResponse.ok) {
            console.log("✅ Access granted successfully");
          } else {
            console.error("Failed to grant access, but purchase succeeded");
          }
        } catch (err) {
          console.error("Error granting access:", err);
        }

        toast({
          title: "Payment Successful!",
          description: "You now have access to the course. Redirecting...",
        });

        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        const errorMessage = result.error || "Payment was cancelled";
        toast({
          title: result.error ? "Payment Failed" : "Payment Cancelled",
          description: errorMessage,
          variant: result.error ? "destructive" : "default",
        });
      }
    } catch (error) {
      console.error("Purchase error:", error);
      toast({
        title: "Payment Failed",
        description:
          error instanceof Error
            ? error.message
            : "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    "AI-Powered Idea Generator",
    "Complete Development Walkthrough",
    "Cloud Hosting & Deployment",
    "Whop Marketplace Setup",
    "Payment & Monetization Strategies",
    "Lifetime Updates & New Content",
    "Priority Support Access",
    "Exclusive Community Access",
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-4 md:p-6 py-8 md:py-12">
      {/* Gradient orbs - positioned in corners with half showing */}
      <div className="absolute -top-32 -left-32 w-[350px] h-[350px] bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] bg-cyan-600/20 rounded-full blur-3xl"></div>

      {/* Main content */}
      <div className="relative w-full max-w-5xl">
        {/* Header Timer and Badge */}
        <div className="flex flex-col items-center gap-2.5 mb-4 md:mb-5">
          {/* Countdown Timer */}
          <div
            className="flex items-center gap-2 text-xs md:text-sm font-semibold"
            data-testid="timer-countdown"
          >
            <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-400" />
            <span className="text-gray-300">Offer ends in:</span>
            <div className="flex gap-1">
              <span className="bg-red-500/20 border border-red-500/30 px-2 py-0.5 rounded text-red-300 min-w-[28px] text-center">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-gray-400">:</span>
              <span className="bg-red-500/20 border border-red-500/30 px-2 py-0.5 rounded text-red-300 min-w-[28px] text-center">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-gray-400">:</span>
              <span className="bg-red-500/20 border border-red-500/30 px-2 py-0.5 rounded text-red-300 min-w-[28px] text-center">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>
          </div>

          <Badge
            variant="outline"
            className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 text-purple-200 px-3 md:px-4 py-1 md:py-1.5 text-xs font-medium backdrop-blur-sm"
            data-testid="badge-limited-time"
          >
            <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1.5" />
            Limited Time Offer - 67% OFF
          </Badge>
        </div>

        {/* Main Content */}
        <div className="relative">
          {/* Subtle glow effect */}
          <div className="absolute -inset-x-8 -inset-y-4 bg-gradient-to-r from-purple-600/5 via-cyan-500/5 to-purple-600/5 rounded-3xl blur-3xl"></div>

          <div className="relative">
            {/* Title */}
            <div className="text-center mb-8 md:mb-10">
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight px-2"
                data-testid="text-hero-title"
              >
                Build & Sell Your First App
              </h1>
              <p
                className="text-xs sm:text-sm md:text-base text-gray-400 px-4"
                data-testid="text-hero-subtitle"
              >
                Join 500+ entrepreneurs who launched their apps in 24 hours
                using AI
              </p>
            </div>

            {/* Main Grid */}
            <div className="grid lg:grid-cols-[1fr,320px] gap-6 md:gap-8 lg:gap-10 items-start">
              {/* Left: Features */}
              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5 md:mb-3">
                  What's Included
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 md:mb-5">
                  {features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2"
                      data-testid={`feature-${i}`}
                    >
                      <div className="w-4 h-4 md:w-5 md:h-5 rounded-md bg-gradient-to-br from-emerald-500/10 to-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/20 backdrop-blur-sm">
                        <Check
                          className="w-2.5 h-2.5 md:w-3 md:h-3 text-emerald-400"
                          strokeWidth={2.5}
                        />
                      </div>
                      <span className="text-xs md:text-sm text-gray-300 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Key Benefits - Hidden on small mobile, shown on larger screens */}
                <div className="hidden sm:grid grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-5">
                  <div className="text-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-1.5 md:mb-2 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
                      <Clock className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Launch in
                      <br />
                      24 Hours
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-1.5 md:mb-2 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
                      <Zap className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      No Coding
                      <br />
                      Required
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-1.5 md:mb-2 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center border border-pink-500/30">
                      <Star className="w-5 h-5 md:w-6 md:h-6 text-pink-400" />
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Start Earning
                      <br />
                      Today
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Pricing & CTA */}
              <div className="lg:border-l lg:border-purple-500/20 lg:pl-6">
                {/* Pricing */}
                <div className="text-center mb-3 md:mb-4">
                  <div className="flex items-center justify-center gap-2 md:gap-3 mb-1.5 md:mb-2">
                    <span className="text-lg md:text-xl text-gray-500 line-through">
                      $85
                    </span>
                    <div
                      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                      data-testid="text-price"
                    >
                      $28
                    </div>
                  </div>
                  <p
                    className="text-xs md:text-sm text-gray-400"
                    data-testid="text-pricing-description"
                  >
                    One-time payment • Lifetime access
                  </p>
                </div>

                {/* CTA Button */}
                <div className="space-y-2.5 md:space-y-3 mb-3 md:mb-4">
                  <Button
                    size="lg"
                    className="w-full h-12 md:h-13 text-sm md:text-base font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white border-0 shadow-xl shadow-purple-500/40"
                    onClick={handlePurchase}
                    disabled={isLoading}
                    data-testid="button-purchase"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing...
                      </div>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        Get Instant Access Now
                      </>
                    )}
                  </Button>

                  <div
                    className="flex items-center justify-center gap-2 text-xs text-gray-400"
                    data-testid="text-guarantee"
                  >
                    <Shield className="w-3 h-3 md:w-3.5 md:h-3.5 text-green-400" />
                    30-Day Money-Back Guarantee
                  </div>
                </div>

                {/* Stats */}
                <div className="pt-3 md:pt-4 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div
                      className="text-lg md:text-xl font-bold text-purple-400 mb-0.5"
                      data-testid="text-stat-students"
                    >
                      500+
                    </div>
                    <div className="text-xs text-gray-500">Students</div>
                  </div>
                  <div>
                    <div
                      className="text-lg md:text-xl font-bold text-purple-400 flex items-center justify-center gap-0.5 mb-0.5"
                      data-testid="text-stat-rating"
                    >
                      4.9{" "}
                      <Star className="w-3 h-3 md:w-3.5 md:h-3.5 fill-yellow-400 text-yellow-400" />
                    </div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                  <div>
                    <div
                      className="text-lg md:text-xl font-bold text-purple-400 mb-0.5"
                      data-testid="text-stat-apps"
                    >
                      200+
                    </div>
                    <div className="text-xs text-gray-500">Apps Built</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Smaller and moved down more */}
        <p
          className="text-center text-[10px] md:text-xs text-gray-600 mt-10 md:mt-14 flex items-center justify-center gap-1.5"
          data-testid="text-secure"
        >
          <Shield className="w-2.5 h-2.5 md:w-3 md:h-3" />
          Secure payment powered by Whop • SSL Encrypted
        </p>
      </div>
    </div>
  );
}
