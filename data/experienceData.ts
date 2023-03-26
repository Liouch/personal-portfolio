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
    title: 'Frontend Developer',
    date: '2022/03 - Present',
    company: 'Accenture',
    location: 'Malaga',
    website: 'https://www.accenture.com/es-es',
    description: {
      summary:
        'Implement enhancement features and refactor code in existing product using React, Redux and High Order Components with Recompose. Also, provide support services in the QA team using Gigya. In charge of: ',
      tasks: [
        'Creation of new High Order components using Recompose and Reselect including tests with Jest and react-testing-library.',
        'Refactoring High-Order Components to functional components with hooks',
        'Implementing new enhancement features and solving bugs in code.',
        'Implementing a new internal custom built UI toolkit in the existing project.',
        'Creation and configuration of new applications in Gigya for the new Roche applications in the different environments.',
        'Assisting co-workers, mentoring and onboarding of new joiners',
        'Troubleshooting involving different teams (Development, API, DevOps teams)',
      ],
    },
    tags: [
      'JavaScript',
      'React',
      'TypeScript',
      'High-order components',
      'Redux',
      'Git',
      'Jest',
      'React-testing-library',
      'Jira',
      'Confluence',
      'Gitlab',
      'Scrum',
    ],
  },
  {
    id: 2,
    title: 'Frontend Developer',
    date: '2021/04 - 2022/03',
    company: 'Basenet',
    location: 'Malaga',
    website: 'https://www.basenet.com/es/',
    description: {
      summary:
        'Develop new CRM version of BaseNet (+9k users) using ReactJS with hooks, TypeScript, PrimeReact and Sass to create the User Interface and GraphQL to optimize requests between client and server. In charge of:',
      tasks: [
        'Refactoring class components to functional components.',
        'Translating UI/UX designs into code.',
        'Creating an extensive CRUD form system using Formik and Yup as validation.',
        'Creation of reusable functional components following good practices.',
        'Researching libraries that suited best the project.',
        'Code revisions from colleagues.',
      ],
    },
    tags: [
      'JavaScript',
      'React',
      'TypeScript',
      'Sass',
      'GraphQL',
      'Apollo Client',
      'Git',
      'Jira',
      'Gitlab',
      'Scrum',
    ],
  },
];
