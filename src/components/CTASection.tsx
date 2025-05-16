
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone } from "lucide-react";

const CTASection = () => {
  const [open, setOpen] = useState(false);
  const [contactType, setContactType] = useState<"email" | "phone">("email");
  const [contactValue, setContactValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleClick = () => {
    setOpen(true);
    toast({
      title: "MVP em desenvolvimento",
      description: "Estamos validando a plataforma. Obrigado pelo seu interesse!",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactValue.trim()) {
      setSubmitted(true);
      toast({
        title: "Contato registrado!",
        description: "Entraremos em contato em breve. Obrigado pelo interesse!",
      });
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setContactValue("");
    setContactType("email");
    setOpen(false);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-health-500 to-tech-500 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Pronto para transformar sua captação de pacientes?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Teste gratuitamente por 7 dias. Sem compromisso.
        </p>
        <Button 
          size="lg" 
          className="bg-white text-health-600 hover:bg-white/90 transition-colors px-8"
          onClick={handleClick}
        >
          Começar agora →
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          {!submitted ? (
            <>
              <DialogHeader>
                <DialogTitle>MVP em Validação</DialogTitle>
                <DialogDescription>
                  Obrigado pelo seu interesse! A plataforma LeadHealth Pro está em fase final de desenvolvimento.
                  Estamos validando as funcionalidades com profissionais de saúde selecionados.
                  Deixe seu contato conosco para ser um dos primeiros a experimentar quando lançarmos oficialmente.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="flex gap-4 items-center">
                  <Button
                    type="button"
                    variant={contactType === "email" ? "default" : "outline"}
                    onClick={() => setContactType("email")}
                    className="flex-1"
                  >
                    <Mail className="mr-2" /> Email
                  </Button>
                  <Button
                    type="button"
                    variant={contactType === "phone" ? "default" : "outline"}
                    onClick={() => setContactType("phone")}
                    className="flex-1"
                  >
                    <Phone className="mr-2" /> Telefone
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact">
                    {contactType === "email" ? "Email" : "Telefone"}
                  </Label>
                  <Input
                    id="contact"
                    type={contactType === "email" ? "email" : "tel"}
                    placeholder={contactType === "email" ? "seuemail@exemplo.com" : "(xx) xxxxx-xxxx"}
                    value={contactValue}
                    onChange={(e) => setContactValue(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-between pt-2">
                  <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                    Cancelar
                  </Button>
                  <Button type="submit">Enviar</Button>
                </div>
              </form>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Obrigado pelo seu interesse!</DialogTitle>
                <DialogDescription>
                  Recebemos seu contato e entraremos em contato assim que o LeadHealth Pro estiver disponível.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-end pt-4">
                <Button onClick={resetForm}>Fechar</Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTASection;
