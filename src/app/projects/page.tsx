// src/app/projects/page.tsx
import ProjectCard from "@/components/projects/ProjectCard";
import SmartContracts from "@/components/projects/SmartContracts";
import { projects } from "@/data/projects";
import { ongoingProjects } from '@/data/ongoingProjects';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <div className="inline-block p-1 px-3 mb-4 text-sm text-blue-500 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            My Work
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects & Smart Contracts</h1>
          <p className="text-lg text-foreground/70 md:max-w-3xl">
            Explore my portfolio of blockchain applications, smart contracts, and web development
            projects showcasing expertise in Solidity, Move, and full-stack development.
          </p>
        </div>
        
        {/* Featured Projects */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
            <div className="w-12 h-1 bg-blue-500 mr-4"></div>
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </section>

        {/* Smart Contracts - with updated UI */}
        <section className="mt-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
            <div className="w-12 h-1 bg-blue-500 mr-4"></div>
            Smart Contracts
          </h2>
          
          <div className="mb-8 md:max-w-3xl">
            <p className="text-lg text-foreground/70">
              A collection of blockchain smart contracts I&apos;ve developed using Solidity, Move, and other languages.
              These contracts power various decentralized applications and platforms.
            </p>
          </div>
          
          <SmartContracts />
        </section>

        {/* Ongoing Projects */}
        <section className="mt-24">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
            <div className="w-12 h-1 bg-blue-500 mr-4"></div>
            Ongoing Projects
        </h2>
        
        <div className="mb-8 md:max-w-3xl">
            <p className="text-lg text-foreground/70">
            Current works in progress that I&apos;m actively developing.
            </p>
        </div>
        
        <div className="space-y-6">
            {ongoingProjects.map((project) => (
            <div 
                key={project.id}
                className="border border-black/5 dark:border-white/10 rounded-xl p-6 transition-all hover:shadow-md hover:border-blue-500/20 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-3 py-1">
                {project.status}
                </div>
                <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                    <span 
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                    >
                        {tech}
                    </span>
                    ))}
                </div>
                
                <div className="flex justify-between items-center">
                    <div className="text-sm text-foreground/70">
                    Expected Completion: <span className="font-medium">{project.expectedCompletion}</span>
                    </div>
                    
                    {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm px-3 py-1 rounded-md border border-foreground/20 hover:bg-foreground/5 transition-colors flex items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        GitHub
                    </a>
                    )}
                </div>
                </div>
            </div>
            ))}
        </div>
        </section>
      </div>
    </div>
  );
}