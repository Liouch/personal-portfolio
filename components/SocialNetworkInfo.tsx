import SocialNetworkIcon from './SocialNetworkIcon';

const SocialNetworkInfo = () => (
  <div className='flex items-center justify-evenly max-w-xs sm:max-w-sm md:max-w-md mx-auto py-4 mt-10'>
    <SocialNetworkIcon socialNetwork='Linkedin' />
    <SocialNetworkIcon socialNetwork='Github' />
    <SocialNetworkIcon socialNetwork='Email' />
  </div>
);

export default SocialNetworkInfo;
