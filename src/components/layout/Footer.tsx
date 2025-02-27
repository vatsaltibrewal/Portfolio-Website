// src/components/layout/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Vatsal Tibrewal</h3>
            <p className="text-sm text-foreground/70 max-w-xs">
              A passionate full stack developer focused on creating intuitive, performant web applications.
            </p>
          </div>
          
          {/* Column 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-sm hover:text-blue-500 transition-colors">Home</Link>
              <Link href="/about" className="text-sm hover:text-blue-500 transition-colors">About</Link>
              <Link href="/projects" className="text-sm hover:text-blue-500 transition-colors">Projects</Link>
              <Link href="/contact" className="text-sm hover:text-blue-500 transition-colors">Contact</Link>
            </div>
          </div>
          
          {/* Column 3 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-blue-500 transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-blue-500 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-blue-500 transition-colors"
              >
                Twitter
              </a>
              <a 
                href="mailto:your-email@example.com" 
                className="text-sm hover:text-blue-500 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-black/5 dark:border-white/10 mt-6 pt-6 text-center text-sm text-foreground/60">
          <p>© {currentYear} Vatsal Tibrewal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}