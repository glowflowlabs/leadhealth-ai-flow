
import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import {
  Home,
  ChartBar,
  MessageSquare,
  Calendar,
  FileText,
  Users,
  User
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    path: "/dashboard",
  },
  {
    title: "Campanhas",
    icon: Calendar,
    path: "/campanhas",
  },
  {
    title: "Relatórios",
    icon: ChartBar,
    path: "/relatorios",
  },
  {
    title: "CRM",
    icon: Users,
    path: "/crm",
  },
  {
    title: "Orientações",
    icon: MessageSquare,
    path: "/orientacoes",
  }
];

const SidebarNav = () => {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  
  return (
    <Sidebar
      className={cn(
        "border-r h-screen hidden md:flex",
        collapsed ? "w-16" : "w-64"
      )}
      collapsible="icon"
    >
      <div className={cn(
        "flex items-center p-4 gap-2",
        collapsed ? "justify-center" : "justify-start"
      )}>
        <div className="w-8 h-8 rounded-md bg-gradient-to-r from-health-500 to-tech-500 flex items-center justify-center text-white font-bold">
          LH
        </div>
        {!collapsed && <span className="font-bold text-lg">LeadHealth</span>}
      </div>

      <SidebarTrigger className="absolute top-4 right-2" />

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className={cn(collapsed && "sr-only")}>
            Menu Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        )
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="absolute bottom-4 left-0 right-0 px-4">
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink
                to="/perfil"
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  )
                }
              >
                <User className="h-5 w-5" />
                {!collapsed && <span>Perfil</span>}
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarNav;
