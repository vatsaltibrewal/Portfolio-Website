// src/components/home/Skills.tsx
import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <section className="py-16 md:py-24" id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          These are the technologies and tools I use to bring ideas to life
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((category) => (
          <div 
            key={category.category} 
            className="border border-black/5 dark:border-white/10 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-500">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-foreground/5 border border-black/5 dark:border-white/10 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}