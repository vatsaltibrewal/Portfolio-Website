// src/components/home/Hero.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Content (Left side) */}
          <motion.div 
            className="flex-1 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Vatsal <span className="text-blue-500">Tibrewal</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-foreground/80">
              Blockchain & Full Stack Developer
            </h2>
            <p className="text-lg max-w-2xl mx-auto md:mx-0">
              Specialized in Solidity, Move, and web development. Building decentralized 
              applications and smart contracts for the future of the internet.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <a
                href="https://drive.google.com/file/d/17zTCRjM6xRayPaP7tE96tAdr1OiGfVEu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue-500 text-white px-6 py-3 font-medium hover:bg-blue-600 transition-colors flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Resume
              </a>
              <Link
                href="#skills"
                className="rounded-full border border-foreground/20 px-6 py-3 font-medium hover:bg-foreground/5 transition-colors"
              >
                Explore Skills
              </Link>
            </div>
          </motion.div>
          
          {/* Image (Right side) */}
          <motion.div 
            className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-blue-500/20">
              <Image
                src="/mainPage/img1.jpg" 
                alt="Vatsal Tibrewal"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
