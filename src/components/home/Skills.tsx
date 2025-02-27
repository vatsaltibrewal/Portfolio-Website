// src/components/home/Skills.tsx
import { skills } from '@/data/skills';

export default function Skills() {
  // Take only the first 5 skill categories (or all if less than 5)
  const displayedSkills = skills.slice(0, 5);
  
  return (
    <section className="py-16" id="skills">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          These are the technologies and tools I use to bring ideas to life
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {displayedSkills.slice(0, 3).map((category) => (
            <div 
              key={category.category} 
              className="border border-black/5 dark:border-white/10 rounded-lg p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-500/30"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-500">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Second row: 2 cards centered */}
        {displayedSkills.length > 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {displayedSkills.slice(3, 5).map((category) => (
              <div 
                key={category.category} 
                className="border border-black/5 dark:border-white/10 rounded-lg p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-500/30"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-500">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}