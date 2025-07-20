
import React from "react";
import AIChat from "@/components/AIChat";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Orientacoes = () => {
  return (
    <div className="space-y-4 md:space-y-6 max-w-full">
      <h1 className="text-xl md:text-2xl font-bold">Orientação Estratégica</h1>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
        <div className="xl:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-base font-medium">Relatórios & Análises</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="insights">
                <TabsList className="mb-4">
                  <TabsTrigger value="insights">Insights de Marketing</TabsTrigger>
                  <TabsTrigger value="trends">Tendências do Mercado</TabsTrigger>
                  <TabsTrigger value="tips">Dicas Práticas</TabsTrigger>
                </TabsList>
                
                <TabsContent value="insights" className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-medium mb-2">Sazonalidade Identificada</h3>
                    <p className="text-sm">
                      A IA detectou um padrão sazonal nos seus agendamentos. Os meses de março, abril, setembro e outubro apresentam pico de demanda para sua especialidade. Recomendamos aumentar o orçamento de mídia em 30% nesses períodos.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-medium mb-2">Perfil de Paciente Ideal</h3>
                    <p className="text-sm">
                      Com base nos dados coletados, seu paciente ideal é do gênero feminino, 35-45 anos, classe B/C, que busca tratamentos preventivos e valoriza atendimento personalizado. Ajustamos seu direcionamento de anúncios para este perfil.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-medium mb-2">Oportunidade de Up-selling</h3>
                    <p className="text-sm">
                      62% dos seus pacientes atuais têm potencial para contratação de pacotes de manutenção. Criamos uma campanha de e-mail segmentada para oferecer este serviço, com potencial para aumentar seu MRR em 25%.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="trends" className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-medium mb-2">Tendências do Setor</h3>
                    <p className="text-sm">
                      Para a sua área de atuação, identificamos que pacotes de assinatura mensal estão crescendo 42% ao ano. Criamos um template de oferta de assinatura que você pode implementar.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="tips" className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-medium mb-2">Converta Mais Leads</h3>
                    <p className="text-sm">
                      Implementar um sistema de lembretes por WhatsApp 24h antes da consulta pode reduzir suas taxas de no-show em até 65%.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div className="h-[500px] md:h-[600px]">
          <AIChat />
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium">Recursos de Aprendizagem</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="aspect-video bg-muted rounded mb-3"></div>
              <h3 className="font-medium">Como usar a plataforma</h3>
              <p className="text-sm text-muted-foreground mt-1">Aprenda todas as funcionalidades em 10 minutos</p>
            </div>
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="aspect-video bg-muted rounded mb-3"></div>
              <h3 className="font-medium">Estratégias de Follow-up</h3>
              <p className="text-sm text-muted-foreground mt-1">Técnicas para aumentar sua taxa de conversão</p>
            </div>
            <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="aspect-video bg-muted rounded mb-3"></div>
              <h3 className="font-medium">Pacotes de Serviço</h3>
              <p className="text-sm text-muted-foreground mt-1">Como criar ofertas irresistíveis para seus pacientes</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Orientacoes;
