
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  TooltipProps
} from "recharts";
import { cn } from "@/lib/utils";

// Dados simulados para o gráfico
const data = [
  { month: "Jan", atual: 4000, previsto: 4000 },
  { month: "Fev", atual: 5200, previsto: 5200 },
  { month: "Mar", atual: 6800, previsto: 6800 },
  { month: "Abr", atual: 8200, previsto: 8200 },
  { month: "Mai", atual: 9500, previsto: 9500 },
  { month: "Jun", atual: 11200, previsto: 11200 },
  { month: "Jul", atual: 12500, previsto: 12500 },
  { month: "Ago", atual: 13800, previsto: 13800 },
  { month: "Set", atual: 0, previsto: 15600 },
  { month: "Out", atual: 0, previsto: 17200 },
  { month: "Nov", atual: 0, previsto: 19400 },
  { month: "Dez", atual: 0, previsto: 21000 }
];

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-3 shadow rounded-md border">
        <p className="font-medium">{`${label}`}</p>
        {payload.map((entry) => (
          <p key={entry.name} className="text-sm" style={{ color: entry.color }}>
            {`${entry.name}: R$ ${entry.value?.toLocaleString('pt-BR')}`}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

interface MRRChartProps {
  className?: string;
}

const MRRChart = ({ className }: MRRChartProps) => {
  return (
    <Card className={cn("dashboard-card", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium">Projeção de MRR</CardTitle>
        <div className="flex items-center space-x-2 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-health-500 rounded-full mr-1" />
            <span>Atual</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-tech-400 rounded-full mr-1" />
            <span>Previsto</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" />
              <YAxis 
                tickFormatter={(value) => `R$${value/1000}k`} 
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="atual"
                stroke="#2E9972"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name="Atual"
              />
              <Line
                type="monotone"
                dataKey="previsto"
                stroke="#33ACE8"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ r: 4 }}
                name="Previsto"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text-xs text-muted-foreground mt-2 text-center">
          Baseado em dados históricos e taxas de conversão atuais
        </div>
      </CardContent>
    </Card>
  );
};

export default MRRChart;
