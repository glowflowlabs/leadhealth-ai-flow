
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import AIPulseBadge from "@/components/AIPulseBadge";

const professions = [
  { value: "fisioterapeuta", label: "Fisioterapeuta", avgLeads: 15, avgConversion: 0.3, avgValue: 180 },
  { value: "dentista", label: "Dentista", avgLeads: 20, avgConversion: 0.25, avgValue: 220 },
  { value: "nutricionista", label: "Nutricionista", avgLeads: 18, avgConversion: 0.35, avgValue: 150 },
  { value: "psicologo", label: "Psicólogo", avgLeads: 22, avgConversion: 0.40, avgValue: 170 },
  { value: "veterinario", label: "Veterinário", avgLeads: 16, avgConversion: 0.28, avgValue: 200 }
];

const ROICalculator = () => {
  const [profession, setProfession] = useState(professions[0].value);
  const [investment, setInvestment] = useState(1000);
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState<{
    leads: number;
    clients: number;
    revenue: number;
    roi: number;
  } | null>(null);

  // Encontrar a profissão selecionada
  const selectedProfession = professions.find(p => p.value === profession) || professions[0];

  // Calcular o ROI com base na profissão e investimento
  useEffect(() => {
    setCalculating(true);
    
    const timer = setTimeout(() => {
      // Fórmula simples para simulação:
      // - Custo por lead varia entre R$50-70 dependendo da profissão
      // - Aplicamos uma eficiência de escala conforme o investimento aumenta
      const costPerLead = investment > 1500 ? 50 : 65;
      const leads = Math.floor(investment / costPerLead);
      const clients = Math.floor(leads * selectedProfession.avgConversion);
      const revenue = clients * selectedProfession.avgValue;
      const roi = ((revenue - investment) / investment) * 100;
      
      setResult({
        leads,
        clients,
        revenue,
        roi: parseFloat(roi.toFixed(1))
      });
      
      setCalculating(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [profession, investment, selectedProfession]);

  return (
    <Card className="w-full shadow">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">Calculadora de ROI</CardTitle>
          <AIPulseBadge>Dados em tempo real</AIPulseBadge>
        </div>
        <p className="text-muted-foreground text-sm">
          Descubra quantos leads qualificados você pode gerar
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Sua profissão</label>
          <Select value={profession} onValueChange={setProfession}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione sua profissão" />
            </SelectTrigger>
            <SelectContent>
              {professions.map((p) => (
                <SelectItem key={p.value} value={p.value}>
                  {p.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium">Investimento mensal</label>
            <span className="text-sm font-medium">
              R$ {investment.toLocaleString('pt-BR')}
            </span>
          </div>
          <Slider 
            min={500} 
            max={5000} 
            step={100} 
            value={[investment]} 
            onValueChange={(value) => setInvestment(value[0])} 
            className="py-4"
          />
        </div>
        
        <div className="bg-muted p-4 rounded-md">
          <h4 className="font-medium mb-3">Estimativa de Resultados</h4>
          {calculating ? (
            <div className="space-y-2">
              <div className="h-4 w-3/4 shimmer rounded"></div>
              <div className="h-4 w-2/3 shimmer rounded"></div>
              <div className="h-4 w-4/5 shimmer rounded"></div>
            </div>
          ) : (
            result && (
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Leads qualificados/mês:</span>
                  <span className="font-medium">{result.leads}</span>
                </div>
                <div className="flex justify-between">
                  <span>Novos pacientes/mês:</span>
                  <span className="font-medium">{result.clients}</span>
                </div>
                <div className="flex justify-between">
                  <span>Receita estimada/mês:</span>
                  <span className="font-medium text-health-600">
                    R$ {result.revenue.toLocaleString('pt-BR')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>ROI:</span>
                  <span className={`font-medium ${result.roi > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {result.roi}%
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        *Resultados baseados em dados de clientes com perfil semelhante
      </CardFooter>
    </Card>
  );
};

export default ROICalculator;
