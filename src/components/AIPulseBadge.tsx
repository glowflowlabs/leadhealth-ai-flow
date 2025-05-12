
import React from "react";
import { cn } from "@/lib/utils";

interface AIPulseBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const AIPulseBadge = ({ children, className, ...props }: AIPulseBadgeProps) => {
  return (
    <span 
      className={cn(
        "ai-pill animate-pulse-soft",
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
