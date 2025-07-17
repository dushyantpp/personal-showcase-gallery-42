import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FileText, Linkedin, Github, Mail, Phone, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import profilePhoto from "@/assets/profile-photo.jpg";

const PortfolioHero = () => {
  const { toast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sarah.analyst@email.com");
    toast({
      title: "Email copied!",
      description: "Email address has been copied to clipboard.",
    });
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+1 (555) 123-4567");
    toast({
      title: "Phone copied!",
      description: "Phone number has been copied to clipboard.",
    });
  };

  return (
    <div className="min-h-screen portfolio-background-gradient px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Portfolio Card */}
        <Card className="bg-portfolio-card shadow-card hover-lift p-8 md:p-12 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Profile Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                  <AvatarImage src={profilePhoto} alt="Sarah Chen" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="text-portfolio-accent font-medium text-lg animate-float">
                      Hello, I am
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                    Sarah Chen
                  </h1>
                  <p className="text-portfolio-muted text-lg leading-relaxed">
                    Data Analytics Expert | SQL | Python | Power BI | Tableau | 
                    Machine Learning Enthusiast
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="gap-2 hover-lift">
                  <FileText className="w-4 h-4" />
                  Resume
                </Button>
                <Button variant="outline" className="gap-2 hover-lift">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" className="gap-2 hover-lift">
                  <Github className="w-4 h-4" />
                  Github
                </Button>
              </div>

              {/* Projects Summary */}
              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Projects:</h3>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="gap-2 px-4 py-2 text-sm">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    8 Python
                  </Badge>
                  <Badge variant="secondary" className="gap-2 px-4 py-2 text-sm">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    6 Excel
                  </Badge>
                  <Badge variant="secondary" className="gap-2 px-4 py-2 text-sm">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    5 SQL
                  </Badge>
                  <Badge variant="secondary" className="gap-2 px-4 py-2 text-sm">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    4 Power BI
                  </Badge>
                  <Badge variant="secondary" className="gap-2 px-4 py-2 text-sm">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    3 Tableau
                  </Badge>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 bg-white shadow-sm border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-portfolio-muted">Email</p>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">sarah.analyst@email.com</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleCopyEmail}
                          className="p-1 h-auto hover-lift"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-portfolio-muted">Phone</p>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">+1 (555) 123-4567</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleCopyPhone}
                          className="p-1 h-auto hover-lift"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PortfolioHero;