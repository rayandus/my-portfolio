import Link from 'next/link';
import {
  EnvelopeAtFill,
  Linkedin,
  Github,
  Medium,
  Wordpress,
} from 'react-bootstrap-icons';
import { Avatar, SideNavMenu } from '@/app/common';

export default function SideNav() {
  return (
    // flex h-full flex-col px-3 py-4 md:px-2
    // flex flex-col h-full min-w-80 isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 pt-16 px-5
    <aside className="flex h-full flex-col w-96 min-w-96">
      <div className="flex flex-col grow rounded-l-xl bg-white/20 ring-1 ring-black/5 pt-16 px-5">
        <Avatar />
        <div className="flex flex-col items-center py-8 gap-4">
          <div className="text-2xl">
            Ray Anthony <strong>Andus</strong>
          </div>
          <div className="text-lg text-black opacity-75">Full Stack MERN Developer</div>
        </div>
        <div className="divider mt-0" />
        <div className="flex grow justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <SideNavMenu />
          <div className="hidden h-auto w-full grow md:block"></div>
          <div className="flex h-[48px] w-full grow justify-center text-black/50 gap-4 md:flex-none md:p-2 md:px-3">
            <Link
              href="https://www.linkedin.com/in/rayandus/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://github.com/rayandus"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://medium.com/@ray.an"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Medium size={20} />
            </Link>
            <Link
              href="https://codetella.wordpress.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Wordpress size={20} />
            </Link>
            <Link href="mailto:ray.andus@gmail.com">
              <EnvelopeAtFill size={20} />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
