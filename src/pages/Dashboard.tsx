
import React from "react";
import MetricCard from "@/components/MetricCard";
import MRRChart from "@/components/MRRChart";
import AIRecommendation from "@/components/AIRecommendation";
import CampaignPerformance from "@/components/CampaignPerformance";
import { ChartBar, Calendar, Users, Heart } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-4 md:space-y-6 max-w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <h1 className="text-xl md:text-2xl font-bold">Dashboard</h1>
        <span className="text-xs sm:text-sm text-muted-foreground">Última atualização: 10 minutos atrás</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Leads Qualificados Hoje"
          value="12"
          trend={{ value: "25%", positive: true }}
          icon={<Users className="h-5 w-5" />}
          description="3 agendamentos confirmados"
        />
        <MetricCard
          title="Taxa de Conversão"
          value="28,5%"
          trend={{ value: "3,2%", positive: true }}
          icon={<ChartBar className="h-5 w-5" />}
          description="Média do setor: 22%"
        />
        <MetricCard
          title="MRR Atual"
          value="R$ 13.800"
          trend={{ value: "10,4%", positive: true }}
          icon={<Calendar className="h-5 w-5" />}
          description="Projeção para Out: R$ 17.200"
        />
        <MetricCard
          title="Retenção de Pacientes"
          value="89%"
          trend={{ value: "2%", positive: true }}
          icon={<Heart className="h-5 w-5" />}
          description="18 retornos este mês"
        />
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
        <div className="xl:col-span-2">
          <MRRChart />
        </div>
        <div className="space-y-6">
          <h2 className="font-medium text-lg">Recomendações de IA</h2>
          <AIRecommendation
            title="Sua campanha para dentistas tem 20% menos conversão que a média"
            description="Detectei um padrão nos anúncios com melhor performance. Posso otimizar sua campanha atual."
            actionText="Otimizar Anúncio"
          />
          <AIRecommendation
            title="Pico de leads detectado às 19h"
            description="Aumente seu orçamento entre 18h e 21h para maximizar conversões. Isso pode aumentar leads em até 35%."
            actionText="Ajustar Orçamento"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
        <div className="xl:col-span-2">
          <CampaignPerformance />
        </div>
        <div className="bg-white rounded-lg border shadow-sm p-4">
          <h2 className="font-medium text-lg mb-4">Próximos Passos</h2>
          <ul className="space-y-3">
            <li className="flex items-center p-3 bg-muted rounded-md">
              <div className="w-6 h-6 rounded-full bg-tech-200 text-tech-800 flex items-center justify-center text-xs mr-3">
                1
              </div>
              <span className="text-sm">Revisar as 5 campanhas ativas</span>
            </li>
            <li className="flex items-center p-3 bg-muted rounded-md">
              <div className="w-6 h-6 rounded-full bg-tech-200 text-tech-800 flex items-center justify-center text-xs mr-3">
                2
              </div>
              <span className="text-sm">Responder aos 8 leads em espera</span>
            </li>
            <li className="flex items-center p-3 bg-muted rounded-md">
              <div className="w-6 h-6 rounded-full bg-tech-200 text-tech-800 flex items-center justify-center text-xs mr-3">
                3
              </div>
              <span className="text-sm">Confirmar consulta com 3 clientes potenciais</span>
            </li>
          </ul>
          
          <div className="mt-6 pt-4 border-t">
            <h3 className="font-medium text-sm mb-3">Metas de MRR</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-health-500 to-tech-500 h-2.5 rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-xs">
              <span>R$ 13.800</span>
              <span className="text-muted-foreground">Meta: R$ 20.000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
