import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { GlassCard, SideNav, SideNavMenu } from '@/app/common';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Ray Anthony Andus',
    default: 'Ray Anthony Andus',
  },
  description:
    'This is the portfolio site of Ray Anthony Andus. Ray is a full stack MERN developer.',
  icons: {
    icon: [{ rel: 'icon', url: '/profile-image.jpg' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* flex min-h-screen flex-row overflow-auto items-center justify-center */}
        <main className="main">
          <div className="background-image">
            <div className="w-full h-full backdrop-blur-3xl"></div>
          </div>
          {/* <div className="fill-available-height w-full flex-none max-w-5xl items-center text-sm lg:flex isolate"> */}
          <div className="flex flex-row xl:flex-col xl:h-full items-start justify-center gap-4 w-full xl:px-16 md:px-11 sm:px-0">
            <div className="app-sidebar xl:app-sidebar sm:app-sidebar">
              <SideNav />
            </div>
            <div className="app-content xl:app-content">{children}</div>
            <div className="hidden sm:flex fixed bottom-0 z-10 w-full">
              <GlassCard className="!rounded-none !shadow-lg-inverse">
                <SideNavMenu />
              </GlassCard>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

/* className="flex-grow p-6 md:overflow-y-auto md:p-12" */
/*
 return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main className="flex h-screen flex-row items-center justify-center p-10">
          {/* flex min-h-screen flex-col items-center justify-between p-24 /}
          {/* main-background flex min-h-screen flex-col md:flex-row md:overflow-hidden items-center justify-between /}
          {/* flex h-screen flex-col md:flex-row md:overflow-hidden /}
          <div className="background-image" />
          {/* fill-available-height /}
          <div className="fill-available-height w-full flex-none max-w-5xl items-center text-sm lg:flex isolate">
            <SideNav />
            <div className="ml-5">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
*/
/*
<div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
*/
