import { ProjectsRenderer } from "@/components/projectsSection/projectRenderer";
import { projectData } from "@/data/projects";

export const ProjectsSection = () => {
  const projects = ProjectsRenderer(projectData);

  return (
    <section id="projects" className="projects-section">
      <div className="contain">
        {
          projects.length <= 0  ? <p className="mx-auto text-2xl">Projects coming soon...</p> : null
        }
        { [...projects]}
      </div>
    </section>
  )
};
