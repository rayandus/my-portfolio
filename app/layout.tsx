import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Content, SideNav } from '@/app/common';

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
        <main className="flex h-screen flex-row items-center justify-center p-10">
          {/* flex min-h-screen flex-col items-center justify-between p-24 */}
          {/* main-background flex min-h-screen flex-col md:flex-row md:overflow-hidden items-center justify-between */}
          {/* flex h-screen flex-col md:flex-row md:overflow-hidden */}
          <div className="background-image" />
          {/* fill-available-height */}
          <div className="fill-available-height w-full flex-none max-w-5xl items-center text-sm lg:flex isolate rounded-xl bg-white/0 shadow-lg ring-1 ring-inset ring-white/5 backdrop-blur-3xl">
            <SideNav />
            <Content>{children}</Content>
          </div>
        </main>
      </body>
    </html>
  );
}
