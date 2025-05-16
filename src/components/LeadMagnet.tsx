
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { FileText, Download, MessageSquare, Calculator } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ToolkitFormValues {
  name: string;
  email: string;
  phone: string;
  specialty: string;
}

const LeadMagnet = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ToolkitFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      specialty: ""
    }
  });

  const onSubmit = (data: ToolkitFormValues) => {
    setIsSubmitting(true);
    // Simulando envio
    setTimeout(() => {
      setIsSubmitting(false);
      console.log("Form data:", data);
      toast({
        title: "Kit de Ferramentas Enviado!",
        description: "Verifique seu e-mail para acessar o material."
      });
    }, 1500);
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge variant="outline" className="mb-3">Kit Gratuito</Badge>
              <h2 className="text-3xl font-bold mb-4">
                Kit de Ferramentas "Growth para Clínicas"
              </h2>
              <p className="text-muted-foreground mb-6">
                Baixe gratuitamente nosso kit completo para impulsionar os resultados da sua clínica através de marketing digital ético e eficiente.
              </p>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-health-500">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-health-100 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-health-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Template de Jornada do Paciente via WhatsApp</h3>
                      <p className="text-sm text-muted-foreground">
                        Script completo de mensagens para converter leads em pacientes agendados.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-tech-500">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-tech-100 flex items-center justify-center flex-shrink-0">
                      <Calculator className="h-5 w-5 text-tech-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Calculadora de LTV Médico</h3>
                      <p className="text-sm text-muted-foreground">
                        Planilha para calcular o valor do tempo de vida do seu paciente e otimizar investimentos.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-health-500">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-health-100 flex items-center justify-center flex-shrink-0">
                      <FileText className="h-5 w-5 text-health-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Guia de Compliance para Marketing em Saúde</h3>
                      <p className="text-sm text-muted-foreground">
                        Manual completo com as regras de publicidade médica e odontológica atualizadas.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-health-50 to-tech-50">
                  <CardTitle className="text-xl font-bold">Baixe o Kit Completo</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome completo</FormLabel>
                            <FormControl>
                              <Input placeholder="Seu nome" {...field} required />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-mail profissional</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="seu@email.com" {...field} required />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefone (WhatsApp)</FormLabel>
                            <FormControl>
                              <Input placeholder="(00) 00000-0000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="specialty"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Especialidade</FormLabel>
                            <FormControl>
                              <Input placeholder="Ex: Ortopedia, Dermatologia, etc" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button 
                    onClick={form.handleSubmit(onSubmit)}
                    className="w-full bg-gradient-to-r from-health-500 to-tech-500 hover:from-health-600 hover:to-tech-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Processando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Baixar Kit Gratuito
                      </span>
                    )}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-3">
                    Seus dados estão seguros e não serão compartilhados.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnet;
