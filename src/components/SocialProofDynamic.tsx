
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Star, Users, MapPin, BadgeCheck } from "lucide-react";

const SocialProofDynamic = () => {
  const [consultations, setConsultations] = useState(3428);
  const [specialtyMap, setSpecialtyMap] = useState({
    ortopedista: 68,
    dentista: 42,
    dermatologista: 85,
    nutricionista: 37,
    cardiologista: 51,
    psicologo: 74
  });

  // Simulando números crescentes
  useEffect(() => {
    const timer = setInterval(() => {
      setConsultations(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Ricardo Mendes",
      specialty: "Ortopedista",
      location: "São Paulo, SP",
      image: "/placeholder.svg",
      quote: "Minha agenda estava com 40% de ocupação. Em 4 semanas com LeadHealth Pro, estou com lista de espera e aumentei meu ticket médio em 30%.",
      rating: 5,
      crmVerified: true
    },
    {
      id: 2,
      name: "Dra. Juliana Costa",
      specialty: "Dermatologista",
      location: "Rio de Janeiro, RJ",
      image: "/placeholder.svg",
      quote: "O sistema de qualificação de leads economiza muito tempo da minha secretária. Os pacientes já chegam sabendo exatamente o tratamento que precisam.",
      rating: 5,
      crmVerified: true
    },
    {
      id: 3,
      name: "Dr. Paulo Souza",
      specialty: "Dentista",
      location: "Belo Horizonte, MG",
      image: "/placeholder.svg",
      quote: "Investimos R$2.200 e recebemos 54 novos pacientes no primeiro mês. O ROI foi incrível e agora abrimos uma segunda unidade.",
      rating: 5,
      crmVerified: true
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Resultados Verificados</Badge>
            <h2 className="text-3xl font-bold mb-4">Social Proof em Tempo Real</h2>
            <p className="text-muted-foreground">Dados atualizados dos resultados de nossos clientes</p>
          </div>
          
          {/* Contador de Consultas */}
          <div className="flex justify-center mb-12">
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="bg-gradient-to-br from-health-500 to-health-600 p-6 text-white flex items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="h-5 w-5" />
                      <span className="font-medium">Consultas Agendadas</span>
                    </div>
                    <div className="text-4xl font-bold">
                      {consultations.toLocaleString('pt-BR')}
                    </div>
                    <div className="text-xs text-white/80 mt-1">
                      via plataforma LeadHealth Pro
                    </div>
                  </div>
                </div>
                
                <div className="col-span-2 p-6">
                  <h3 className="font-medium mb-3 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-tech-500" />
                    <span>Conversão por Especialidade</span>
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(specialtyMap).map(([specialty, value]) => (
                      <div key={specialty} className="relative">
                        <div className="text-xs text-muted-foreground mb-1 capitalize">{specialty}</div>
                        <div className="w-full bg-gray-100 rounded-full h-1.5">
                          <div 
                            className="h-1.5 rounded-full bg-gradient-to-r from-tech-400 to-tech-600"
                            style={{width: `${value}%`}}
                          ></div>
                        </div>
                        <span className="text-xs font-medium mt-1 absolute right-0">{value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Depoimentos */}
          <div>
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id}>
                    <Card className="border shadow hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-medium flex items-center gap-1">
                                  {testimonial.name}
                                  {testimonial.crmVerified && (
                                    <Badge variant="outline" className="ml-2 flex items-center gap-1 h-5 text-[10px]">
                                      <BadgeCheck className="h-3 w-3 text-health-500" />
                                      CRM verificado
                                    </Badge>
                                  )}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {testimonial.specialty} • {testimonial.location}
                                </p>
                              </div>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="mt-3 italic text-gray-700">"{testimonial.quote}"</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative transform-none translate-y-0 left-0 mr-2" />
                <CarouselNext className="relative transform-none translate-y-0 right-0 ml-2" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofDynamic;
