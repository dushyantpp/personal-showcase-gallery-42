import ProjectList from "@/components/ProjectList";

const DataAnalysisProjects = () => {
  const projects = [
    {
      title: "E-commerce Sales Analysis Dashboard",
      description: "Comprehensive sales analytics dashboard built with Power BI to track KPIs, customer behavior, and sales trends. Features interactive visualizations and real-time data updates.",
      technologies: ["Power BI", "SQL", "Excel"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Machine learning project using Python to segment customers based on purchasing behavior. Implemented K-means clustering and RFM analysis for targeted marketing strategies.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Financial Data Visualization",
      description: "Interactive Tableau dashboard for financial performance analysis. Created dynamic charts and KPI indicators to track revenue, expenses, and profitability metrics.",
      technologies: ["Tableau", "SQL", "Data Modeling"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Market Research Analytics Platform",
      description: "Built a comprehensive analytics platform to process and visualize market research data. Includes automated reporting and trend analysis capabilities.",
      technologies: ["R", "Shiny", "ggplot2", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1590402494596-d8663d4cc6b9?w=400&h=250&fit=crop",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <ProjectList
      title="Data & Business Analysis Projects"
      description="Comprehensive data analysis and business intelligence solutions"
      projects={projects}
    />
  );
};

export default DataAnalysisProjects;