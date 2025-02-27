// src/components/projects/SmartContracts.tsx
import Link from 'next/link';
import { smartContracts } from '@/data/smartContracts';

export default function SmartContracts() {
  return (
    <div className="grid grid-cols-1 gap-6">
      {smartContracts.map((contract) => (
        <div 
          key={contract.id}
          className="border border-black/5 dark:border-white/10 rounded-xl p-6 transition-all hover:shadow-md hover:shadow-blue-500/10 relative overflow-hidden group"
        >
          {/* Background decoration - animated on hover */}
          <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-blue-500/5 group-hover:bg-blue-500/10 transition-all"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
            <div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">{contract.title}</h3>
              <p className="text-foreground/70 mb-3">{contract.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {contract.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0 shrink-0">
              {contract.contractUrl && (
                <Link
                  href={contract.contractUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Contract
                </Link>
              )}
              {contract.githubUrl && (
                <Link
                  href={contract.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded-md border border-foreground/20 hover:bg-foreground/5 transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}