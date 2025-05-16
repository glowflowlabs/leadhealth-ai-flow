
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, ChevronLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type QuestionStep = "initial" | "profile" | "size" | "revenue" | "complete";

const FeedbackWidget = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentStep, setCurrentStep] = useState<QuestionStep>("initial");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const { toast } = useToast();
  
  const handleAnswerSelection = (question: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [question]: answer }));
    
    if (currentStep === "initial") {
      setCurrentStep("profile");
    } else if (currentStep === "profile") {
      setCurrentStep("size");
    } else if (currentStep === "size") {
      setCurrentStep("revenue");
    } else if (currentStep === "revenue") {
      setCurrentStep("complete");
      toast({
        title: "Feedback completo!",
        description: "Muito obrigado pelas suas respostas. Suas informações são valiosas para nós!"
      });
    }
  };
  
  const goBack = () => {
    if (currentStep === "profile") {
      setCurrentStep("initial");
    } else if (currentStep === "size") {
      setCurrentStep("profile");
    } else if (currentStep === "revenue") {
      setCurrentStep("size");
    }
  };
  
  const resetFeedback = () => {
    setCurrentStep("initial");
    setAnswers({});
    setShowFeedback(false);
  };
  
  const renderQuestion = () => {
    switch (currentStep) {
      case "initial":
        return (
          <>
            <h4 className="font-medium mb-2">Quanto você pagaria por um serviço que gerasse 15 leads/mês qualificados?</h4>
            <div className="space-y-2">
              <button 
                className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => handleAnswerSelection("priceRange", "Até R$500/mês")}
              >
                Até R$500/mês
              </button>
              <button 
                className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => handleAnswerSelection("priceRange", "R$501 a R$1.000/mês")}
              >
                R$501 a R$1.000/mês
              </button>
              <button 
                className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => handleAnswerSelection("priceRange", "R$1.001 a R$1.500/mês")}
              >
                R$1.001 a R$1.500/mês
              </button>
              <button 
                className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => handleAnswerSelection("priceRange", "Acima de R$1.500/mês")}
              >
                Acima de R$1.500/mês
              </button>
            </div>
          </>
        );
      case "profile":
        return (
          <>
            <div className="flex items-center mb-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 mr-1" 
                onClick={goBack}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h4 className="font-medium">Qual é o seu perfil?</h4>
            </div>
            <div className="space-y-2">
              <button 
                className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => handleAnswerSelection("profile", "Profissional independente/autônomo")}
              >
                Profissional independente/autônomo
              </button>
              <button 
                className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => handleAnswerSelection("profile", "Clínica de pequeno porte")}
              >
                Clínica de pequeno porte
              </button>
              <button 
                className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => handleAnswerSelection("profile", "Clínica de médio/grande porte")}
              >
                Clínica de médio/grande porte
              </button>
              <button 
                className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => handleAnswerSelection("profile", "Hospital/Rede de saúde")}
              >
                Hospital/Rede de saúde
              </button>
              <button 
                className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => handleAnswerSelection("profile", "Outro")}
              >
                Outro
              </button>
            </div>
          </>
        );
      case "size":
        return (
          <>
            <div className="flex items-center mb-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 mr-1" 
                onClick={goBack}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h4 className="font-medium">Quantos profissionais atuam no seu estabelecimento?</h4>
            </div>
            <div className="space-y-2">
              <button 
                className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => handleAnswerSelection("size", "Apenas eu")}
              >
                Apenas eu
              </button>
              <button 
                className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => handleAnswerSelection("size", "2 a 5 profissionais")}
              >
                2 a 5 profissionais
              </button>
              <button 
                className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => handleAnswerSelection("size", "6 a 15 profissionais")}
              >
                6 a 15 profissionais
              </button>
              <button 
                className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => handleAnswerSelection("size", "Mais de 15 profissionais")}
              >
                Mais de 15 profissionais
              </button>
            </div>
          </>
        );
      case "revenue":
        return (
          <>
            <div className="flex items-center mb-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 mr-1" 
                onClick={goBack}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h4 className="font-medium">Qual o faturamento médio mensal?</h4>
            </div>
            <div className="space-y-2">
              <button 
                className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => handleAnswerSelection("revenue", "Até R$10.000")}
              >
                Até R$10.000
              </button>
              <button 
                className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => handleAnswerSelection("revenue", "R$10.001 a R$30.000")}
              >
                R$10.001 a R$30.000
              </button>
              <button 
                className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => handleAnswerSelection("revenue", "R$30.001 a R$100.000")}
              >
                R$30.001 a R$100.000
              </button>
              <button 
                className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => handleAnswerSelection("revenue", "Acima de R$100.000")}
              >
                Acima de R$100.000
              </button>
              <button 
                className="w-full p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                onClick={() => handleAnswerSelection("revenue", "Prefiro não informar")}
              >
                Prefiro não informar
              </button>
            </div>
          </>
        );
      case "complete":
        return (
          <>
            <h4 className="font-medium mb-4">Obrigado pelo seu feedback!</h4>
            <p className="text-sm text-gray-600 mb-4">
              Suas respostas nos ajudarão a desenvolver uma solução mais adequada às suas necessidades.
            </p>
            <Button 
              onClick={resetFeedback}
              className="w-full"
            >
              Fechar
            </Button>
          </>
        );
      default:
        return null;
    }
  };
  
  return (
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
          {renderQuestion()}
        </div>
      )}
    </div>
  );
};

export default FeedbackWidget;
