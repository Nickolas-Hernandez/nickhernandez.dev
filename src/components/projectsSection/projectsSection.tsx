import { ProjectsRenderer } from "@/components/projectsSection/projectRenderer";
import { projectData } from "@/data/projects";

export const ProjectsSection = () => {
  const projects = ProjectsRenderer(projectData);

  return (
    <section id="projects">
      <div className="contain">
        { [...projects]}
      </div>
    </section>
  )
};
