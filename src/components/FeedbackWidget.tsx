
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FeedbackWidget = () => {
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
  );
};

export default FeedbackWidget;
