import { createContext, useContext, useMemo, type ReactNode } from "react";
import { createAppIframeSDK } from "@whop-apps/iframe";

type IframeSdk = ReturnType<typeof createAppIframeSDK>;

const IframeSdkContext = createContext<IframeSdk | null>(null);

export function WhopIframeSdkProvider({ children }: { children: ReactNode }) {
  const sdk = useMemo(() => {
    const appId = import.meta.env.VITE_WHOP_APP_ID;
    
    if (!appId) {
      console.error("VITE_WHOP_APP_ID is not configured");
      return null;
    }
    
    return createAppIframeSDK({
      appId,
    });
  }, []);

  return (
    <IframeSdkContext.Provider value={sdk}>
      {children}
    </IframeSdkContext.Provider>
  );
}

export function useIframeSdk() {
  const sdk = useContext(IframeSdkContext);
  
  if (!sdk) {
    throw new Error("Whop SDK not initialized. Please check that VITE_WHOP_APP_ID is configured.");
  }
  
  return sdk;
}
