import ProjectList from "@/components/ProjectList";

const ArchitectureProjects = () => {
  const projects = [
    {
      title: "Microservices Architecture Design",
      description: "Designed and implemented a scalable microservices architecture for a fintech application. Features API gateway, service mesh, and distributed monitoring.",
      technologies: ["Docker", "Kubernetes", "AWS", "Node.js"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Cloud-Native Data Pipeline",
      description: "Built a serverless data processing pipeline on AWS with automatic scaling, error handling, and real-time monitoring capabilities.",
      technologies: ["AWS Lambda", "S3", "DynamoDB", "CloudWatch"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Enterprise API Gateway",
      description: "Designed and deployed a high-performance API gateway handling millions of requests per day with rate limiting, authentication, and analytics.",
      technologies: ["Kong", "Redis", "PostgreSQL", "Grafana"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <ProjectList
      title="Architecture Projects"
      description="System design and software architecture solutions"
      projects={projects}
    />
  );
};

export default ArchitectureProjects;