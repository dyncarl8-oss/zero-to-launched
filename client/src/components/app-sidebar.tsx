import { Home, Lightbulb, Code, Cloud, DollarSign, Sparkles, BookOpen, Zap, ChevronLeft } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    title: "Home",
    icon: Home,
    href: "#home",
  },
  {
    title: "Setup Whop",
    icon: DollarSign,
    href: "#step-1",
  },
  {
    title: "Generate Idea",
    icon: Lightbulb,
    href: "#step-2",
  },
  {
    title: "Build with Replit",
    icon: Code,
    href: "#step-3",
  },
  {
    title: "Deploy to Render",
    icon: Cloud,
    href: "#step-4",
  },
  {
    title: "Launch on Whop",
    icon: Zap,
    href: "#step-5",
  },
  {
    title: "Pro Tips",
    icon: Sparkles,
    href: "#bonus",
  },
  {
    title: "Resources",
    icon: BookOpen,
    href: "#resources",
  },
];

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  
  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border p-6">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h2 className="font-heading text-lg font-bold">
              Whop App Guide
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">Build & monetize apps</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="h-8 w-8 flex-shrink-0"
            data-testid="button-collapse-sidebar"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => handleClick(item.href)}
                    data-testid={`link-${item.href.slice(1)}`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
