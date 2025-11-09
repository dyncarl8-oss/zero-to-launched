import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { WhopIframeSdkProvider } from "@/lib/whop-iframe";
import HomeWrapper from "@/pages/home-wrapper";
import ProtectedExperience from "@/pages/protected-experience";
import Checkout from "@/pages/checkout";
import NotFound from "@/pages/not-found";

function MainLayout() {
  const style = {
    "--sidebar-width": "18rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <SidebarProvider defaultOpen={false} style={style as React.CSSProperties}>
      <div className="flex h-screen w-full bg-black">
        <AppSidebar />
        <main className="flex-1 overflow-auto relative bg-black">
          <div className="fixed top-4 left-4 z-50">
            <SidebarTrigger className="text-white bg-black/50 hover:bg-black/70 border border-white/20" data-testid="button-sidebar-toggle" />
          </div>
          <Switch>
            <Route path="/" component={HomeWrapper} />
            <Route path="/experiences/:experienceId" component={ProtectedExperience} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </SidebarProvider>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WhopIframeSdkProvider>
        <TooltipProvider>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="*" component={MainLayout} />
          </Switch>
          <Toaster />
        </TooltipProvider>
      </WhopIframeSdkProvider>
    </QueryClientProvider>
  );
}

export default App;
