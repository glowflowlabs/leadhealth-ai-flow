
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MessageSquare, Calendar, Edit2, Save, X } from "lucide-react";
import { Lead } from "@/components/LeadCard";

interface LeadDetailModalProps {
  lead: Lead;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpdateLead: (updatedLead: Lead) => void;
}

const LeadDetailModal = ({ lead, open, onOpenChange, onUpdateLead }: LeadDetailModalProps) => {
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({
    status: lead.status,
    urgency: lead.urgency,
    message: lead.message || "",
  });

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

  const handleSave = () => {
    const updatedLead = {
      ...lead,
      status: editData.status,
      urgency: editData.urgency,
      message: editData.message || undefined,
    };
    onUpdateLead(updatedLead);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditData({
      status: lead.status,
      urgency: lead.urgency,
      message: lead.message || "",
    });
    setEditMode(false);
  };

  const handleWhatsApp = () => {
    const cleanPhone = lead.phone.replace(/\D/g, '');
    const message = `Olá ${lead.name}! Entrando em contato sobre seu interesse em ${lead.interest}.`;
    window.open(`https://wa.me/55${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleEmail = () => {
    const subject = `Contato sobre ${lead.interest}`;
    const body = `Olá ${lead.name}!\n\nEntrando em contato sobre seu interesse em ${lead.interest}.\n\nAtenciosamente,\nEquipe`;
    window.open(`mailto:${lead.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>{lead.name}</DialogTitle>
            <div className="flex items-center gap-2">
              {!editMode ? (
                <Button size="sm" variant="outline" onClick={() => setEditMode(true)}>
                  <Edit2 className="h-4 w-4" />
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={handleCancel}>
                    <X className="h-4 w-4" />
                  </Button>
                  <Button size="sm" onClick={handleSave}>
                    <Save className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4">
          {/* Status e Urgência */}
          <div className="flex gap-2">
            {editMode ? (
              <>
                <Select value={editData.status} onValueChange={(value: Lead["status"]) => setEditData({ ...editData, status: value })}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="novo">Novo</SelectItem>
                    <SelectItem value="contatado">Contatado</SelectItem>
                    <SelectItem value="agendado">Agendado</SelectItem>
                    <SelectItem value="convertido">Convertido</SelectItem>
                    <SelectItem value="perdido">Perdido</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={editData.urgency} onValueChange={(value: Lead["urgency"]) => setEditData({ ...editData, urgency: value })}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="baixa">Baixa</SelectItem>
                    <SelectItem value="media">Média</SelectItem>
                    <SelectItem value="alta">Alta</SelectItem>
                  </SelectContent>
                </Select>
              </>
            ) : (
              <>
                <Badge className={statusColors[lead.status]} variant="outline">
                  {lead.status}
                </Badge>
                <Badge className={urgencyColors[lead.urgency]} variant="outline">
                  {lead.urgency === "alta" ? "Urgente" : lead.urgency === "media" ? "Médio" : "Baixo"}
                </Badge>
              </>
            )}
          </div>

          {/* Informações de Contato */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{lead.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{lead.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{lead.interest}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Origem: {lead.source}</span>
            </div>
          </div>

          <Separator />

          {/* Mensagem */}
          <div>
            <h4 className="text-sm font-medium mb-2">Mensagem</h4>
            {editMode ? (
              <Textarea
                value={editData.message}
                onChange={(e) => setEditData({ ...editData, message: e.target.value })}
                placeholder="Adicione observações sobre o lead..."
                rows={3}
              />
            ) : (
              <div className="bg-muted p-3 rounded text-sm">
                {lead.message || "Nenhuma mensagem registrada"}
              </div>
            )}
          </div>

          {/* Timeline */}
          {lead.timeline && (
            <>
              <Separator />
              <div>
                <h4 className="text-sm font-medium mb-3">Histórico</h4>
                <div className="space-y-3">
                  {lead.timeline.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div className="flex-1">
                        <p className="text-sm">{item.action}</p>
                        <p className="text-xs text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Ações */}
          <Separator />
          <div className="flex gap-2">
            <Button onClick={handleWhatsApp} className="flex-1 bg-green-600 hover:bg-green-700">
              <Phone className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
            <Button onClick={handleEmail} variant="outline" className="flex-1">
              <Mail className="h-4 w-4 mr-2" />
              Email
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadDetailModal;
