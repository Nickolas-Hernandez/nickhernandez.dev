import Image from 'next/image';
import Link from 'next/link';
import { project } from '@/interfaces/project';
import { iconsData } from '@/data/icons';
import github from 'public/github.svg';
import openLink from 'public/openLink.svg';

export const ProjectsRenderer = (projects: project[ ]) => {
  const Projects = projects.map((project, i: number) => {
    return (
      <Project key={i} project={project} featured={ i === 0 ? true : false} />
    );
  });
  return Projects;
};

const Project = ({ project, featured }: { project: project, featured: boolean } ) => {
  const Icons = IconRenderer(project.tags);

  return (
    <div className={`project bg-grey-dark ${ featured ? 'featured' : '' }`}>
      <div className="image-wrapper max-w-max">
        <Image src={project.image} alt={`${project.title} Logo`} width={859} height={560}/>
      </div>
      <div className="wrapper">
        <div className="content-wrapper">
          { featured ? <strong className='text-neutral'>Featured Project</strong> : null}
          <h3>{project.title}</h3>
          <div className="icons-wrapper">
            { ...Icons }
          </div>
          <p className="md:mb-4">{project.description}</p>
        </div>
        <div className="link-wrapper">
          <Link href={ project.live } target="_blank">
            <button className='style-project'>
              <Image className='mr-2' src={ openLink } alt="Visit project site" width={18} height={18} /> Visit Site
            </button>
          </Link>
          <Link href={ project.github } target="_blank">
            <Image src={github} alt="Link to Github Repository" width={30} height={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const IconRenderer = ( tags: string[ ]) => {
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
          <Image src={iconsData.js.icon} alt="JavaScript" width={20} height={20} />
        </div>
      );
    case 'PHP':
      return (
        <div className="tech-icon">
          <Image src={iconsData.php.icon} alt="PHP" width={20} height={20} />
        </div>
      );
    case 'Python':
      return (
        <div className="tech-icon">
          <Image src={iconsData.python.icon} alt="Python" width={20} height={20} />
        </div>
      );
    case 'WordPress':
      return (
        <div className="tech-icon">
          <Image src={iconsData.wordpress.icon} alt="WordPress" width={20} height={20} />
        </div>
      );
    case 'React':
      return (
        <div className="tech-icon">
          <Image src={iconsData.react.icon} alt="React.js" width={20} height={20} />
        </div>
      );
    case 'Next.js':
      return (
        <div className="tech-icon">
          <Image src={iconsData.nextjs.icon} alt="Next.js" width={20} height={20} />
        </div>
      );
    case 'TypeScript':
      return (
        <div className="tech-icon">
          <Image src={iconsData.typescript.icon} alt="TypeScript" width={20} height={20} />
        </div>
      );
    case 'Tailwind':
      return (
        <div className="tech-icon">
          <Image src={iconsData.tailwind.icon} alt="Tailwind" width={20} height={20} />
        </div>
      );
    case 'Sass':
      return (
        <div className="tech-icon">
          <Image src={iconsData.sass.icon} alt="Sass" width={20} height={20} />
        </div>
      );
    case 'CSS':
      return (
        <div className="tech-icon">
          <Image src={iconsData.css.icon} alt="CSS" width={20} height={20} />
        </div>
      );
      case 'Go':
        return (
          <div className="tech-icon">
            <Image src={iconsData.go.icon} alt="Go Programming" width={20} height={20} />
          </div>
        );
    default:
      return null;
  };
};
