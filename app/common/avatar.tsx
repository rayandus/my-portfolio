import clsx from 'clsx';
import Image from 'next/image';
import profileIMage from '@/public/profile-image.jpg';

interface AvatarProps {
  className?: string;
}

const Avatar = (props: AvatarProps) => {
  const { className } = props;

  return (
    <div className={clsx(className, 'flex flex-col items-center w-[150px] h-[150px]')}>
      <Image className="rounded-full relative" src={profileIMage} alt="Profile image" />
    </div>
  );
};

export default Avatar;
