
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = ({ className }: { className?: string }) => {
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
          <Link to="/trial">
            <Button size="sm" className="bg-gradient-to-r from-health-500 to-tech-500 hover:from-health-600 hover:to-tech-600">
              Teste Grátis
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
