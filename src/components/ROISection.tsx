
import React from "react";
import ROICalculator from "@/components/ROICalculator";

const ROISection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Calculadora de ROI para Profissionais de Saúde
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Simule agora quanto você pode faturar com pacientes particulares
          </p>
          <ROICalculator />
        </div>
      </div>
    </section>
  );
};

export default ROISection;
