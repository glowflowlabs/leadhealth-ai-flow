
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AIPulseBadge from "@/components/AIPulseBadge";
import { BrainCircuit, Stethoscope } from "lucide-react";

const HeroRevolutionary = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-health-500 to-tech-500 py-16 lg:py-24">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-6">
              <AIPulseBadge>IA Médica Certificada</AIPulseBadge>
              <span className="text-white/80 text-sm">Validada por 287 clínicas</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Geramos <span className="text-white underline decoration-tech-300">428 leads/mês</span> para ortopedistas usando IA ética
            </h1>
            
            <p className="text-xl mb-6 text-white/90">
              Garantia de 35% de conversão em consultas ou você não paga. 
              Tecnologia especializada para profissionais de saúde.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/trial">
                <Button size="lg" className="bg-white text-health-600 hover:bg-white/90 transition-colors w-full sm:w-auto">
                  Iniciar teste grátis de 7 dias
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  Ver demonstração
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <BrainCircuit className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">IA Ética & CFM</p>
                  <p className="text-sm text-white/70">100% em conformidade</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Stethoscope className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">Suporte Médico</p>
                  <p className="text-sm text-white/70">Especializado 24/7</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video bg-white rounded-xl shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-health-100 to-tech-100 p-6">
                <div className="w-full h-full rounded-lg border border-gray-200 bg-white shadow-md overflow-hidden">
                  <div className="p-4 border-b">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <h3 className="text-lg font-medium text-center text-gray-800">Dashboard LeadHealth Pro</h3>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium">Leads hoje: 14</span>
                      <span className="text-sm text-green-600 font-medium">+28% vs ontem</span>
                    </div>
                    <div className="h-20 bg-gray-100 rounded mb-4 overflow-hidden relative">
                      <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                        <div style={{height: '30%'}} className="w-[8%] bg-health-300"></div>
                        <div style={{height: '45%'}} className="w-[8%] bg-health-400"></div>
                        <div style={{height: '35%'}} className="w-[8%] bg-health-300"></div>
                        <div style={{height: '60%'}} className="w-[8%] bg-health-500"></div>
                        <div style={{height: '75%'}} className="w-[8%] bg-health-600"></div>
                        <div style={{height: '50%'}} className="w-[8%] bg-health-400"></div>
                        <div style={{height: '65%'}} className="w-[8%] bg-health-500"></div>
                        <div style={{height: '85%'}} className="w-[8%] bg-health-600"></div>
                        <div style={{height: '70%'}} className="w-[8%] bg-health-500"></div>
                        <div style={{height: '90%'}} className="w-[8%] bg-tech-600"></div>
                        <div style={{height: '80%'}} className="w-[8%] bg-tech-500"></div>
                        <div style={{height: '95%'}} className="w-[8%] bg-tech-600"></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>01/05</span>
                      <span>15/05</span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Conversão para consultas</span>
                        <span className="text-sm font-bold">37%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">MRR estimado</span>
                        <span className="text-sm font-bold text-tech-600">R$ 12.450</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white py-1 px-3 rounded-full shadow-lg text-xs font-medium text-tech-600 border border-tech-200">
              Dados em tempo real
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRevolutionary;
