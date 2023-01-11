import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const ICON_URL_LIST = {
  Linkedin: 'https://www.linkedin.com/in/liou-wang-/',
  Github: 'https://github.com/Liouch',
  Email: 'mailto:liou.wang.it@gmail.com',
} as const;

const ICON_SIZE = {
  small: '1rem',
  normal: '1.5rem',
  large: '2rem',
} as const;

const ICONS = {
  Linkedin: FaLinkedinIn,
  Github: FaGithub,
  Email: AiOutlineMail,
} as const;

export type SocialNetworkIconProps = {
  socialNetwork: keyof typeof ICON_URL_LIST;
  size?: keyof typeof ICON_SIZE;
};

const SocialNetworkIcon = ({
  socialNetwork,
  size = 'normal',
}: SocialNetworkIconProps) => {
  const IconComponent = ICONS[socialNetwork];

  return (
    <div className='flex justify-center items-center'>
      <a
        href={ICON_URL_LIST[socialNetwork]}
        target='_blank'
        rel='noreferrer'
        className='rounded-full hover:border-[var(--feather)] border-2 p-3 transition-transform hover:scale-110 ease-in duration-200'
      >
        <IconComponent size={ICON_SIZE[size]} />
      </a>
    </div>
  );
};

export default SocialNetworkIcon;
