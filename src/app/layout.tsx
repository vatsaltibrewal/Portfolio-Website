import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { LeftSidebar } from '@/components/LeftSidebar';
import { RightNavbar } from '@/components/RightNavbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vatsal Tibrewal | Portfolio',
  description: "Vatsal Tibrewal's Portfolio",
  icons: {
    icon: { url: '/avatar.jpg' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-light-bg dark:bg-dark-bg`}>
        <Providers>
          <LeftSidebar />
          <main className="pb-24 lg:pt-16 lg:pb-16 lg:ml-80 lg:mr-60">
            <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-6 lg:p-12">
              {children}
            </div>
          </main>
          <RightNavbar />
        </Providers>
      </body>
    </html>
  );
}