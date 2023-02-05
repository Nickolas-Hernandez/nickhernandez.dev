import { project } from '@/interfaces/project';
import appChat from 'public/appChatLogo.jpg';
import spader from 'public/spaderLogo.png';
import stockWatch from 'public/stockWatchlogo.png';

export const projectData: project[ ] = [
  {
    title: 'App Chat',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quae.',
    image: appChat,
    tags: ['JavaScript', 'WordPress', 'Python', 'PHP', 'PostgreSQL'],
    live: '#',
    github: '#',
  },
  {
    title: 'Spader Investigations',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quae.',
    image: spader,
    tags: ['HTML5', 'SASS', 'JavaScript'],
    live: '#',
    github: '#',
  },
  {
    title: 'Stock Watch',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quae.',
    image: stockWatch,
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    live: '#',
    github: '#',
  },
  {
    title: 'Example App',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quae.',
    image: spader,
    tags: ['TypeScript', 'Next.js', 'SASS' ],
    live: '#',
    github: '#',
  },
];
