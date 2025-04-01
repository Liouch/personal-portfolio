import { StaticImageData } from 'next/image';

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
