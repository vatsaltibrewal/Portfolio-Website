// src/components/home/FeaturedProjects.tsx
import Link from 'next/link';
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/data/projects';

export default function FeaturedProjects() {
  // Filter only featured projects
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <section className="py-16 md:py-24" id="featured-projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Check out some of my recent work
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
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
      
      <div className="mt-12 text-center">
        <Link 
          href="/projects" 
          className="inline-flex items-center rounded-full border border-foreground/20 px-6 py-3 font-medium hover:bg-foreground/5 transition-colors"
        >
          View All Projects
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-2"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}