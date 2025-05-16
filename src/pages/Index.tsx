
import React from "react";
import Navbar from "@/components/Navbar";
import HeroRevolutionary from "@/components/HeroRevolutionary";
import ROISection from "@/components/ROISection";
import SocialProofDynamic from "@/components/SocialProofDynamic";
import LeadMagnet from "@/components/LeadMagnet";
import QualificationQuiz from "@/components/QualificationQuiz";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FeedbackWidget from "@/components/FeedbackWidget";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroRevolutionary />
        
        {/* ROI Simulator Section */}
        <ROISection />
        
        {/* Social Proof Section */}
        <SocialProofDynamic />
        
        {/* Lead Magnet Section */}
        <LeadMagnet />
        
        {/* Qualification Quiz */}
        <QualificationQuiz />
        
        {/* CTA Section */}
        <CTASection />
        
        {/* Feedback Widget */}
        <FeedbackWidget />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
