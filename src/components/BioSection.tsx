import { Card } from "@/components/ui/card";

const BioSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Bio Section */}
        <Card className="p-8 bg-portfolio-card shadow-card hover-lift">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Bio</h2>
          <p className="text-portfolio-muted leading-relaxed">
            A motivated and detail-oriented data analytics professional with strong analytical skills 
            and a passion for data-driven decision-making. Proficient in tools like Excel, SQL, 
            Tableau, Power BI, and Python. Adept at analyzing and visualizing data to uncover 
            actionable insights and support business growth effectively.
          </p>
          <p className="text-portfolio-muted leading-relaxed mt-4">
            Currently expanding expertise in machine learning and advanced statistical analysis 
            to deliver more sophisticated data solutions. Committed to continuous learning and 
            staying updated with the latest trends in data science and analytics.
          </p>
        </Card>

        {/* Technical Skills Section */}
        <Card className="p-8 bg-portfolio-card shadow-card hover-lift">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Technical Skills</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium transition-smooth hover:bg-blue-200">
                Python
              </div>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-medium transition-smooth hover:bg-green-200">
                Excel
              </div>
              <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg text-sm font-medium transition-smooth hover:bg-purple-200">
                SQL
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg text-sm font-medium transition-smooth hover:bg-orange-200">
                Power BI
              </div>
              <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium transition-smooth hover:bg-indigo-200">
                Tableau
              </div>
              <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg text-sm font-medium transition-smooth hover:bg-red-200">
                MySQL
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-smooth hover:bg-gray-200">
                Machine Learning
              </div>
              <div className="bg-teal-100 text-teal-800 px-4 py-2 rounded-lg text-sm font-medium transition-smooth hover:bg-teal-200">
                Data Visualization
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BioSection;