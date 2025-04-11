import Image from 'next/image';
import ProfilePicture from '../public/Profile.png';

const ProfilePic = () => {
  return (
    <section className='w-36 sm:w-60 mx-auto'>
      <Image
        src={ProfilePicture}
        alt='profile picture'
        width={275}
        height={275}
        placeholder='blur'
        className='rounded-full border-solid border-4 border-[var(--feather)]'
      />
    </section>
  );
};

export default ProfilePic;
