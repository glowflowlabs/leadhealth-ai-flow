
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ROICalculator from "@/components/ROICalculator";
import VideoPlayer from "@/components/VideoPlayer";
import AIPulseBadge from "@/components/AIPulseBadge";
import { ChartBar, Calendar, Users, MessageSquare } from "lucide-react";

const Index = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-health-500 to-tech-500 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Gere R$ 10k/mês em receita recorrente com leads qualificados para sua clínica. Sem complicação.
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Tecnologia de IA que converte visitantes em pacientes, sem precisar entender de marketing digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/trial">
                  <Button size="lg" className="bg-white text-health-600 hover:bg-white/90 transition-colors px-8">
                    Comece seu teste grátis de 7 dias →
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-center lg:justify-start mt-8 space-x-6">
                <AIPulseBadge>Resultados em 24h</AIPulseBadge>
                <p className="text-sm text-white/80">
                  <span className="font-medium">+280</span> profissionais usando
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-lg mx-auto">
                <VideoPlayer 
                  thumbnail="/placeholder.svg"
                  title="Veja como o Dr. Carlos aumentou seu MRR em 200% em 3 meses"
                  duration="0:30"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* ROI Calculator Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
                Calcule seu potencial de receita recorrente
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Baseado em dados reais de centenas de profissionais de saúde
              </p>
              <ROICalculator />
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Tudo que você precisa para crescer sua clínica
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg border p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChartBar className="h-6 w-6 text-health-600" />
                </div>
                <h3 className="font-bold mb-2">Dashboard de MRR</h3>
                <p className="text-muted-foreground text-sm">
                  Visualize sua receita recorrente atual e projeções para os próximos meses.
                </p>
              </div>
              <div className="bg-white rounded-lg border p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-tech-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-tech-600" />
                </div>
                <h3 className="font-bold mb-2">Campanhas com IA</h3>
                <p className="text-muted-foreground text-sm">
                  Crie anúncios otimizados para sua especialidade em segundos.
                </p>
              </div>
              <div className="bg-white rounded-lg border p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-health-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-health-600" />
                </div>
                <h3 className="font-bold mb-2">CRM Integrado</h3>
                <p className="text-muted-foreground text-sm">
                  Acompanhe seus leads do primeiro contato até a conversão.
                </p>
              </div>
              <div className="bg-white rounded-lg border p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-tech-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-tech-600" />
                </div>
                <h3 className="font-bold mb-2">Orientação por IA</h3>
                <p className="text-muted-foreground text-sm">
                  Receba insights personalizados para melhorar suas estratégias.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Resultados reais de profissionais como você
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-health-100 rounded-full flex items-center justify-center mr-3">
                    DR
                  </div>
                  <div>
                    <h4 className="font-medium">Dr. Ricardo Santos</h4>
                    <p className="text-xs text-muted-foreground">Fisioterapeuta</p>
                  </div>
                </div>
                <p className="text-sm italic">"Minha agenda estava com 30% de ocupação. Em 2 meses com LeadHealth Pro, estou com lista de espera!"</p>
                <div className="mt-4 flex">
                  <span className="text-amber-500">★★★★★</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-tech-100 rounded-full flex items-center justify-center mr-3">
                    DM
                  </div>
                  <div>
                    <h4 className="font-medium">Dra. Marina Oliveira</h4>
                    <p className="text-xs text-muted-foreground">Dentista</p>
                  </div>
                </div>
                <p className="text-sm italic">"Investi R$2.500 e recebi 38 novos pacientes no primeiro mês. O ROI foi de mais de 400%."</p>
                <div className="mt-4 flex">
                  <span className="text-amber-500">★★★★★</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-health-100 rounded-full flex items-center justify-center mr-3">
                    PL
                  </div>
                  <div>
                    <h4 className="font-medium">Paulo Lima</h4>
                    <p className="text-xs text-muted-foreground">Psicólogo</p>
                  </div>
                </div>
                <p className="text-sm italic">"Não entendia nada de marketing antes. A IA criou campanhas que atraíram exatamente o perfil de paciente que eu queria."</p>
                <div className="mt-4 flex">
                  <span className="text-amber-500">★★★★★</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-health-500 to-tech-500 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para transformar sua clínica?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Teste gratuitamente por 7 dias. Sem compromisso.
            </p>
            <Link to="/trial">
              <Button size="lg" className="bg-white text-health-600 hover:bg-white/90 transition-colors px-8">
                Começar agora →
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Feedback Button */}
        <div className="fixed bottom-4 right-4">
          <Button
            onClick={() => setShowFeedback(!showFeedback)}
            variant="outline"
            className="bg-white shadow-md hover:shadow-lg"
          >
            {showFeedback ? "Fechar" : "Feedback Rápido"}
          </Button>
          
          {showFeedback && (
            <div className="absolute bottom-12 right-0 mb-2 w-80 p-4 bg-white rounded-lg shadow-lg border">
              <h4 className="font-medium mb-2">Quanto você pagaria por um serviço que gerasse 15 leads/mês qualificados?</h4>
              <div className="space-y-2">
                <button className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded">Até R$500/mês</button>
                <button className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded">R$501 a R$1.000/mês</button>
                <button className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded">R$1.001 a R$1.500/mês</button>
                <button className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded">Acima de R$1.500/mês</button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-md bg-gradient-to-r from-health-500 to-tech-500 flex items-center justify-center text-white font-bold mr-2">
                LH
              </div>
              <span className="font-bold text-lg">LeadHealth Pro</span>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              © 2025 LeadHealth Pro. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
