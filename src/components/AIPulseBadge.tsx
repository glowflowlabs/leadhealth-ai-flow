
import React from "react";
import { cn } from "@/lib/utils";

interface AIPulseBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const AIPulseBadge = ({ children, className, ...props }: AIPulseBadgeProps) => {
  return (
    <span 
      className={cn(
        "ai-pill flex items-center gap-2 bg-gradient-to-r from-health-500/80 to-tech-500/80 text-white py-1 px-3 rounded-full text-sm animate-pulse-soft",
        className
      )}
      {...props}
    >
      <span className="w-2 h-2 rounded-full bg-white"></span>
      {children}
    </span>
  );
};

export default AIPulseBadge;
