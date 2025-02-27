// src/components/home/Hero.tsx
//import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-8 py-16 md:py-24">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Hi, I&apos;m <span className="text-blue-500">Vatsal Tibrewal</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-foreground/80">
          Full Stack Developer
        </h2>
        <p className="text-lg max-w-2xl">
          I build modern, responsive, and accessible web applications 
          with a focus on user experience and performance.
        </p>
        <div className="flex gap-4 pt-4">
          <Link
            href="/projects"
            className="rounded-full bg-foreground text-background px-6 py-3 font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-foreground/20 px-6 py-3 font-medium hover:bg-foreground/5 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        {/* Replace with your image or an illustration */}
        <div className="rounded-full bg-blue-500/10 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
          <span className="text-blue-500 font-bold text-xl">Your Photo</span>
        </div>
      </div>
    </section>
  );
}