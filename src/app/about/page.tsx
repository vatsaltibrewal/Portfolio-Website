// src/app/about/page.tsx
import Image from 'next/image';
import { experiences } from '@/data/experience';
import { education } from '@/data/education';
import { certifications } from '@/data/certifications';
import { achievements } from '@/data/achievements';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* About Me Section */}
        <section id="about-me">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">About Me</h1>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3 space-y-4">
              <p className="text-lg">
                I&apos;m a passionate Blockchain and Full Stack Developer with expertise in Solidity, Move, and web development. With a strong foundation in smart contract development and full stack technologies, I create secure, decentralized applications that solve real-world problems.
              </p>
              <p className="text-lg">
                My focus areas include blockchain development on multiple chains including Ethereum, Aptos, and SUI. I&apos;m particularly interested in creating decentralized solutions that bridge the gap between complex blockchain technology and everyday users.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">Solidity</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">Move</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">Node.js</span>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-60 h-60 rounded-xl overflow-hidden border-4 border-blue-500/20">
                <div className="relative h-64 w-full">
                    <Image
                        src="/mainPage/img1.jpg"
                        alt="Description of image"
                        fill
                        className="object-cover"
                    />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="pt-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border border-black/5 dark:border-white/10 rounded-lg p-6 hover:bg-foreground/5 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-blue-500">{edu.institution}</p>
                    <p className="text-foreground/70 mt-2">{edu.description}</p>
                  </div>
                  <div className="shrink-0">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="pt-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative border border-black/5 dark:border-white/10 rounded-lg p-6 hover:bg-foreground/5 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Experience icon/badge */}
                  <div className="hidden md:flex md:items-start md:justify-center md:w-16">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Experience details */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-blue-500">{exp.company}</span>
                      <span className="text-foreground/50">•</span>
                      <span className="text-sm text-foreground/70">{exp.year}</span>
                    </div>
                    <p className="text-foreground/80">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="pt-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Achievements</h2>
        <div className="space-y-6">
            {achievements.map((achievement) => (
            <div 
                key={achievement.id} 
                className="border border-black/5 dark:border-white/10 rounded-lg p-6 hover:bg-foreground/5 transition-colors"
            >
                <div className="flex items-start">
                <div className="hidden md:flex md:items-start md:justify-center md:w-16">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    </div>
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-semibold">{achievement.title}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm text-foreground/70">{achievement.date}</span>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                    {achievement.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>
            ))}
        </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="pt-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="border border-black/5 dark:border-white/10 rounded-lg p-6 hover:bg-foreground/5 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                <p className="text-foreground/70 mb-3">Issued by {cert.issuer}</p>
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:underline text-sm inline-flex items-center"
                >
                  Verify Certificate
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}