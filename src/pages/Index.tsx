import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ConsortiumSection from "@/components/ConsortiumSection";
import APHOPPipelineSection from "@/components/APHOPPipelineSection";
import APHOPSection from "@/components/APHOPSection";
import AgenticAISection from "@/components/AgenticAISection";
import StatsSection from "@/components/StatsSection";
import CaseStudySection from "@/components/CaseStudySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ConsortiumSection />
      <APHOPPipelineSection />
      <APHOPSection />
      <AgenticAISection />
      <StatsSection />
      <CaseStudySection />
      <Footer />
    </div>
  );
};

export default Index;
