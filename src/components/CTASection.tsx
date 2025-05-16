
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-health-500 to-tech-500 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Pronto para transformar sua captação de pacientes?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Teste gratuitamente por 7 dias. Sem compromisso.
        </p>
        <Link to="/trial">
          <Button size="lg" className="bg-white text-health-600 hover:bg-white/90 transition-colors px-8">
            Começar agora →
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
