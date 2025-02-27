// src/components/projects/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  projectUrl,
  githubUrl
}: ProjectCardProps) {
  return (
    <div className="border border-black/5 dark:border-white/10 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-foreground/70">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 pt-3">
          <Link
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-500 hover:underline"
          >
            View Project
          </Link>
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground/70 hover:underline"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}