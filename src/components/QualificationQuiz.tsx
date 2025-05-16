
import React, { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChartBar } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: {
    value: number;
    text: string;
  }[];
}

interface RecommendationTier {
  minScore: number;
  title: string;
  description: string;
  color: string;
  recommendation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qual o percentual de ocupação da sua agenda atualmente?",
    options: [
      { value: 1, text: "Menos de 30% ocupada" },
      { value: 2, text: "Entre 30% e 60% ocupada" },
      { value: 3, text: "Entre 60% e 80% ocupada" },
      { value: 4, text: "Mais de 80% ocupada" }
    ]
  },
  {
    id: 2,
    question: "Como você adquire novos pacientes hoje?",
    options: [
      { value: 1, text: "Apenas por indicação" },
      { value: 2, text: "Convênios médicos principalmente" },
      { value: 3, text: "Marketing digital básico (site ou redes sociais)" },
      { value: 4, text: "Estratégia completa de marketing digital" }
    ]
  },
  {
    id: 3,
    question: "Quanto você investe mensalmente em marketing?",
    options: [
      { value: 1, text: "Não invisto regularmente" },
      { value: 2, text: "Menos de R$ 500/mês" },
      { value: 3, text: "Entre R$ 500 e R$ 2.000/mês" },
      { value: 4, text: "Mais de R$ 2.000/mês" }
    ]
  },
  {
    id: 4,
    question: "Você consegue medir o retorno sobre investimento (ROI) do seu marketing?",
    options: [
      { value: 1, text: "Não faço ideia do retorno" },
      { value: 2, text: "Tenho apenas uma percepção subjetiva" },
      { value: 3, text: "Registro manualmente as fontes dos pacientes" },
      { value: 4, text: "Uso um sistema para acompanhar conversões" }
    ]
  },
  {
    id: 5,
    question: "Como é seu processo de acompanhamento de leads?",
    options: [
      { value: 1, text: "Não tenho um processo estruturado" },
      { value: 2, text: "Minha secretária anota em agenda ou caderno" },
      { value: 3, text: "Uso ferramentas simples como Excel ou WhatsApp" },
      { value: 4, text: "Utilizo um CRM médico integrado" }
    ]
  },
  {
    id: 6,
    question: "Qual sua principal dificuldade com marketing atualmente?",
    options: [
      { value: 1, text: "Não entendo nada de marketing digital" },
      { value: 2, text: "Já tentei, mas não tive resultados" },
      { value: 3, text: "Tenho resultados, mas falta escalabilidade" },
      { value: 4, text: "Preciso apenas de otimização do que já funciona" }
    ]
  },
  {
    id: 7,
    question: "Qual sua expectativa de crescimento para os próximos 6 meses?",
    options: [
      { value: 4, text: "Dobrar o número de pacientes" },
      { value: 3, text: "Aumentar em 50% o número de pacientes" },
      { value: 2, text: "Aumentar em 25% o número de pacientes" },
      { value: 1, text: "Manter o número atual de pacientes" }
    ]
  }
];

const recommendations: RecommendationTier[] = [
  {
    minScore: 0,
    title: "Iniciante Digital",
    description: "Seu consultório precisa urgentemente de uma presença digital estratégica.",
    color: "from-red-500 to-orange-500",
    recommendation: "Pacote Essencial: Foco em criar sua presença online e primeiros leads."
  },
  {
    minScore: 10,
    title: "Em Desenvolvimento",
    description: "Você já tem algumas bases, mas precisa estruturar melhor seu marketing.",
    color: "from-orange-500 to-yellow-500",
    recommendation: "Pacote Crescimento: Estruturação de funil e primeiras campanhas."
  },
  {
    minScore: 17,
    title: "Avançando",
    description: "Bom trabalho! Você já tem uma estratégia em andamento que pode ser otimizada.",
    color: "from-yellow-500 to-green-500",
    recommendation: "Pacote Aceleração: Otimização de campanhas e automação de processos."
  },
  {
    minScore: 24,
    title: "Elite",
    description: "Parabéns! Seu consultório já tem uma forte presença digital.",
    color: "from-green-500 to-teal-500",
    recommendation: "Pacote Premium: Estratégias avançadas de escalabilidade e retenção."
  }
];

const QualificationQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<{[key: number]: number}>({});
  const [showResult, setShowResult] = useState(false);
  const [resultExpanded, setResultExpanded] = useState<string | undefined>("item-1");
  
  const totalQuestions = questions.length;
  const progress = (currentQuestion / totalQuestions) * 100;
  
  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({...prev, [questionId]: value}));
    
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };
  
  const calculateScore = () => {
    return Object.values(answers).reduce((acc, value) => acc + value, 0);
  };
  
  const getRecommendation = () => {
    const score = calculateScore();
    
    for (let i = recommendations.length - 1; i >= 0; i--) {
      if (score >= recommendations[i].minScore) {
        return recommendations[i];
      }
    }
    
    return recommendations[0];
  };
  
  const resetQuiz = () => {
    setCurrentQuestion(1);
    setAnswers({});
    setShowResult(false);
  };
  
  const renderQuestion = (question: Question) => (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{question.question}</h3>
      <div className="space-y-2">
        {question.options.map(option => (
          <button
            key={option.text}
            className="w-full p-3 rounded-md border border-gray-200 hover:bg-gray-50 text-left transition-colors"
            onClick={() => handleAnswer(question.id, option.value)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
  
  const renderProgress = () => (
    <div className="space-y-2">
      <div className="flex justify-between text-xs">
        <span>{currentQuestion} de {totalQuestions}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
  
  const renderResult = () => {
    const score = calculateScore();
    const recommendation = getRecommendation();
    const maxScore = totalQuestions * 4;
    const percentage = (score / maxScore) * 100;
    
    return (
      <div className="space-y-6">
        <div className="text-center">
          <Badge className={`bg-gradient-to-r ${recommendation.color} mb-2`}>
            {recommendation.title}
          </Badge>
          <h3 className="text-xl font-bold mb-1">Seu Score de Captação: {score}/{maxScore}</h3>
          <p className="text-muted-foreground mb-4">{recommendation.description}</p>
          
          <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden mb-6">
            <div 
              className={`h-full bg-gradient-to-r ${recommendation.color}`}
              style={{width: `${percentage}%`}}
            ></div>
          </div>
        </div>
        
        <Card className="border-t-4 border-t-health-500">
          <CardHeader className="pb-2">
            <CardTitle>Recomendação Personalizada</CardTitle>
            <CardDescription>Baseada no seu perfil de captação de pacientes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-gradient-to-r from-health-50 to-tech-50 rounded-md">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-health-500 to-tech-500 flex items-center justify-center flex-shrink-0">
                  <ChartBar className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-medium">{recommendation.recommendation}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    A solução ideal para potencializar seus resultados agora.
                  </p>
                </div>
              </div>
            </div>
            
            <Accordion type="single" value={resultExpanded} onValueChange={setResultExpanded} className="mt-4" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>O que esta recomendação inclui?</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm list-disc pl-5">
                    <li>Estratégia personalizada para sua especialidade</li>
                    <li>Campanhas otimizadas por IA para seu perfil</li>
                    <li>Integração com seu sistema atual de agendamento</li>
                    <li>Relatórios detalhados de ROI</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Por que esta solução para mim?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">
                    Baseado no seu perfil de captação atual, identificamos oportunidades 
                    específicas que podem ser rapidamente aproveitadas para aumentar seu fluxo 
                    de pacientes e maximizar sua receita recorrente mensal.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter className="flex flex-col space-y-3">
            <Button 
              className="w-full bg-gradient-to-r from-health-500 to-tech-500 hover:from-health-600 hover:to-tech-600"
            >
              Ver Detalhes da Solução Recomendada
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={resetQuiz}
            >
              Refazer Diagnóstico
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-3">Diagnóstico Gratuito</Badge>
            <h2 className="text-3xl font-bold mb-2">
              Seu Consultório é um Imã de Pacientes?
            </h2>
            <p className="text-muted-foreground">
              Responda 7 perguntas para descobrir seu potencial de captação
            </p>
          </div>
          
          <Card className="shadow-lg">
            <CardContent className="pt-6">
              {!showResult ? (
                <>
                  {renderProgress()}
                  <div className="mt-6">
                    {renderQuestion(questions[currentQuestion - 1])}
                  </div>
                </>
              ) : (
                renderResult()
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QualificationQuiz;
