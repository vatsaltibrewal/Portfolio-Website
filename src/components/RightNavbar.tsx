'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Briefcase, Star, Wrench } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { href: '/', icon: User, label: 'About' },
  { href: '/experience', icon: Briefcase, label: 'Experience' },
  { href: '/projects', icon: Star, label: 'Projects' },
  { href: '/skills', icon: Wrench, label: 'Skills' },
];

export const RightNavbar = () => {
  const pathname = usePathname();

  return (
    <>
      {/* --- Desktop Sidebar --- */}
      <aside className="hidden lg:block fixed top-1/2 right-6 transform -translate-y-1/2 z-10">
        <div className="flex flex-col items-start gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-4 w-40 px-4 py-3 rounded-lg border transition-colors ${
                  isActive
                    ? 'bg-accent text-white border-accent'
                    : 'bg-light-card dark:bg-dark-card border-light-border dark:border-dark-border hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                title={item.label}
              >
                <item.icon size={22} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </aside>

      {/* --- Mobile Bottom Navigation Bar --- */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm border-t border-light-border dark:border-dark-border z-50">
        <div className="flex justify-around items-center p-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center p-2 rounded-lg ${
                  isActive ? 'text-accent' : 'text-light-text dark:text-dark-text'
                }`}
                title={item.label}
              >
                <item.icon size={24} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
          <div className="p-2">
             <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* --- Theme Toggle for Desktop View --- */}
      <div className="hidden lg:block fixed top-6 right-6 z-20">
        <ThemeToggle />
      </div>
    </>
  );
};