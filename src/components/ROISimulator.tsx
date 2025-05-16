
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import AIPulseBadge from "@/components/AIPulseBadge";

const specialties = [
  { value: "ortopedista", label: "Ortopedista", avgLeads: 18, avgConversion: 0.35, baseValue: 220 },
  { value: "dentista", label: "Dentista", avgLeads: 22, avgConversion: 0.30, baseValue: 200 },
  { value: "nutricionista", label: "Nutricionista", avgLeads: 25, avgConversion: 0.40, baseValue: 150 },
  { value: "psicologo", label: "Psicólogo", avgLeads: 20, avgConversion: 0.45, baseValue: 180 },
  { value: "dermatologista", label: "Dermatologista", avgLeads: 24, avgConversion: 0.32, baseValue: 250 }
];

const locations = [
  { value: "sp-capital", label: "São Paulo - Capital", modifier: 1.3 },
  { value: "rj-capital", label: "Rio de Janeiro - Capital", modifier: 1.2 },
  { value: "mg-capital", label: "Belo Horizonte", modifier: 1.1 },
  { value: "sul", label: "Região Sul", modifier: 1.05 },
  { value: "nordeste", label: "Região Nordeste", modifier: 1.0 },
  { value: "centro-oeste", label: "Centro-Oeste", modifier: 0.95 },
  { value: "norte", label: "Região Norte", modifier: 0.9 },
  { value: "interior", label: "Cidades do Interior", modifier: 0.85 }
];

const ROISimulator = () => {
  const [specialty, setSpecialty] = useState(specialties[0].value);
  const [location, setLocation] = useState(locations[0].value);
  const [ticketValue, setTicketValue] = useState(200);
  const [investment, setInvestment] = useState(1500);
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState<{
    leads: number;
    clients: number;
    revenue: number;
    roi: number;
  } | null>(null);

  // Encontrar informações selecionadas
  const selectedSpecialty = specialties.find(s => s.value === specialty) || specialties[0];
  const selectedLocation = locations.find(l => l.value === location) || locations[0];

  // Calcular o ROI baseado nos parâmetros
  useEffect(() => {
    setCalculating(true);
    
    const timer = setTimeout(() => {
      // Fórmula aprimorada considerando localização e valor da consulta
      const locationModifier = selectedLocation.modifier;
      const costPerLead = investment > 2000 ? 45 : 60;
      
      // Calculando leads ajustado pela localização
      const leadsBase = Math.floor(investment / costPerLead);
      const leads = Math.floor(leadsBase * locationModifier);
      
      // Calculando clientes com a taxa de conversão específica da especialidade
      const clients = Math.floor(leads * selectedSpecialty.avgConversion);
      
      // Calculando receita com o ticket informado
      const revenue = clients * ticketValue;
      const roi = ((revenue - investment) / investment) * 100;
      
      setResult({
        leads,
        clients,
        revenue,
        roi: parseFloat(roi.toFixed(1))
      });
      
      setCalculating(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, [specialty, location, ticketValue, investment, selectedSpecialty, selectedLocation]);

  return (
    <Card className="w-full shadow-lg border-t-4 border-t-health-500">
      <CardHeader className="bg-gradient-to-r from-health-50 to-tech-50">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">Simulador de ROI Médico</CardTitle>
          <AIPulseBadge>Calculadora Inteligente</AIPulseBadge>
        </div>
        <p className="text-muted-foreground text-sm">
          Personalize as variáveis para simular resultados reais baseados em dados médicos
        </p>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Especialidade Médica</label>
            <Select value={specialty} onValueChange={setSpecialty}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione sua especialidade" />
              </SelectTrigger>
              <SelectContent>
                {specialties.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Localização Geográfica</label>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione sua região" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((l) => (
                  <SelectItem key={l.value} value={l.value}>
                    {l.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium">Ticket Médio (R$)</label>
            <span className="text-sm font-medium">
              R$ {ticketValue.toLocaleString('pt-BR')}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Slider 
              min={50} 
              max={1000} 
              step={10} 
              value={[ticketValue]} 
              onValueChange={(value) => setTicketValue(value[0])} 
              className="flex-1"
            />
            <Input
              type="number"
              min="50"
              max="1000"
              value={ticketValue}
              onChange={(e) => setTicketValue(Number(e.target.value))}
              className="w-20"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium">Investimento mensal (R$)</label>
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
        
        <div className="bg-gradient-to-r from-health-50 to-tech-50 p-4 rounded-md">
          <h4 className="font-medium mb-3 flex items-center gap-2">
            Previsão de Resultados
            {calculating && <span className="w-3 h-3 rounded-full bg-health-500 animate-pulse"></span>}
          </h4>
          
          {calculating ? (
            <div className="space-y-2">
              <div className="h-4 w-3/4 shimmer rounded bg-gradient-to-r from-gray-200 to-gray-300 bg-[length:200%_100%]"></div>
              <div className="h-4 w-2/3 shimmer rounded bg-gradient-to-r from-gray-200 to-gray-300 bg-[length:200%_100%]"></div>
              <div className="h-4 w-4/5 shimmer rounded bg-gradient-to-r from-gray-200 to-gray-300 bg-[length:200%_100%]"></div>
            </div>
          ) : (
            result && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded p-3 border">
                    <div className="text-xs text-muted-foreground">Leads qualificados/mês</div>
                    <div className="text-xl font-bold text-health-600">{result.leads}</div>
                  </div>
                  
                  <div className="bg-white rounded p-3 border">
                    <div className="text-xs text-muted-foreground">Consultas agendadas</div>
                    <div className="text-xl font-bold text-tech-600">{result.clients}</div>
                  </div>
                </div>
                
                <div className="bg-white rounded p-3 border">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Receita estimada/mês</span>
                    <span className="text-lg font-bold text-health-600">
                      R$ {result.revenue.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <div className="mt-1 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">ROI estimado</span>
                    <span className={`text-sm font-bold ${result.roi > 100 ? 'text-green-600' : result.roi > 0 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {result.roi}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                    <div 
                      className={`h-1.5 rounded-full ${
                        result.roi > 200 ? 'bg-green-500' : 
                        result.roi > 100 ? 'bg-green-400' :
                        result.roi > 50 ? 'bg-yellow-500' :
                        result.roi > 0 ? 'bg-yellow-400' : 'bg-red-500'
                      }`}
                      style={{width: `${Math.min(Math.max(result.roi, 0), 300) / 3}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ROISimulator;
