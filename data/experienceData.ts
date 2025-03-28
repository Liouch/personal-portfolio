export type ExperienceInfo = {
  id: number;
  title: string;
  date: string;
  company: string;
  location: string;
  website: string;
  description: {
    summary: string;
    tasks: string[];
  };
  tags: string[];
};

export const experienceList: ExperienceInfo[] = [
  {
    id: 1,
    title: 'Lead Frontend Developer (React & Typescript)',
    date: '2023/12 - Present',
    company: 'Spazious',
    location: 'Remote, Spain',
    website: 'https://spazious.com/',
    description: {
      summary:
        'Leading frontend development efforts, optimizing performance, and maintaining scalable UI components for Booking & Backoffice projects.',
      tasks: [
        'Refactored 15% of the codebase, improving performance and reducing technical debt.',
        'Designed and implemented a design system using Storybook, ensuring UI consistency.',
        'Integrated Sentry for error tracking & performance monitoring, enhancing system reliability.',
        'Applied clean code principles & separation of concerns for a modular and maintainable codebase.',
        'Collaborated closely with product & design teams to develop reusable UI components.',
        'Mentored junior developers, fostering a learning environment.',
        'Played a key role in launching the MVP of the Dollhouse monorepo project, a 3D event visualization tool, and securing a profitable contract with clients.',
      ],
    },
    tags: [
      'JavaScript',
      'React',
      'TypeScript',
      'Storybook',
      'Sentry',
      'UI Design',
      'Clean Code',
      '3D Visualization',
      'Monorepo',
      'Zustand',
      'React Query',
      'TailwindCSS',
      'Styled-components',
      'Bootstrap',
      'Ava',
      'Vite',
      'Yarn',
      'CommitLint',
      'Eslint',
      'Prettier',
    ],
  },
  {
    id: 2,
    title: 'Lead Frontend Developer',
    date: '2023/04 - 2023/12',
    company: 'Accenture',
    location: 'Remote, Spain',
    website: 'https://www.accenture.com/es-es',
    description: {
      summary:
        'Led a frontend team, managing releases and code reviews for a high-traffic e-commerce platform.',
      tasks: [
        'Led a team of 3 developers, overseeing releases, code reviews, and deployment cycles.',
        'Integrated third-party libraries for A/B testing, SEO, and payment risk management.',
        'Resolved critical bugs and improved Google Analytics tracking, UI styles, and performance.',
        'Implemented atomic design principles for scalable, reusable components.',
        'Worked closely with designers and product managers to enhance user experience.',
      ],
    },
    tags: [
      'JavaScript',
      'Vue',
      'Vuex',
      'SEO',
      'A/B Testing',
      'Google Analytics',
      'Atomic Design',
      'Third-party implementations',
      'CSS',
      'Sass',
    ],
  },
  {
    id: 3,
    title: 'Frontend Developer (React & Typescript)',
    date: '2022/03 - 2023/04',
    company: 'Accenture',
    location: 'Remote, Spain',
    website: 'https://www.accenture.com/es-es',
    description: {
      summary:
        'Enhanced UX and performance by developing features, resolving bugs, and optimizing a doctor-patient platform.',
      tasks: [
        'Developed new features, resolved critical bugs, and improved accessibility & responsiveness.',
        'Developed a custom UI toolkit to standardize the design system.',
        'Built reusable High Order Components with Recompose and Reselect.',
        'Implemented tests using Jest and React Testing Library.',
        'Mentored junior developers and collaborated with cross-functional teams.',
      ],
    },
    tags: [
      'JavaScript',
      'React',
      'TypeScript',
      'Recompose',
      'High-order components',
      'Redux',
      'Git',
      'Jest',
      'React Testing Library',
      'UI Toolkit',
      'Jira',
      'Confluence',
      'Gitlab',
      'Scrum',
    ],
  },
  {
    id: 4,
    title: 'Frontend Developer (React & Typescript)',
    date: '2021/04 - 2022/03',
    company: 'Basenet',
    location: 'Malaga, Spain',
    website: 'https://www.basenet.com/es/',
    description: {
      summary:
        'Developed the new CRM version for BaseNet (+9k users) using React, TypeScript, and GraphQL.',
      tasks: [
        'Refactored a component library (20+ components) from class components to functional components.',
        'Translated UI/UX mockups into code.',
        'Created an extensive CRUD form system using Formik and Yup.',
        'Developed reusable functional components.',
        'Researched and selected appropriate libraries for the project.',
        'Reviewed code from peers.',
      ],
    },
    tags: [
      'JavaScript',
      'React',
      'TypeScript',
      'Sass',
      'GraphQL',
      'Formik',
      'Yup',
      'Apollo Client',
      'Git',
      'Jira',
      'Gitlab',
      'Scrum',
    ],
  },
];
