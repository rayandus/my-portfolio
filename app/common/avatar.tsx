import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="rounded-full"
        src="/profile-image.jpg"
        width={150}
        height={150}
        // className="hidden md:block"
        alt="Profile image"
      />
    </div>
  );
};

export default Avatar;
