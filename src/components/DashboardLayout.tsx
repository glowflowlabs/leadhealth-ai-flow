
import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import SidebarNav from "@/components/SidebarNav";
import { cn } from "@/lib/utils";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full">
        <SidebarNav />
        <div className={cn("pl-16 lg:pl-64 min-h-screen")}>
          <div className="container mx-auto px-4 py-8">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
