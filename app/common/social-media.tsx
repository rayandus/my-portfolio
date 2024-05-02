import Link from 'next/link';
import { socialMedia } from '@/app/data/social-media';
import clsx from 'clsx';

interface SocialMediaProps {
  className?: string;
}

const SocialMedia = (props: SocialMediaProps) => {
  const { className } = props;

  return (
    // md:flex-none md:p-2 md:px-3
    <div className={clsx(className, 'flex justify-center text-black/50 gap-4')}>
      {socialMedia.map((connect) => {
        const { displayName, link, icon: Icon } = connect;

        return (
          <Link
            key={displayName}
            className="tooltip"
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            data-tip={displayName}
          >
            <Icon size={20} />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMedia;
