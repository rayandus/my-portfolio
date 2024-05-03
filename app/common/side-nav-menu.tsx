'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Briefcase,
  Diagram3,
  PersonRaisedHand,
  QuestionCircle,
  VectorPen,
} from 'react-bootstrap-icons';

const links = [
  { name: 'About Me', href: '/', icon: PersonRaisedHand },
  {
    name: 'Skills',
    href: '/skills',
    icon: VectorPen,
  },
  { name: ' Work Experience', href: '/work-experience', icon: Briefcase },
  { name: 'Projects', href: '/projects', icon: Diagram3 },
  { name: 'This Site', href: '/this-site', icon: QuestionCircle },
];

const SideNavMenu = () => {
  const pathname = usePathname();

  return (
    <ul className="menu menu-vertical xl:menu-horizontal justify-center gap-2">
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <li className="rounded-box p-0 text-lg" key={link.name}>
            <Link
              href={link.href}
              className={clsx(
                'h-[48px] flex flex-row gap-4 rounded-box active:text-white focus:text-white',
                pathname === link.href
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  : '',
              )}
            >
              <LinkIcon size={20} />
              <span>{link.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SideNavMenu;
