import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

type Props = {
  socialNetwork: 'Linkedin' | 'Github' | 'Email';
  size?: 'small' | 'normal' | 'large';
};

const SocialNetworkIcon = ({ socialNetwork, size = 'normal' }: Props) => {
  const iconUrl: Record<Props['socialNetwork'], string> = {
    Linkedin: 'https://www.linkedin.com/in/liou-wang-/',
    Github: 'https://github.com/Liouch',
    Email: 'mailto:liou.wang.it@gmail.com',
  };
  const iconSize: Record<NonNullable<Props['size']>, string> = {
    small: '1rem',
    normal: '1.5rem',
    large: '2rem',
  };
  const icon: Record<Props['socialNetwork'], JSX.Element> = {
    Linkedin: <FaLinkedinIn size={iconSize[size]} />,
    Github: <FaGithub size={iconSize[size]} />,
    Email: <AiOutlineMail size={iconSize[size]} />,
  };
  return (
    <div className='flex justify-center items-center'>
      <a
        href={iconUrl[socialNetwork]}
        target='_blank'
        rel='noreferrer'
        className='rounded-full hover:border-[var(--feather)] border-2 p-3 transition-transform hover:scale-110 ease-in duration-200'
      >
        {icon[socialNetwork]}
      </a>
    </div>
  );
};

export default SocialNetworkIcon;
