
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: string | number;
    positive: boolean;
  };
  description?: string;
  className?: string;
}

const MetricCard = ({
  title,
  value,
  icon,
  trend,
  description,
  className,
}: MetricCardProps) => {
  return (
    <Card className={cn("dashboard-card overflow-hidden", className)}>
      <CardHeader className="p-4 pb-2 flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <div className="flex items-center mt-1">
            <span
              className={cn(
                "text-xs font-medium",
                trend.positive ? "text-green-600" : "text-red-600"
              )}
            >
              {trend.positive ? "+" : "-"}
              {trend.value}
            </span>
            <span className="ml-1 text-xs text-muted-foreground">vs. último mês</span>
          </div>
        )}
        {description && (
          <p className="mt-2 text-xs text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default MetricCard;
