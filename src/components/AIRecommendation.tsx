
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AIPulseBadge from "@/components/AIPulseBadge";
import { cn } from "@/lib/utils";

interface AIRecommendationProps {
  title: string;
  description: string;
  actionText: string;
  className?: string;
}

const AIRecommendation = ({
  title,
  description,
  actionText,
  className,
}: AIRecommendationProps) => {
  const [loading, setLoading] = useState(false);

  const handleAction = () => {
    setLoading(true);
    // Simulando o processamento da IA
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Card className={cn("relative overflow-hidden border-l-4 border-l-tech-500", className)}>
      <CardContent className="p-4">
        <div className="absolute right-2 top-2">
          <AIPulseBadge>IA</AIPulseBadge>
        </div>
        <h4 className="font-medium text-base mt-4">{title}</h4>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
        <div className="mt-4">
          <Button 
            onClick={handleAction} 
            disabled={loading}
            size="sm" 
            className="bg-gradient-to-r from-tech-500 to-tech-400"
          >
            {loading ? (
              <>
                <span className="animate-pulse mr-2">⏳</span> Analisando dados...
              </>
            ) : (
              actionText
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIRecommendation;
