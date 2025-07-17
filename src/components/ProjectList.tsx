import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

interface ProjectListProps {
  title: string;
  description: string;
  projects: Project[];
}

const ProjectList = ({ title, description, projects }: ProjectListProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-portfolio-primary via-portfolio-secondary to-portfolio-accent">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Card className="p-8 bg-portfolio-card shadow-card">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-4 gap-2 hover:bg-muted/50"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
            <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
            <p className="text-portfolio-muted">{description}</p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover-lift bg-white border border-gray-100"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {project.title}
                        </h3>
                        <p className="text-portfolio-muted mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary" 
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="gap-2 hover-lift"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </Button>
                        <Button 
                          size="sm" 
                          className="gap-2 hover-lift"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProjectList;