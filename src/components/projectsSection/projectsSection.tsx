import { ProjectsRenderer } from "@/components/projectsSection/projectRenderer";
import { projectData } from "@/data/projects";

export const ProjectsSection = () => {
  const projects = ProjectsRenderer(projectData);

  return (
    <section id="projects" className="projects-section">
      <div className="contain">
        { [...projects]}
      </div>
    </section>
  )
};
