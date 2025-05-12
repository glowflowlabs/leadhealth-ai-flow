
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: string;
  interest: string;
  status: "novo" | "contatado" | "agendado" | "convertido" | "perdido";
  urgency: "baixa" | "media" | "alta";
  message?: string;
  createdAt: string;
  timeline?: {
    action: string;
    date: string;
  }[];
}

interface LeadCardProps {
  lead: Lead;
  className?: string;
}

const LeadCard = ({ lead, className }: LeadCardProps) => {
  const urgencyColors = {
    baixa: "bg-blue-100 text-blue-800",
    media: "bg-yellow-100 text-yellow-800",
    alta: "bg-rose-100 text-rose-800 animate-pulse-soft",
  };

  const statusColors = {
    novo: "bg-purple-100 text-purple-800",
    contatado: "bg-blue-100 text-blue-800",
    agendado: "bg-green-100 text-green-800",
    convertido: "bg-health-100 text-health-800",
    perdido: "bg-gray-100 text-gray-800",
  };

  return (
    <Card 
      className={cn(
        "hover:shadow-md transition-shadow", 
        lead.urgency === "alta" && "border-l-4 border-l-rose-500",
        className
      )}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-medium">{lead.name}</h3>
          <div className="flex gap-2">
            <Badge className={statusColors[lead.status]} variant="outline">
              {lead.status}
            </Badge>
            <Badge className={urgencyColors[lead.urgency]} variant="outline">
              {lead.urgency === "alta" ? "Urgente" : lead.urgency === "media" ? "Médio" : "Baixo"}
            </Badge>
          </div>
        </div>
        
        <div className="text-sm space-y-1 mb-3">
          <div className="flex gap-2">
            <span className="text-muted-foreground">Email:</span>
            <span>{lead.email}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-muted-foreground">Telefone:</span>
            <span>{lead.phone}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-muted-foreground">Interesse:</span>
            <span>{lead.interest}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-muted-foreground">Origem:</span>
            <span>{lead.source}</span>
          </div>
        </div>
        
        {lead.message && (
          <div className="mb-4 text-sm bg-muted p-2 rounded">
            <p className="italic">{lead.message}</p>
          </div>
        )}
        
        {lead.timeline && (
          <div className="mb-4">
            <h4 className="text-xs font-medium text-muted-foreground mb-2">HISTÓRICO</h4>
            <ul className="text-xs space-y-2">
              {lead.timeline.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-1 mr-2" />
                  <div>
                    <span>{item.action}</span>
                    <span className="text-muted-foreground ml-1">
                      {item.date}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex justify-end gap-2">
          <Button size="sm" variant="outline">
            Ver detalhes
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-health-500 to-tech-500">
            Contatar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadCard;
