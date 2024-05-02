import { Avatar, GlassCard, SideNavMenu } from '@/app/common';
import SocialMedia from './social-media';

export default function SideNav() {
  return (
    // flex h-full flex-col px-3 py-4 md:px-2
    // flex flex-col h-full min-w-80 isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 pt-16 px-5
    <aside className="flex h-full flex-col xl:w-96 xl:min-w-96">
      <GlassCard
        className="xl:app-h-calc-vh px-6 pt-6 xl:pt-16 xl:pb-6"
        // className="h-stretch-vw flex flex-col grow rounded-xl bg-white/20 ring-1 ring-inset ring-white/[0.11] shadow-lg pt-16 px-5"
        // style={{ minHeight: 'calc(100vh - 120px)' }}
      >
        <div className="flex flex-row gap-4 xl:flex-col">
          <Avatar className="flex-none justify-center" />
          <div className="flex flex-col flex-none items-center justify-center xl:py-4 gap-2 xl:gap-4">
            <div className="text-2xl sm:font-bold">
              Ray Anthony <strong>Andus</strong>
            </div>
            <div className="text-lg text-black opacity-75">Full Stack MERN Developer</div>
          </div>
          <SocialMedia className="flex-wrap self-end ml-auto xl:hidden" />
        </div>
        <div className="divider mb-0 xl:mt-0 xl:mb-[1rem]" />
        <div className="flex grow justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <SideNavMenu />
          <div className="hidden h-auto w-full md:block"></div>
          <SocialMedia className="hidden xl:flex" />
        </div>
      </GlassCard>
    </aside>
  );
}
