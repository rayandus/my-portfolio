import { GlassCard } from '@/app/common';
import Link from 'next/link';
import { EmojiFrown } from 'react-bootstrap-icons';

const NotFound = () => {
  return (
    <section className="mb-[60px]">
      <GlassCard
        className={`h-stretch-vw p-10 h-full items-center justify-center gap-4`}
        style={{ minHeight: '738px', height: 'calc(100vh - 120px)' }}
      >
        <EmojiFrown size={40} />
        <h2 className="text-xl font-semibold">404 Not Found</h2>
        <p>Could not find the page.</p>
        <Link href="/" className="btn btn-sm">
          Go Back
        </Link>
      </GlassCard>
    </section>
  );
};

export default NotFound;
