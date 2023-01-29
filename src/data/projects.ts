export interface Project {
  title: string,
  description: string,
  image: string,
  tags: string[ ],
  live: string,
  github: string,
};

export const projects: Project[ ] = [
  {
    title: 'App Chat',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quae.',
    image: '/public/appChat.png',
    tags: ['React', 'CSS3', 'Node.js', 'Express', 'PostgreSQL'],
    live: '#',
    github: '#',
  },
  {
    title: 'Spader Investigations',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quae.',
    image: '/public/appChat.png',
    tags: ['HTML5', 'SASS', 'JavaScript'],
    live: '#',
    github: '#',
  },
  {
    title: 'Stock Watch',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quae.',
    image: '/public/appChat.png',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    live: '#',
    github: '#',
  },
  {
    title: 'Example App',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quae.',
    image: '/public/appChat.png',
    tags: ['TypeScript', 'Next.js', 'SASS' ],
    live: '#',
    github: '#',
  },
];
