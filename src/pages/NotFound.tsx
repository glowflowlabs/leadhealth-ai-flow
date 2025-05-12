
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuário tentou acessar rota inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-health-50 to-tech-50">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold text-health-500 mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Oops! Não encontramos a página que você está procurando.
        </p>
        <Link to="/dashboard">
          <Button className="bg-gradient-to-r from-health-500 to-tech-500">
            Voltar para o Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
