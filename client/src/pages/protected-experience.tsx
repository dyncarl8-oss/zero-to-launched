import { useEffect, useState } from "react";
import { useRoute, useLocation } from "wouter";
import Home from "./home";
import { Loader2 } from "lucide-react";

interface UserAccess {
  userId: string;
  hasAccess: boolean;
  accessLevel: 'admin' | 'customer' | 'no_access';
}

export default function ProtectedExperience() {
  const [match, params] = useRoute("/experiences/:experienceId");
  const [, setLocation] = useLocation();
  const [access, setAccess] = useState<UserAccess | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkAccess();
  }, []);

  const checkAccess = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const productId = import.meta.env.VITE_WHOP_PRODUCT_ID;
      const url = productId ? `/api/auth/me?productId=${encodeURIComponent(productId)}` : "/api/auth/me";
      
      const { getWhopHeaders } = await import("@/lib/whop-headers");
      const response = await fetch(url, {
        credentials: "include",
        headers: getWhopHeaders(),
      });

      if (response.ok) {
        const data = await response.json();
        setAccess(data);
      } else {
        setError("Unable to verify access");
      }
    } catch (err) {
      console.error("Error checking access:", err);
      setError("Failed to verify access");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center" data-testid="loading-state">
        {/* Gradient orbs */}
        <div className="absolute -top-32 -left-32 w-[350px] h-[350px] bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] bg-cyan-600/20 rounded-full blur-3xl"></div>
        
        <div className="relative flex flex-col items-center gap-4 px-4">
          <Loader2 className="h-12 w-12 animate-spin text-purple-400" />
          <p className="text-gray-300 text-lg">Verifying your access...</p>
        </div>
      </div>
    );
  }

  if (error || !access) {
    return (
      <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-4" data-testid="error-state">
        {/* Gradient orbs */}
        <div className="absolute -top-32 -left-32 w-[350px] h-[350px] bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] bg-cyan-600/20 rounded-full blur-3xl"></div>
        
        <div className="relative w-full max-w-md bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-white mb-2">Access Verification Failed</h2>
          <p className="text-gray-300 mb-4">
            We couldn't verify your access. This app must be accessed through Whop.
          </p>
          <p className="text-sm text-gray-400">
            Error: {error || "Unknown error"}
          </p>
        </div>
      </div>
    );
  }

  if (!access.hasAccess) {
    setLocation("/checkout");
    return null;
  }

  return <Home />;
}
