'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Briefcase, Diagram3, InfoCircle, VectorPen } from 'react-bootstrap-icons';

const links = [
  { name: 'About Me', href: '/', icon: InfoCircle },
  {
    name: 'Skills',
    href: '/skills',
    icon: VectorPen,
  },
  { name: ' Work Experience', href: '/work-experience', icon: Briefcase },
  { name: 'Projects', href: '/projects', icon: Diagram3 },
];

const SideNavMenu = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <ul className="menu rounded-box p-0 text-lg" key={link.name}>
            <li>
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
          </ul>
        );
      })}
    </>
  );
};

export default SideNavMenu;
