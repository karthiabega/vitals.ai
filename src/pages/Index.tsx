import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AgenticAISection from "@/components/AgenticAISection";
import APHOPSection from "@/components/APHOPSection";
import ConsortiumSection from "@/components/ConsortiumSection";
import CaseStudySection from "@/components/CaseStudySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AgenticAISection />
      <APHOPSection />
      <ConsortiumSection />
      <CaseStudySection />
      <Footer />
    </div>
  );
};

export default Index;
