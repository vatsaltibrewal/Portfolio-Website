// src/components/about/Timeline.tsx
interface TimelineItem {
  year: string;
  title: string;
  company?: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:h-full before:w-0.5 before:bg-blue-500/30 before:left-4 md:before:left-1/2 before:-translate-x-1/2 before:z-0 pt-2 pb-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`flex flex-col md:flex-row gap-8 md:gap-0 md:items-center relative z-10 ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          {/* Timeline marker */}
          <div className="absolute top-0 left-4 md:left-1/2 h-4 w-4 rounded-full bg-blue-500 border-4 border-blue-500/20 -translate-x-1/2"></div>
          
          {/* Year marker - always in center for mobile, alternates sides for desktop */}
          <div className="flex md:w-1/2 md:justify-center md:items-center">
            <div className="ml-10 md:ml-0 md:px-6">
              <span className="inline-block rounded-full bg-blue-500 px-4 py-1.5 text-xs font-semibold text-white">
                {item.year}
              </span>
            </div>
          </div>
          
          {/* Content - takes full width for mobile, half for desktop */}
          <div className="md:w-1/2">
            <div className={`bg-background border border-black/5 dark:border-white/10 rounded-lg p-5 shadow-sm ${
              index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'
            }`}>
              <h3 className="text-lg font-bold">{item.title}</h3>
              {item.company && (
                <p className="text-sm text-foreground/70 mt-1">{item.company}</p>
              )}
              <p className="mt-2 text-sm text-foreground/80">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}