
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import AIPulseBadge from "./AIPulseBadge";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: string;
}

// Simulação de respostas de IA
const aiResponses = [
  "Baseado nos seus dados, sugiro reforçar sua presença no Instagram, pois foi a plataforma com maior conversão para sua especialidade.",
  "Analisando suas campanhas, percebi que o público na faixa de 35-45 anos tem maior probabilidade de se tornar paciente recorrente.",
  "Para aumentar seu MRR, recomendo criar um pacote de acompanhamento mensal com desconto progressivo.",
  "Notei que 62% dos seus leads abandonam o processo após a primeira mensagem. Sugiro implementar um fluxo de automação com lembretes.",
  "De acordo com seus resultados, terça e quinta à noite são os melhores momentos para postar conteúdo educativo."
];

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Olá! Sou sua assistente de marketing da LeadHealth Pro. Como posso ajudar hoje?",
      sender: "ai",
      timestamp: "10:30"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Adicionar mensagem do usuário
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newUserMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simular resposta da IA
    setTimeout(() => {
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Orientação Estratégica
          </CardTitle>
          <AIPulseBadge>IA</AIPulseBadge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={cn(
                "flex",
                msg.sender === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div 
                className={cn(
                  "max-w-[80%] rounded-lg px-4 py-2 text-sm",
                  msg.sender === "user" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted"
                )}
              >
                <p>{msg.text}</p>
                <p className="text-xs mt-1 opacity-70 text-right">{msg.timestamp}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-muted max-w-[80%] rounded-lg px-4 py-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="flex w-full gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Faça uma pergunta sobre seus leads..."
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend} className="bg-gradient-to-r from-tech-500 to-tech-600">
            Enviar
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AIChat;
