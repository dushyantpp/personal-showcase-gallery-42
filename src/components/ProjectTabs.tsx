import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const ProjectTabs = () => {
  const navigate = useNavigate();

  const categories = [
    { id: "data-analysis", label: "Data/Business Analysis", path: "/projects/data-analysis" },
    { id: "geospatial", label: "Geospatial Analysis", path: "/projects/geospatial" },
    { id: "architecture", label: "Architecture", path: "/projects/architecture" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Card className="p-8 bg-portfolio-card shadow-card">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Project Categories</h2>
          <p className="text-portfolio-muted">
            Explore my work across different domains and specializations
          </p>
        </div>

        <Tabs defaultValue="data-analysis" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-muted/50">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                onClick={() => navigate(category.path)}
                className="text-sm font-medium cursor-pointer"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="mt-6 text-center">
          <p className="text-sm text-portfolio-muted">
            Click on any category above to explore detailed projects
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ProjectTabs;