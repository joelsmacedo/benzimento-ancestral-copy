import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ModulesSection } from "@/components/ModulesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ModulesSection />
      <BenefitsSection />
      <GuaranteeSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
