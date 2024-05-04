import clsx from 'clsx';
import { CSSProperties } from 'react';

interface ContentProps {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

const GlassCard = (props: ContentProps) => {
  const { className, style, children } = props;

  return (
    <div
      className={clsx(
        className,
        'h-inherit flex flex-col grow rounded-xl bg-white/[0.03] backdrop-blur-xl ring-1 ring-inset ring-white/[0.11] shadow-lg',
      )}
      style={style}
    >
      {children}
    </div>
  );
  // h-stretch-vw flex flex-col grow rounded-xl bg-white/20 ring-1 ring-inset ring-white/[0.11] shadow-lg pt-16 px-5
  return (
    // flex h-full flex-col px-3 py-4 w-96
    <section className={clsx(className, 'flex h-full w-full flex-col')}>
      {/* className="flex flex-col grow rounded-xl bg-white/20 ring-1 ring-black/5 pt-16 px-5" */}
      <div className="h-inherit flex flex-col items-center grow rounded-xl bg-white/20 ring-1 ring-white/5 shadow-lg p-5">
        {children}
      </div>
    </section>
  );
};

export default GlassCard;
