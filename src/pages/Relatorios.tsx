
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AIPulseBadge from "@/components/AIPulseBadge";

// Dados simulados para os gráficos
const dailyLeadsData = [
  { day: "01", leads: 8 },
  { day: "02", leads: 10 },
  { day: "03", leads: 12 },
  { day: "04", leads: 9 },
  { day: "05", leads: 11 },
  { day: "06", leads: 15 },
  { day: "07", leads: 13 },
  { day: "08", leads: 12 },
  { day: "09", leads: 10 },
  { day: "10", leads: 14 },
  { day: "11", leads: 16 },
  { day: "12", leads: 18 },
  { day: "13", leads: 15 },
  { day: "14", leads: 17 }
];

const conversionFunnelData = [
  { name: "Visualizações", value: 12450 },
  { name: "Cliques", value: 820 },
  { name: "Leads", value: 150 },
  { name: "Agendamentos", value: 45 },
  { name: "Pacientes", value: 35 }
];

const sourceData = [
  { name: "Instagram", value: 45 },
  { name: "Facebook", value: 28 },
  { name: "Google", value: 18 },
  { name: "WhatsApp", value: 9 }
];

const COLORS = ["#2E9972", "#33ACE8", "#6366F1", "#8B5CF6"];

const Relatorios = () => {
  return (
    <div className="space-y-4 md:space-y-6 max-w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h1 className="text-xl md:text-2xl font-bold">Relatórios</h1>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <AIPulseBadge>Dados em tempo real</AIPulseBadge>
          <Button variant="outline" size="sm" className="w-full sm:w-auto">Exportar Relatório</Button>
        </div>
      </div>
      
      <Tabs defaultValue="overview">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="campaigns">Campanhas</TabsTrigger>
          <TabsTrigger value="geographic">Geográfico</TabsTrigger>
          <TabsTrigger value="conversion">Conversão</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium">Leads por Dia (Últimos 14 dias)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={dailyLeadsData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="leads"
                        stroke="#2E9972"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                        name="Leads"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-center text-sm text-muted-foreground mt-2">
                  Média: 12,8 leads/dia
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium">Origem dos Leads</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sourceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {sourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} leads`, "Quantidade"]} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                  {sourceData.map((entry, index) => (
                    <div key={entry.name} className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-1"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <span className="text-xs">{entry.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">Funil de Conversão</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={conversionFunnelData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#33ACE8"
                      fill="url(#colorGradient)"
                    />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#33ACE8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#33ACE8" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <p className="font-medium">Taxa de Conversão Total</p>
                  <p className="text-2xl font-bold text-health-600">0,28%</p>
                </div>
                <div>
                  <p className="font-medium">Lead para Paciente</p>
                  <p className="text-2xl font-bold text-health-600">23,3%</p>
                </div>
                <div>
                  <p className="font-medium">CPA Médio</p>
                  <p className="text-2xl font-bold text-health-600">R$ 42,50</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-base font-medium">Pergunte à IA</CardTitle>
                <AIPulseBadge>Assistente de IA</AIPulseBadge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start text-left h-auto p-3">
                  Por que minha campanha de fisioterapia teve menos conversões?
                </Button>
                <Button variant="outline" className="w-full justify-start text-left h-auto p-3">
                  Qual é o melhor horário para publicar meus anúncios?
                </Button>
                <Button variant="outline" className="w-full justify-start text-left h-auto p-3">
                  Como posso melhorar minha taxa de conversão?
                </Button>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Faça uma pergunta sobre seus dados..."
                    className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-health-500"
                  />
                  <Button className="rounded-l-none bg-health-500 hover:bg-health-600">
                    Perguntar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="campaigns">
          <div className="p-8 text-center">
            <h3 className="text-lg font-medium mb-2">Análise de Campanhas</h3>
            <p className="text-muted-foreground">Esta seção mostrará análises detalhadas de suas campanhas.</p>
          </div>
        </TabsContent>
        
        <TabsContent value="geographic">
          <div className="p-8 text-center">
            <h3 className="text-lg font-medium mb-2">Mapa de Calor Geográfico</h3>
            <p className="text-muted-foreground">Visualize a origem geográfica de seus leads.</p>
          </div>
        </TabsContent>
        
        <TabsContent value="conversion">
          <div className="p-8 text-center">
            <h3 className="text-lg font-medium mb-2">Análise de Conversão</h3>
            <p className="text-muted-foreground">Métricas detalhadas de conversão e comportamento dos leads.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Relatorios;
