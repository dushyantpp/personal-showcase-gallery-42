import PortfolioHero from "@/components/PortfolioHero";
import BioSection from "@/components/BioSection";
import ProjectTabs from "@/components/ProjectTabs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PortfolioHero />
      <BioSection />
      <ProjectTabs />
    </div>
  );
};

export default Index;
