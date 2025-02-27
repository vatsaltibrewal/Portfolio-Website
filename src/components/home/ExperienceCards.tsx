// src/components/home/ExperienceCards.tsx
import { experiences } from '@/data/experience';

export default function ExperienceCards() {
  return (
    <section className="py-16" id="experience">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Experience</h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Professional journey
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-background border border-black/5 dark:border-white/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full"
            >
              {/* Card header */}
              <div className="bg-blue-500/10 dark:bg-blue-500/5 p-4 relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-16 h-16 bg-blue-500/10 rounded-full"></div>
                <h3 className="text-xl font-bold text-blue-500">{exp.title}</h3>
                <p className="text-foreground/70">{exp.company}</p>
              </div>
              
              {/* Card body */}
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                    {exp.year}
                  </span>
                </div>
                <p className="text-foreground/80 line-clamp-4">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}