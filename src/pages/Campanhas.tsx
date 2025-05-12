
import React from "react";
import CampaignCreator from "@/components/CampaignCreator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AIPulseBadge from "@/components/AIPulseBadge";

// Dados simulados para campanhas ativas
const campaignsActive = [
  {
    id: "cam1",
    title: "Avaliação Fisioterápica Gratuita",
    platform: "Instagram",
    status: "ativa",
    performance: "alta",
    metrics: {
      views: 4850,
      clicks: 320,
      leads: 42,
      cpc: 4.8,
      conversion: 13.1
    },
    lastUpdated: "Hoje, 10:32"
  },
  {
    id: "cam2",
    title: "Check-up Odontológico com 40% OFF",
    platform: "Facebook",
    status: "ativa",
    performance: "media",
    metrics: {
      views: 3250,
      clicks: 185,
      leads: 28,
      cpc: 5.2,
      conversion: 15.1
    },
    lastUpdated: "Ontem, 18:15"
  },
  {
    id: "cam3",
    title: "Consulta Online de Nutrição",
    platform: "Google",
    status: "ativa",
    performance: "baixa",
    metrics: {
      views: 2120,
      clicks: 98,
      leads: 12,
      cpc: 7.1,
      conversion: 12.2
    },
    lastUpdated: "2 dias atrás"
  }
];

// Dados simulados para campanhas pausadas
const campaignsPaused = [
  {
    id: "cam4",
    title: "Mês da Saúde Mental - Primeira Sessão 50% OFF",
    platform: "Instagram",
    status: "pausada",
    performance: "media",
    metrics: {
      views: 2350,
      clicks: 142,
      leads: 18,
      cpc: 5.9,
      conversion: 12.7
    },
    lastUpdated: "5 dias atrás"
  },
  {
    id: "cam5",
    title: "Pacote Completo de Fisioterapia",
    platform: "WhatsApp",
    status: "pausada",
    performance: "baixa",
    metrics: {
      views: 1430,
      clicks: 65,
      leads: 8,
      cpc: 8.2,
      conversion: 12.3
    },
    lastUpdated: "1 semana atrás"
  }
];

const performanceColors = {
  alta: "bg-green-100 text-green-800",
  media: "bg-yellow-100 text-yellow-800",
  baixa: "bg-red-100 text-red-800"
};

const CampaignCard = ({ campaign }: { campaign: any }) => {
  return (
    <Card key={campaign.id} className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <CardTitle className="text-base font-medium">{campaign.title}</CardTitle>
          <Badge className={performanceColors[campaign.performance as keyof typeof performanceColors]} variant="outline">
            {campaign.performance === "alta" ? "Alta performance" : 
             campaign.performance === "media" ? "Performance média" : 
             "Baixa performance"}
          </Badge>
        </div>
        <div className="flex gap-2 text-xs text-muted-foreground mt-1">
          <span>{campaign.platform}</span>
          <span>•</span>
          <span>Atualizada {campaign.lastUpdated}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4 my-3">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">Visualizações</p>
            <p className="font-medium">{campaign.metrics.views.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">Cliques</p>
            <p className="font-medium">{campaign.metrics.clicks}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">Leads</p>
            <p className="font-medium">{campaign.metrics.leads}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">Conversão</p>
            <p className="font-medium">{campaign.metrics.conversion}%</p>
          </div>
        </div>
        
        <div className="flex justify-end gap-2 mt-4">
          <Button size="sm" variant="outline">
            Detalhes
          </Button>
          {campaign.status === "ativa" ? (
            <Button size="sm" variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50">
              Pausar
            </Button>
          ) : (
            <Button size="sm" className="bg-health-500 hover:bg-health-600">
              Reativar
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const Campanhas = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Campanhas</h1>
        <Button className="bg-gradient-to-r from-health-500 to-tech-500">
          Nova Campanha
        </Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <Tabs defaultValue="active">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="active">Ativas ({campaignsActive.length})</TabsTrigger>
                <TabsTrigger value="paused">Pausadas ({campaignsPaused.length})</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <AIPulseBadge>IA monitorando</AIPulseBadge>
              </div>
            </div>
            
            <TabsContent value="active" className="space-y-4">
              {campaignsActive.map((campaign) => (
                <CampaignCard key={campaign.id} campaign={campaign} />
              ))}
            </TabsContent>
            
            <TabsContent value="paused" className="space-y-4">
              {campaignsPaused.map((campaign) => (
                <CampaignCard key={campaign.id} campaign={campaign} />
              ))}
            </TabsContent>
          </Tabs>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-base font-medium">Insights da IA</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 border border-blue-100 rounded-md">
                  <h4 className="font-medium text-sm">Melhor horário para anúncios</h4>
                  <p className="text-sm mt-1">Seus anúncios têm melhor desempenho entre 18h e 21h durante a semana.</p>
                </div>
                <div className="p-3 bg-green-50 border border-green-100 rounded-md">
                  <h4 className="font-medium text-sm">Oferta mais efetiva</h4>
                  <p className="text-sm mt-1">Campanhas com "avaliação gratuita" têm 3x mais conversões que descontos percentuais.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <CampaignCreator />
      </div>
    </div>
  );
};

export default Campanhas;
