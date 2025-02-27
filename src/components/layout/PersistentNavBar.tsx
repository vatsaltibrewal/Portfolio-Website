// src/components/layout/PersistentNavBar.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function PersistentNavBar() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center bg-background/90 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-full shadow-lg px-4 py-3">
        <nav className="flex items-center space-x-1 sm:space-x-2">
          <Link
            href="/"
            className={`px-3 py-2 rounded-full flex items-center transition-colors ${
              isActive('/') 
                ? 'bg-blue-500 text-white' 
                : 'hover:bg-foreground/5'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="ml-1 hidden sm:inline">Home</span>
          </Link>
          
          <Link
            href="/about"
            className={`px-3 py-2 rounded-full flex items-center transition-colors ${
              isActive('/about') 
                ? 'bg-blue-500 text-white' 
                : 'hover:bg-foreground/5'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span className="ml-1 hidden sm:inline">About Me</span>
          </Link>
          
          <Link
            href="/projects"
            className={`px-3 py-2 rounded-full flex items-center transition-colors ${
              isActive('/projects') 
                ? 'bg-blue-500 text-white' 
                : 'hover:bg-foreground/5'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
            </svg>
            <span className="ml-1 hidden sm:inline">Projects</span>
          </Link>
        </nav>
        
        <div className="h-6 mx-3 border-l border-black/5 dark:border-white/10"></div>
        
        {/* Connect icons */}
        <div className="flex items-center space-x-1 sm:space-x-3">
          <a
            href="https://github.com/vatsaltibrewal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          
          <a
            href="https://linkedin.com/in/vatsaltibrewal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

            <a
                href="https://x.com/_Vattyy" // Update with your actual X/Twitter handle
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
                aria-label="X (Twitter)"
                >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </a>
          
          <a
            href="mailto:tibrewalvatsal@gmail.com"
            className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
            aria-label="Email"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
          
          <div className="h-6 mx-3 border-l border-black/5 dark:border-white/10 hidden sm:block"></div>
          
          <a
            href="https://drive.google.com/file/d/1mW4xBf49J_Yip1HtCMonN7DR_Wqywchl/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex px-3 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors items-center text-sm font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Resume
          </a>
        </div>
        
        <div className="hidden sm:block h-6 mx-3 border-l border-black/5 dark:border-white/10"></div>
        
        <ThemeToggle />
      </div>
    </div>
  );
}