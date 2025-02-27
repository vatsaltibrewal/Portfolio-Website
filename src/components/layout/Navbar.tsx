"use client"

// src/components/layout/Navbar.tsx
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-black/5 dark:border-white/5">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Vatsal Tibrewal
        </Link>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-blue-500 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-500 transition-colors">
            About
          </Link>
          <Link href="/projects" className="hover:text-blue-500 transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-500 transition-colors">
            Contact
          </Link>
          <ThemeToggle />
        </div>
        
        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <button 
            className="p-2 rounded-md hover:bg-foreground/10" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background border-b border-black/5 dark:border-white/5 md:hidden">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
              <Link href="/" className="py-2" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="py-2" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/projects" className="py-2" onClick={() => setIsMenuOpen(false)}>
                Projects
              </Link>
              <Link href="/contact" className="py-2" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}