
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();

  const handleClick = () => {
    setOpen(true);
    toast({
      title: "MVP em desenvolvimento",
      description: "Estamos validando a plataforma. Obrigado pelo seu interesse!",
    });
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
    </section>
  );
};

export default CTASection;
