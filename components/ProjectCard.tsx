import Image from 'next/image';
import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { ProjectInfo } from '../types/types';

export type ProjectCardProps = {
  info: ProjectInfo;
};

export type ProjectLinkProps = {
  url: string;
  type: 'external' | 'github';
};

export type ProjectLinkInfo = {
  icon: React.ReactNode;
  text: string;
};

const PROJECT_LINK_INFO = {
  external: {
    icon: <FiExternalLink className='inline mr-1' />,
    text: 'Go to site',
  },
  github: {
    icon: <FaGithub className='inline mr-1' />,
    text: 'Check repository',
  },
} as const;

const ProjectLink = ({ url, type }: ProjectLinkProps) => {
  const { icon, text } = PROJECT_LINK_INFO[type];
  return (
    <a
      href={url}
      target='_blank'
      rel='noreferrer'
      className='rounded-md py-2 px-4 min-h-[2.25rem] w-full lg:w-auto text-center bg-[var(--color-gray-light)] dark:bg-white hover:bg-[var(--feather)] dark:hover:bg-[var(--feather)] dark:text-black hover:text-white dark:hover:text-white  transition-[background-color] dark:transition-[background-color] duration-200 ease-in'
    >
      <span className='flex items-center flex-nowrap justify-center lg:justify-start'>
        {icon} {text}
      </span>
    </a>
  );
};

const ProjectCard = (props: ProjectCardProps) => {
  const { title, description, skills, img, links } = props.info;
  return (
    <div className='border-solid border-[2px] hover:border-2 border-[var(--color-gray-light)] hover:border-[var(--marine)] bg-white dark:bg-slate-900 rounded-lg shadow-sm mb-3'>
      <section className='flex flex-col p-6'>
        <div className='flex mb-2 sm:mb-0'>
          <div className='basis-4/4 lg:basis-3/4 pr-4'>
            <h3>{title}</h3>
            <p>{description}</p>
            <p className='text-[#676c70] my-3'>
              <AiFillCaretRight className='inline' />
              {skills}
            </p>
          </div>
          <div className='hidden lg:block lg:basis-1/4 mt-4 max-h-[131px] overflow-clip rounded-md'>
            <Image
              src={img}
              width='336'
              height='131'
              alt='Project'
              placeholder='blur'
            />
          </div>
        </div>
        <footer>
          <div className='flex w-3/4 md:w-2/4 lg:w-full gap-2 items-center flex-wrap mx-auto'>
            {links.map((link) => (
              <ProjectLink url={link.url} type={link.type} key={link.url} />
            ))}
          </div>
        </footer>
      </section>
    </div>
  );
};

export default ProjectCard;
