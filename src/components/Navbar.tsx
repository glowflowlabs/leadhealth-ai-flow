
import React from "react";
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

const Navbar = ({ className }: { className?: string }) => {
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(true);
    toast({
      title: "MVP em desenvolvimento",
      description: "Estamos validando a plataforma. Obrigado pelo seu interesse!",
    });
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
          <DialogHeader>
            <DialogTitle>MVP em Validação</DialogTitle>
            <DialogDescription>
              Obrigado pelo seu interesse! A plataforma LeadHealth Pro está em fase final de desenvolvimento.
              Estamos validando as funcionalidades com profissionais de saúde selecionados.
              Deixe seu email conosco para ser um dos primeiros a experimentar quando lançarmos oficialmente.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => setOpen(false)}>Entendi</Button>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Navbar;
