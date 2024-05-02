import clsx from 'clsx';
import Image from 'next/image';
import profileIMage from '@/public/profile-image.jpg';

interface AvatarProps {
  className?: string;
}

const Avatar = (props: AvatarProps) => {
  const { className } = props;

  return (
    <div className={clsx(className, 'flex flex-col items-center')}>
      <Image
        className="rounded-full relative w-[100px] h-[100px] xl:w-[150px] xl:h-[150px]"
        src={profileIMage}
        alt="Profile image"
      />
    </div>
  );
};

export default Avatar;
