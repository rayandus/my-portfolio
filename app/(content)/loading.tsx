import { GlassCard } from '@/app/common';

const Loading = () => {
  return (
    <section className="mb-[60px]">
      <GlassCard
        className={`shimmer relative w-full overflow-hidden h-stretch-vw p-10`}
        style={{ minHeight: '738px', height: 'calc(100vh - 120px)' }}
      />
    </section>
  );
};

export default Loading;
