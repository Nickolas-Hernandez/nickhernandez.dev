import Image from 'next/image';
import Link from 'next/link';
import { project } from '@/interfaces/project';
import github from 'public/github.svg'

export const RenderedProjects = (projects: project[ ]) => {
  const Projects = projects.map((project, i: number) => {
    return (
      <Project key={i} project={project} />
    );
  });
  return Projects;
};

const Project = ({ project }: { project: project }, key : number) => {
  return (
    <div className="project bg-grey-dark ">
      <div className="image-wrapper max-w-max">
        <Image src={project.image} alt={`${project.title} Logo`} width={859} height={560}/>
      </div>
      <div className="content-wrapper">
        { key === 0 ? <strong>Featured Project</strong> : null }
        <h3>{project.title}</h3>
        <div className="icon-wrapper">icons</div>
        <p>{project.description}</p>
      </div>
      <div className="link-wrapper">
        <Link href={ project.live } target="_blank">
          <button className='style-project'>Visit Site</button>
        </Link>
        <Link href={ project.github } target="_blank">
          <Image src={github} alt="Link to Github Repository" width={30} height={30} />
        </Link>
      </div>
    </div>
  )
}
