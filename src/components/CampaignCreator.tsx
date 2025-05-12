
import React, { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AIPulseBadge from "./AIPulseBadge";

const professions = [
  { value: "fisioterapeuta", label: "Fisioterapeuta" },
  { value: "dentista", label: "Dentista" },
  { value: "nutricionista", label: "Nutricionista" },
  { value: "psicologo", label: "Psicólogo" },
  { value: "veterinario", label: "Veterinário" }
];

const platforms = [
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
  { value: "google", label: "Google" },
  { value: "whatsapp", label: "WhatsApp" }
];

const CampaignCreator = () => {
  const [profession, setProfession] = useState("");
  const [platform, setPlatform] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [tab, setTab] = useState("edit");

  const handleGenerateAI = () => {
    if (!profession || !platform) return;
    
    setLoading(true);
    
    // Simulação de geração de campanha com IA
    setTimeout(() => {
      const titles = {
        fisioterapeuta: "Elimine dores nas costas com nossa fisioterapia especializada",
        dentista: "Sorria com confiança: Clareamento dental com 50% OFF",
        nutricionista: "Emagrecimento saudável e resultados duradouros",
        psicologo: "Cuide da sua saúde mental com profissionais especialistas",
        veterinario: "Check-up completo para seu pet com preço especial"
      };
      
      const descriptions = {
        fisioterapeuta: "Nossos fisioterapeutas utilizam técnicas avançadas para tratar dores crônicas e lesões. Primeira avaliação gratuita! Agende já.",
        dentista: "Transforme seu sorriso com nosso tratamento de clareamento dental premiado. Promoção exclusiva este mês. Agende sua consulta!",
        nutricionista: "Planos alimentares personalizados baseados no seu metabolismo. Resultados visíveis em 30 dias. Consulta online disponível.",
        psicologo: "Enfrente desafios com apoio profissional. Sessões presenciais ou online. Primeira consulta com 40% de desconto.",
        veterinario: "Exames completos, vacinação e check-up para garantir a saúde do seu pet. Atendimento carinhoso e especializado."
      };
      
      setTitle(titles[profession as keyof typeof titles] || "");
      setDescription(descriptions[profession as keyof typeof descriptions] || "");
      setLoading(false);
      setGenerated(true);
      setTab("preview");
    }, 2000);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">Criação de Campanhas</CardTitle>
          <AIPulseBadge>Assistente de IA</AIPulseBadge>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="edit">Editar</TabsTrigger>
            <TabsTrigger value="preview" disabled={!generated}>Pré-visualizar</TabsTrigger>
          </TabsList>
          <TabsContent value="edit" className="space-y-4">
            <div className="space-y-4 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Profissão</label>
                  <Select value={profession} onValueChange={setProfession}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione sua profissão" />
                    </SelectTrigger>
                    <SelectContent>
                      {professions.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Plataforma</label>
                  <Select value={platform} onValueChange={setPlatform}>
                    <SelectTrigger>
                      <SelectValue placeholder="Onde publicar" />
                    </SelectTrigger>
                    <SelectContent>
                      {platforms.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Button 
                  onClick={handleGenerateAI}
                  disabled={!profession || !platform || loading}
                  className="w-full bg-gradient-to-r from-tech-500 to-tech-400 mb-6"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin">⏳</span> 
                      Criando campanha otimizada...
                    </span>
                  ) : (
                    "Gerar campanha com IA"
                  )}
                </Button>

                <div className="space-y-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Título</label>
                    <Input 
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Título atrativo da campanha"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Descrição</label>
                    <Textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Descrição detalhada da sua oferta"
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="preview">
            {generated && (
              <div className="space-y-6 mt-4">
                <div className={`rounded-lg overflow-hidden border ${platform === 'instagram' ? 'aspect-square' : 'aspect-video'}`}>
                  <div className="h-full w-full bg-gradient-to-br from-health-100 to-tech-100 p-6 flex flex-col items-center justify-center text-center">
                    {profession && (
                      <div className="mb-4">
                        {profession === "fisioterapeuta" && (
                          <span className="text-4xl">🧘‍♂️</span>
                        )}
                        {profession === "dentista" && (
                          <span className="text-4xl">😁</span>
                        )}
                        {profession === "nutricionista" && (
                          <span className="text-4xl">🥗</span>
                        )}
                        {profession === "psicologo" && (
                          <span className="text-4xl">🧠</span>
                        )}
                        {profession === "veterinario" && (
                          <span className="text-4xl">🐾</span>
                        )}
                      </div>
                    )}
                    <h3 className="font-bold text-xl">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                    <Button className="mt-4 bg-gradient-to-r from-health-500 to-tech-500">
                      Agende Agora
                    </Button>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Análise de IA</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Contém call-to-action claro e direto</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Destaca benefícios específicos para o cliente</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Otimizado para {platform === 'instagram' ? 'feed do Instagram' : platform === 'facebook' ? 'timeline do Facebook' : platform === 'google' ? 'pesquisas no Google' : 'mensagens no WhatsApp'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">!</span>
                      <span>Considere adicionar uma oferta por tempo limitado</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        {generated && tab === "preview" && (
          <>
            <Button variant="outline" onClick={() => setTab("edit")}>
              Editar
            </Button>
            <Button className="bg-gradient-to-r from-health-500 to-tech-500">
              Publicar Campanha
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default CampaignCreator;
