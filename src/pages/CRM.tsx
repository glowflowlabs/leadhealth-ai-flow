
import React, { useState } from "react";
import LeadCard, { Lead } from "@/components/LeadCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AIPulseBadge from "@/components/AIPulseBadge";

// Dados simulados para leads
const mockLeads: Lead[] = [
  {
    id: "lead1",
    name: "Ana Silva",
    email: "ana.silva@email.com",
    phone: "(11) 98765-4321",
    source: "Instagram",
    interest: "Fisioterapia para dor lombar",
    status: "novo",
    urgency: "alta",
    message: "Estou com dor lombar aguda há 3 dias e preciso de atendimento urgente.",
    createdAt: "Hoje, 09:45",
    timeline: [
      { action: "Clicou no anúncio 'Fisioterapia para Dores'", date: "Hoje, 09:30" },
      { action: "Preencheu formulário de contato", date: "Hoje, 09:45" }
    ]
  },
  {
    id: "lead2",
    name: "Carlos Mendes",
    email: "carlos.m@email.com",
    phone: "(11) 97654-3210",
    source: "Facebook",
    interest: "Clareamento dental",
    status: "contatado",
    urgency: "media",
    createdAt: "Ontem, 14:20",
    timeline: [
      { action: "Visitou página de clareamento dental", date: "Ontem, 14:10" },
      { action: "Solicitou orçamento", date: "Ontem, 14:20" },
      { action: "Recebeu mensagem no WhatsApp", date: "Ontem, 15:05" }
    ]
  },
  {
    id: "lead3",
    name: "Mariana Costa",
    email: "mari.costa@email.com",
    phone: "(11) 96543-2109",
    source: "Google",
    interest: "Consulta de nutrição online",
    status: "agendado",
    urgency: "baixa",
    createdAt: "2 dias atrás",
    timeline: [
      { action: "Buscou no Google por 'nutricionista online'", date: "2 dias atrás" },
      { action: "Agendou consulta inicial", date: "2 dias atrás" },
      { action: "Confirmou agendamento para 15/05", date: "Ontem" }
    ]
  },
  {
    id: "lead4",
    name: "Ricardo Oliveira",
    email: "ricardo.o@email.com",
    phone: "(11) 95432-1098",
    source: "WhatsApp",
    interest: "Psicoterapia",
    status: "novo",
    urgency: "alta",
    message: "Preciso de um horário esta semana, estou passando por um momento difícil.",
    createdAt: "Hoje, 11:15",
  },
  {
    id: "lead5",
    name: "Juliana Almeida",
    email: "juliana.a@email.com",
    phone: "(11) 94321-0987",
    source: "Instagram",
    interest: "Fisioterapia pós-operatória",
    status: "convertido",
    urgency: "media",
    createdAt: "1 semana atrás",
    timeline: [
      { action: "Clicou em anúncio de recuperação pós-operatória", date: "1 semana atrás" },
      { action: "Agendou consulta", date: "6 dias atrás" },
      { action: "Compareceu à consulta", date: "2 dias atrás" },
      { action: "Contratou pacote de 10 sessões", date: "2 dias atrás" }
    ]
  }
];

const CRM = () => {
  const [leads, setLeads] = useState<Lead[]>(mockLeads);
  const [filter, setFilter] = useState({
    search: "",
    status: "all",
    urgency: "all"
  });

  // Filtrar leads com base nos critérios
  const filteredLeads = leads.filter(lead => {
    // Filtro de pesquisa
    const searchMatch = 
      lead.name.toLowerCase().includes(filter.search.toLowerCase()) || 
      lead.email.toLowerCase().includes(filter.search.toLowerCase()) ||
      lead.interest.toLowerCase().includes(filter.search.toLowerCase());
    
    // Filtro de status
    const statusMatch = filter.status === "all" || lead.status === filter.status;
    
    // Filtro de urgência
    const urgencyMatch = filter.urgency === "all" || lead.urgency === filter.urgency;
    
    return searchMatch && statusMatch && urgencyMatch;
  });

  return (
    <div className="space-y-4 md:space-y-6 max-w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h1 className="text-xl md:text-2xl font-bold">Gerenciamento de Leads</h1>
        <div className="flex items-center gap-2">
          <AIPulseBadge>IA prioriza contatos</AIPulseBadge>
        </div>
      </div>
      
      {/* Filtros */}
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Input
              placeholder="Buscar leads..."
              value={filter.search}
              onChange={(e) => setFilter({ ...filter, search: e.target.value })}
            />
          </div>
          <div>
            <Select
              value={filter.status}
              onValueChange={(value) => setFilter({ ...filter, status: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os status</SelectItem>
                <SelectItem value="novo">Novo</SelectItem>
                <SelectItem value="contatado">Contatado</SelectItem>
                <SelectItem value="agendado">Agendado</SelectItem>
                <SelectItem value="convertido">Convertido</SelectItem>
                <SelectItem value="perdido">Perdido</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select
              value={filter.urgency}
              onValueChange={(value) => setFilter({ ...filter, urgency: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Urgência" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas urgências</SelectItem>
                <SelectItem value="alta">Alta</SelectItem>
                <SelectItem value="media">Média</SelectItem>
                <SelectItem value="baixa">Baixa</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      {/* Resumo */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border text-center">
          <p className="text-sm text-muted-foreground mb-1">Total de Leads</p>
          <p className="text-2xl font-bold">{leads.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg border text-center">
          <p className="text-sm text-muted-foreground mb-1">Leads Novos</p>
          <p className="text-2xl font-bold">{leads.filter(l => l.status === "novo").length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg border text-center">
          <p className="text-sm text-muted-foreground mb-1">Alta Urgência</p>
          <p className="text-2xl font-bold text-rose-600">{leads.filter(l => l.urgency === "alta").length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg border text-center">
          <p className="text-sm text-muted-foreground mb-1">Taxa de Conversão</p>
          <p className="text-2xl font-bold">{Math.round((leads.filter(l => l.status === "convertido").length / leads.length) * 100)}%</p>
        </div>
      </div>
      
      {/* Lista de Leads */}
      {filteredLeads.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredLeads.map(lead => (
            <LeadCard key={lead.id} lead={lead} />
          ))}
        </div>
      ) : (
        <div className="bg-muted p-8 rounded-lg text-center">
          <p className="text-muted-foreground">Nenhum lead encontrado com os filtros atuais.</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => setFilter({ search: "", status: "all", urgency: "all" })}
          >
            Limpar filtros
          </Button>
        </div>
      )}
    </div>
  );
};

export default CRM;
