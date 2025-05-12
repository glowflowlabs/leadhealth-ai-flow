
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, TooltipProps, CartesianGrid } from "recharts";
import { cn } from "@/lib/utils";

// Dados simulados para o gráfico
const campaignData = [
  { name: "Instagram", leads: 32, cpc: 4.2, conversion: 28 },
  { name: "Facebook", leads: 24, cpc: 5.5, conversion: 22 },
  { name: "Google", leads: 45, cpc: 6.8, conversion: 31 },
  { name: "WhatsApp", leads: 19, cpc: 3.5, conversion: 40 }
];

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-3 shadow rounded-md border">
        <p className="font-medium">{`${label}`}</p>
        <p className="text-sm" style={{ color: "#2E9972" }}>{`Leads: ${payload[0]?.value}`}</p>
        <p className="text-sm" style={{ color: "#33ACE8" }}>{`CPC: R$${payload[1]?.value}`}</p>
        <p className="text-sm" style={{ color: "#6366F1" }}>{`Conversão: ${payload[2]?.value}%`}</p>
      </div>
    );
  }

  return null;
};

interface CampaignPerformanceProps {
  className?: string;
}

const CampaignPerformance = ({ className }: CampaignPerformanceProps) => {
  return (
    <Card className={cn("dashboard-card", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">Performance das Campanhas</CardTitle>
        <div className="flex items-center space-x-2 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-health-500 rounded-full mr-1" />
            <span>Leads</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-tech-400 rounded-full mr-1" />
            <span>CPC (R$)</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-purple-400 rounded-full mr-1" />
            <span>Conversão (%)</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={campaignData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="leads" fill="#2E9972" radius={[4, 4, 0, 0]} />
              <Bar dataKey="cpc" fill="#33ACE8" radius={[4, 4, 0, 0]} />
              <Bar dataKey="conversion" fill="#6366F1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-xs text-muted-foreground mt-2 text-center">
          Últimos 30 dias
        </div>
      </CardContent>
    </Card>
  );
};

export default CampaignPerformance;
