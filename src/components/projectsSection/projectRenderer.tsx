import Image from 'next/image';
import Link from 'next/link';
import { project } from '@/interfaces/project';
import { iconsData } from '@/data/icons';
import github from 'public/github.svg'

export const ProjectsRenderer = (projects: project[ ]) => {
  const Projects = projects.map((project, i: number) => {
    return (
      <Project key={i} project={project} />
    );
  });
  return Projects;
};

const Project = ({ project }: { project: project }, key: number) => {
  const Icons = IconRenderer(project.tags);
  console.log('icons', Icons);

  return (
    <div className="project bg-grey-dark ">
      <div className="image-wrapper max-w-max">
        <Image src={project.image} alt={`${project.title} Logo`} width={859} height={560}/>
      </div>
      <div className="content-wrapper">
        { key === 0 ? <strong>Featured Project</strong> : null }
        <h3>{project.title}</h3>
        <div className="icon-wrapper">
          { ...Icons }
        </div>
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

const IconRenderer = ( tags: string[ ]) => {
  console.log('icons 2', tags);
  const Icons = tags.map((tag, i: number) => {
    return <Icon key={i} tag={tag}/>;
  });
  return Icons;
};

const Icon = ( { tag }: {tag: string} ) => {
  switch (tag) {
    case 'JavaScript':
      return (
        <div className="tech-icon">
          <Image src={iconsData.js.icon} alt="JavaScript Icon" width={20} height={20} />
        </div>
      );
    case 'PHP':
      return (
        <div className="tech-icon">
          <Image src={iconsData.php.icon} alt="PHP Icon" width={20} height={20} />
        </div>
      );
    case 'Python':
      return (
        <div className="tech-icon">
          <Image src={iconsData.python.icon} alt="Python Icon" width={20} height={20} />
        </div>
      );
    case 'WordPress':
      return (
        <div className="tech-icon">
          <Image src={iconsData.wordpress.icon} alt="WordPress Icon" width={20} height={20} />
        </div>
      );
    default:
      return null;
  };
};
