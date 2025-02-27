// src/app/projects/page.tsx
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-lg text-foreground/70 mb-12 max-w-2xl">
          Explore my portfolio of web applications and development projects that showcase my skills and experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </div>
    </div>
  );
}