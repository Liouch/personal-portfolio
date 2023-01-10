import { StaticImageData } from 'next/image';
import ReactMovie from '../public/React_movie.png';
import ReactTodo from '../public/React_ToDo.png';

export type ProjectInfo = {
  title: string;
  description: string;
  skills: string;
  img: StaticImageData;
  links: {
    url: string;
    type: 'external' | 'github';
  }[];
};

export const projectList: ProjectInfo[] = [
  {
    title: 'Personal portfolio',
    description:
      'My personal portfolio to introduce myself and show the projects I build in my spare time to learn about new technologies.',
    skills: 'Next JS, React JS, Tailwind, Responsive design',
    img: ReactMovie,
    links: [
      {
        url: 'https://elegant-react-movie-database.netlify.app/76600',
        type: 'external',
      },
      {
        url: 'https://github.com/Liouch/react-movie-database',
        type: 'github',
      },
    ],
  },
  {
    title: 'React Movie App',
    description:
      'React Movie project where you can check the popular movies at the moment and their information such as plot, cast, rating and more!',
    skills:
      'React JS, styled-component, React router, API Handling, TheMovieDB API, Responsive design',
    img: ReactMovie,
    links: [
      {
        url: 'https://elegant-react-movie-database.netlify.app/76600',
        type: 'external',
      },
      {
        url: 'https://github.com/Liouch/react-movie-database',
        type: 'github',
      },
    ],
  },
  {
    title: 'React RKT To Do',
    description:
      'React To-do project where you can add tasks so you don\'t forget to complete them. Once completed you can mark them as "completed".',
    skills:
      'React JS, TypeScript, Redux Tookilt, Material UI, Jsonplaceholder API, Responsive design',
    img: ReactTodo,
    links: [
      {
        url: 'https://react-rtk-todoapp.netlify.app',
        type: 'external',
      },
      {
        url: 'https://github.com/Liouch/React-RTK-TodoApp',
        type: 'github',
      },
    ],
  },
  {
    title: 'Social Media App',
    description:
      'Social media App built in React JS, TypeScript and GraphQL, using MongoDB for the database and Node for the server.',
    skills: 'React JS, TypeScript, React router, GraphQL, Node, MongoDB, ',
    img: ReactTodo,
    links: [
      {
        url: 'https://github.com/Liouch/Social-media-app',
        type: 'github',
      },
    ],
  },
];
