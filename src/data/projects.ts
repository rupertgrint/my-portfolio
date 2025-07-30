import { Project } from '../../public/types/project';

export const projects: Project[] = [
  {
    id: 'portfolio-app',
    title: 'Personal Portfolio Site',
    description:
      'A responsive and minimalist portfolio site designed to showcase my background, skills, and selected projects. Built with modern web technologies, the site includes my journey into software development and a dynamic project gallery.',
    techStack: [
      'React 19',
      'TypeScript',
      'Next.js 15',
      'Tailwind CSS',
      'Vercel',
    ],
    images: ['/images/portfolio-home.png'],
    url: 'https://hyun-park.vercel.app',
  },
  {
    id: 'hongchan-app',
    title: 'Hongchan Nihongo - Japanese Learning App',
    description:
      'An interactive language learning platform that helps users study Japanese through cartoon episodes with voice, subtitles, and pop-up vocabulary. I contributed to building reusable UI components, responsive pages, user feedback forms, and admin tools for managing user data and content.',
    techStack: [
      'React 19',
      'TypeScript',
      'Next.js 15',
      'PostgreSQL',
      'Tailwind CSS',
    ],
    images: ['/images/nihongo-list.png', '/images/nihongo-vertical-menu.png'],
    url: 'https://www.hongchan-nihongo.com/en',
  },
  {
    id: 'coffee-app',
    title: 'Coffee Roastery E-commerce',
    description:
      'A responsive e-commerce site for a fictional coffee brand, featuring product categories, cart management, user authentication, and admin product upload. Integrated Firebase for real-time database and user management, and Cloudinary for image uploads.',
    techStack: [
      'React',
      'JavaScript',
      'Firebase',
      'Cloudinary',
      'Tailwind CSS',
      'Netlify',
      'TanStack Query',
    ],
    images: ['/images/coffee-home.png', '/images/coffee-spin.png'],
    url: 'https://parkcoffee.netlify.app/',
  },
  {
    id: 'youtube-app',
    title: 'YouTube Clone',
    description:
      'A simplified YouTube interface that allows users to search and watch videos using the YouTube Data API. Built dynamic routing, search functionality, and video detail pages. Emphasised component reuse and responsive design.',
    techStack: [
      'React',
      'JavaScript',
      'YouTube Data API',
      'Firebase',
      'Tailwind CSS',
    ],
    images: ['/images/youtube-clone.png'],
    url: 'https://github.com/rupertgrint/react-youtube',
  },
  {
    id: 'momentum-app',
    title: 'Momentum App',
    description:
      'A productivity and focus web app inspired by Momentum. Includes features like greeting, real-time clock, daily to-do list, weather, and quotes — all stored in localStorage. Designed for a clean user experience without backend.',
    techStack: ['React', 'HTML5', 'CSS3', 'REST APIs', 'LocalStorage'],
    images: ['/images/momentup-app.png'],
    url: 'https://github.com/rupertgrint/momentum-clone-1',
  },
];
