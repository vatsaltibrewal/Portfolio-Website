export interface Experience {
  role: string;
  company: string;
  date: string;
  url: string;
  description: string[];
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Solidity Developer Intern',
    company: 'Avex Defy',
    date: 'Mar 2024 – May 2024',
    url: 'https://avex.id/defy',
    description: [
      'Developed and deployed 10+ Solidity smart contracts, increasing efficiency by 20%.',
      'Integrated blockchain solutions with web interfaces to elevate user experience.'
    ]
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'HashCase',
    date: 'Jan 2025 – Apr 2025',
    url: 'https://hashcase.co',
    description: [
        'Engineered Full-stack applications integrating blockchain with modern web technologies.',
        'Developed responsive UIs using React, HTML, CSS and robust back-ends with Node.js, SQL and RESTful APIs.'
    ]
  },
];

export const achievements: Achievement[] = [
    {
        title: 'Rajasthan Police Hackathon 1.0 Finalist',
        issuer: 'Rajasthan Police',
        date: 'Jan 2024',
        description: [
            'Ranked in the top 10% among over 1500 competing teams.',
            'Recognized for innovative contributions to public safety technology.'
        ]
    },
    {
        title: 'Aptos Winter School S2 Participant',
        issuer: 'Aptos India',
        date: 'Aug 2024',
        description: [
            'Got Selected for Aptos Winter School S2 at BITS Goa.',
            'Developed DoubtIt - a DevTool for Developers.',
        ]
    },
    {
        title: 'DoraHacks Hackathon Winner',
        issuer: 'Movement Labs & NPC Group',
        date: 'Apr 2025',
        description: [
            'Earned $1000+ in bounties across two separate categories.',
            'Developed an Event Management dApp and a cross-chain dApp named Telechain.'
        ]
    },
];