import SocialNetworkIcon from './SocialNetworkIcon';

export type SocialNetworkInfoProps = {
  className?: string;
};

const SocialNetworkInfo = ({ className }: SocialNetworkInfoProps) => (
  <div className={className}>
    <SocialNetworkIcon socialNetwork='Linkedin' />
    <SocialNetworkIcon socialNetwork='Github' />
    <SocialNetworkIcon socialNetwork='Email' />
  </div>
);

export default SocialNetworkInfo;
