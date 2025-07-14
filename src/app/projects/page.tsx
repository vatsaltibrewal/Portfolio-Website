import Image from 'next/image';
import { Github, ExternalLink, FileCode } from 'lucide-react';
import { projects } from '@/data/projects';

const completedProjects = projects.filter(p => p.status === 'Completed');
const ongoingProjects = projects.filter(p => p.status === 'Ongoing');

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="border border-light-border dark:border-dark-border rounded-xl overflow-hidden flex flex-col">
      <div className="relative w-full aspect-square">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 dark:bg-dark-border flex items-center justify-center">
            <FileCode className="text-gray-400 dark:text-gray-500" size={64} />
          </div>
        )}
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="flex-grow text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="mt-auto flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent hover:underline"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:underline"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  return (
    <div className="space-y-16">
      {/* Completed Projects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Completed Projects</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {completedProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Ongoing Projects</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {ongoingProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}