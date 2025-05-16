
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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

const Navbar = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  const [contactType, setContactType] = useState<"email" | "phone">("email");
  const [contactValue, setContactValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
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
    <header className={cn("w-full bg-white border-b", className)}>
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-r from-health-500 to-tech-500 flex items-center justify-center text-white font-bold">
            LH
          </div>
          <span className="font-bold text-lg hidden md:inline-block">LeadHealth Pro</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/recursos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Recursos
          </Link>
          <Link to="/precos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Preços
          </Link>
          <Link to="/contato" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contato
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/login">
            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              Login
            </Button>
          </Link>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-health-500 to-tech-500 hover:from-health-600 hover:to-tech-600"
            onClick={handleClick}
          >
            Teste Grátis
          </Button>
        </div>
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
    </header>
  );
};

export default Navbar;
