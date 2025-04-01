import ReactMovie from '../public/React_movie.png';
import ReactTodo from '../public/React_ToDo.png';
import NoImage from '../public/no_image.jpeg';
import Portfolio from '../public/Portfolio.png';
import SaveLinkChromeExtension from '../public/Save_Link_Chrome_Extension.png';
import { ProjectInfo } from '../types/types';

export const projectList: ProjectInfo[] = [
  {
    title: 'Save link chrome extension',
    description:
      "This Chrome extension allows users to save and remove bookmarks, storing them in a JSON file hosted on JSONBin.io. The extension does not store any data itself; instead, it uses Chrome's local storage to persist the API key and database URL for accessing JSONBin.io. I created this extension to make bookmark management seamless across different devices. By saving bookmarks to JSONBin, I can easily retrieve them on my personal website/portfolio, enabling quick access to saved links from anywhere.",
    skills: 'Javascript, Typescript, HTML, CSS, Chrome API, Rollup',
    img: SaveLinkChromeExtension,
    links: [
      {
        url: 'https://github.com/Liouch/save-link-chrome-extension',
        type: 'github',
      },
    ],
  },
  {
    title: 'Personal portfolio',
    description:
      'My personal portfolio to introduce myself and show the projects I build in my spare time to learn about new technologies.',
    skills: 'Next JS, React JS, Tailwind, Responsive design',
    img: Portfolio,
    links: [
      {
        url: 'https://liou-wang.vercel.app/',
        type: 'external',
      },
      {
        url: 'https://github.com/Liouch/personal-portfolio',
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
        url: 'https://elegant-react-movie-database.netlify.app/',
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
    title: 'Social Media App (Fullstack)',
    description:
      'Social media App built in React JS, TypeScript and GraphQL, using MongoDB for the database and Node for the server.',
    skills: 'React JS, TypeScript, React router, GraphQL, Node, MongoDB, ',
    img: NoImage,
    links: [
      {
        url: 'https://github.com/Liouch/Social-media-app',
        type: 'github',
      },
    ],
  },
];
