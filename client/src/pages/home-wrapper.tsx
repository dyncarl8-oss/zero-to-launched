import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Home from "./home";
import { Loader2 } from "lucide-react";

interface UserAccess {
  userId: string;
  hasAccess: boolean;
  accessLevel: 'admin' | 'customer' | 'no_access';
}

export default function HomeWrapper() {
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
        // If not authenticated through Whop, redirect to checkout
        setAccess({
          userId: '',
          hasAccess: false,
          accessLevel: 'no_access'
        });
      }
    } catch (err) {
      console.error("Error checking access:", err);
      // If error checking access, show checkout
      setAccess({
        userId: '',
        hasAccess: false,
        accessLevel: 'no_access'
      });
    } finally {
      setLoading(false);
    }
  };

  // If user doesn't have access, redirect to checkout immediately (no loading state shown)
  if (loading || !access || !access.hasAccess) {
    if (!loading && (!access || !access.hasAccess)) {
      setLocation('/checkout');
    }
    return null;
  }

  // If user has access, show the course content
  return <Home />;
}
