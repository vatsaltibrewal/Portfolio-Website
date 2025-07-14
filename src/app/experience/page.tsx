import { experiences, achievements } from '@/data/career';
import { Briefcase, Trophy } from 'lucide-react';

// A reusable component for the Experience cards
const ExperienceCard = ({ item }: { item: typeof experiences[0] }) => (
  <div className="border border-light-border dark:border-dark-border rounded-xl p-6">
    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
      <h3 className="text-xl font-semibold">{item.role}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
    </div>
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline mb-4 block">{item.company}</a>
    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
      {item.description.map((point, i) => <li key={i}>{point}</li>)}
    </ul>
  </div>
);

// A reusable component for the Achievement cards
const AchievementCard = ({ item }: { item: typeof achievements[0] }) => (
  <div className="border border-light-border dark:border-dark-border rounded-xl p-6">
    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
      <h3 className="text-xl font-semibold">{item.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
    </div>
    <p className="text-gray-600 dark:text-gray-400 mb-4">{item.issuer}</p>
    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
      {item.description.map((point, i) => <li key={i}>{point}</li>)}
    </ul>
  </div>
);


export default function ExperiencePage() {
  return (
    <div className="space-y-16">
      {/* Experience Section */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <Briefcase className="text-accent" size={32} />
          <h2 className="text-3xl font-bold">Work Experience</h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} item={exp} />
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <Trophy className="text-accent" size={32} />
          <h2 className="text-3xl font-bold">Achievements</h2>
        </div>
        <div className="space-y-8">
          {achievements.map((ach, index) => (
            <AchievementCard key={index} item={ach} />
          ))}
        </div>
      </section>
    </div>
  );
}