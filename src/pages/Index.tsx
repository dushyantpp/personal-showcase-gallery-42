import PortfolioHero from "@/components/PortfolioHero";
import BioSection from "@/components/BioSection";
import FeaturedProjects from "@/components/FeaturedProjects";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PortfolioHero />
      <BioSection />
      <FeaturedProjects />
    </div>
  );
};

export default Index;
