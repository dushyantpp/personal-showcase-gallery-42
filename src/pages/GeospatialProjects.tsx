import ProjectList from "@/components/ProjectList";

const GeospatialProjects = () => {
  const projects = [
    {
      title: "Urban Planning GIS Dashboard",
      description: "Interactive mapping solution for urban planners using ArcGIS and JavaScript. Features real-time data visualization, zoning analysis, and demographic overlays.",
      technologies: ["ArcGIS", "JavaScript", "Python", "PostGIS"],
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=250&fit=crop",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Environmental Impact Analysis",
      description: "Comprehensive geospatial analysis of environmental factors affecting development projects. Includes watershed analysis, soil assessment, and biodiversity mapping.",
      technologies: ["QGIS", "R", "Leaflet", "MongoDB"],
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=250&fit=crop",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Transportation Network Optimization",
      description: "Spatial analysis project to optimize public transportation routes using network analysis algorithms and real-time traffic data.",
      technologies: ["PostGIS", "Python", "NetworkX", "OpenStreetMap"],
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <ProjectList
      title="Geospatial Analysis Projects"
      description="Advanced spatial analysis and geographic information systems solutions"
      projects={projects}
    />
  );
};

export default GeospatialProjects;