
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroRevolutionary from "@/components/HeroRevolutionary";
import ROISimulator from "@/components/ROISimulator";
import SocialProofDynamic from "@/components/SocialProofDynamic";
import LeadMagnet from "@/components/LeadMagnet";
import QualificationQuiz from "@/components/QualificationQuiz";
import { MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  const { toast } = useToast();
  
  const handleFeedbackSubmit = (option: string) => {
    toast({
      title: "Feedback recebido",
      description: "Obrigado por compartilhar sua opinião conosco!"
    });
    setShowFeedback(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroRevolutionary />
        
        {/* ROI Simulator Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
                Calculadora de ROI para Profissionais de Saúde
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Simule agora quanto você pode faturar com pacientes particulares
              </p>
              <ROISimulator />
            </div>
          </div>
        </section>
        
        {/* Social Proof Section */}
        <SocialProofDynamic />
        
        {/* Lead Magnet Section */}
        <LeadMagnet />
        
        {/* Qualification Quiz */}
        <QualificationQuiz />
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-health-500 to-tech-500 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para transformar sua captação de pacientes?
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
            className="bg-white shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <MessageSquare className="h-4 w-4" />
            {showFeedback ? "Fechar" : "Feedback Rápido"}
          </Button>
          
          {showFeedback && (
            <div className="absolute bottom-12 right-0 mb-2 w-80 p-4 bg-white rounded-lg shadow-lg border">
              <h4 className="font-medium mb-2">Quanto você pagaria por um serviço que gerasse 15 leads/mês qualificados?</h4>
              <div className="space-y-2">
                <button 
                  className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                  onClick={() => handleFeedbackSubmit("Até R$500/mês")}
                >
                  Até R$500/mês
                </button>
                <button 
                  className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                  onClick={() => handleFeedbackSubmit("R$501 a R$1.000/mês")}
                >
                  R$501 a R$1.000/mês
                </button>
                <button 
                  className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                  onClick={() => handleFeedbackSubmit("R$1.001 a R$1.500/mês")}
                >
                  R$1.001 a R$1.500/mês
                </button>
                <button 
                  className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                  onClick={() => handleFeedbackSubmit("Acima de R$1.500/mês")}
                >
                  Acima de R$1.500/mês
                </button>
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
