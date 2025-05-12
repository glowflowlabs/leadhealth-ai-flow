
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Campanhas from "./pages/Campanhas";
import Relatorios from "./pages/Relatorios";
import CRM from "./pages/CRM";
import Orientacoes from "./pages/Orientacoes";
import NotFound from "./pages/NotFound";
import DashboardLayout from "./components/DashboardLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Rotas do Dashboard */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/campanhas" element={<Campanhas />} />
            <Route path="/relatorios" element={<Relatorios />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/orientacoes" element={<Orientacoes />} />
          </Route>
          
          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
