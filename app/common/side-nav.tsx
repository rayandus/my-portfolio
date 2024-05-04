import { Avatar, GlassCard, SideNavMenu } from '@/app/common';
import SocialMedia from './social-media';
import { ThreeDotsVertical } from 'react-bootstrap-icons';

export default function SideNav() {
  return (
    // flex h-full flex-col px-3 py-4 md:px-2
    // flex flex-col h-full min-w-80 isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 pt-16 px-5
    <aside className="flex h-full flex-col w-96 min-w-96 xl:w-full">
      <GlassCard
        className="app-h-calc-vh xl:min-h-0 px-6 pt-16 pb-6 xl:pt-6 xl:pb-0 sm:py-2 sm:px-5 sm:rounded-none"
        // className="h-stretch-vw flex flex-col grow rounded-xl bg-white/20 ring-1 ring-inset ring-white/[0.11] shadow-lg pt-16 px-5"
        // style={{ minHeight: 'calc(100vh - 120px)' }}
      >
        <div className="flex gap-4 flex-col">
          <div className="flex flex-col xl:flex-row items-center xl:gap-4">
            <Avatar className="flex-none justify-center xl:h-[100px] xl:w-[100px] sm:h-[70px] sm:w-[70px]" />
            <div className="flex flex-col flex-none items-center justify-center py-4 gap-4 xl:gap-1">
              <div className="text-2xl">
                Ray Anthony <strong>Andus</strong>
              </div>
              <div className="text-lg text-black opacity-75">
                Full Stack MERN Developer
              </div>
            </div>
            <SocialMedia className="flex-wrap self-end ml-auto hidden gap-2 xl:flex sm:hidden" />
            <div className="hidden sm:flex ml-auto">
              <details className="dropdown dropdown-end">
                <summary className="m-1 btn btn-ghost p-0">
                  <ThreeDotsVertical size={32} />
                </summary>
                <SocialMedia
                  className="shadow bg-white menu dropdown-content z-10 rounded-xl p-6 gap-8 !text-black"
                  showTitle
                />
              </details>
            </div>
          </div>
        </div>
        <div className="divider mt-0 mb-[1rem] xl:mt-[1rem] xl:mb-0 sm:hidden" />
        <div className="flex grow justify-between space-x-2 flex-col space-y-2 sm:hidden">
          <SideNavMenu />
          <div className="h-auto w-full block"></div>
          <SocialMedia className="flex xl:hidden" />
        </div>
      </GlassCard>
    </aside>
  );
}
