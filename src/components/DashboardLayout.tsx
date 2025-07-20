
import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import SidebarNav from "@/components/SidebarNav";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  Home,
  ChartBar,
  MessageSquare,
  Calendar,
  Users,
  Menu,
  X
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", icon: Home, path: "/dashboard" },
  { title: "Campanhas", icon: Calendar, path: "/campanhas" },
  { title: "Relatórios", icon: ChartBar, path: "/relatorios" },
  { title: "CRM", icon: Users, path: "/crm" },
  { title: "Orientações", icon: MessageSquare, path: "/orientacoes" }
];

const DashboardLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex">
        {/* Sidebar apenas em desktop */}
        <SidebarNav />
        
        {/* Conteúdo principal */}
        <main className="flex-1 min-h-screen overflow-auto w-full md:w-auto">
          {/* Header mobile */}
          <div className="md:hidden bg-white border-b p-4 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-gradient-to-r from-health-500 to-tech-500 flex items-center justify-center text-white font-bold">
                LH
              </div>
              <span className="font-bold text-lg">LeadHealth</span>
            </div>
            
            {/* Menu mobile */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <div className="flex items-center p-4 gap-2 border-b">
                  <div className="w-8 h-8 rounded-md bg-gradient-to-r from-health-500 to-tech-500 flex items-center justify-center text-white font-bold">
                    LH
                  </div>
                  <span className="font-bold text-lg">LeadHealth</span>
                </div>
                
                <nav className="p-4">
                  <div className="space-y-2">
                    {menuItems.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          cn(
                            "flex items-center gap-3 px-3 py-3 rounded-md transition-colors w-full text-left",
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-muted"
                          )
                        }
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </NavLink>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          
          {/* Conteúdo das páginas */}
          <div className="p-4 md:p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
