
import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/ui/sidebar";
import SidebarNav from "@/components/SidebarNav";
import { cn } from "@/lib/utils";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen w-full">
      <Sidebar defaultCollapsed={false}>
        <SidebarNav />
        <div className={cn("pl-16 lg:pl-64 min-h-screen")}>
          <div className="container mx-auto px-4 py-8">
            <Outlet />
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default DashboardLayout;
