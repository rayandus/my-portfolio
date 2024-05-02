import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { SideNav } from '@/app/common';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: 'Ray Anthony Andus | %s',
    default: 'Portfolio',
  },
  description: "A full stack MERN developer's portfolio",
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
          <div className="background-image" />
          {/* <div className="fill-available-height w-full flex-none max-w-5xl items-center text-sm lg:flex isolate"> */}
          <div className="flex min-h-screen flex-col xl:flex-row items-start justify-center gap-4 w-full backdrop-blur-3xl p-16 xl:p-0">
            <div className="w-full xl:w-fit xl:app-sidebar">
              <SideNav />
            </div>
            <div
              /* className="flex-grow p-6 md:overflow-y-auto md:p-12" */
              className="w-full xl:app-content"
            >
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

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
