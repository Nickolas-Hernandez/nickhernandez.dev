import { RenderedProjects } from "@/components/projectsSection/projectRenderer";
import { projectData } from "@/data/projects";

export const ProjectsSection = () => {
  const projects = RenderedProjects(projectData);

  return (
    <section id="projects">
      <div className="contain">
        { [...projects]}
      </div>
    </section>
  )
};
