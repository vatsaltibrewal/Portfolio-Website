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
    role: 'Full Stack Trainee',
    company: 'Mahindra Group',
    date: 'Mar 2025 – Present',
    url: 'https://www.mahindra.com',
    description: [
        'Built end-to-end full-stack applications with the Mahindra AI Team using FastAPI, React, PostgreSQL, and GCP to digitize manual workflows, improve traceability, and reduce turnaround time across business operations.',
        'Developed a secure AI-enabled budgeting platform for Mahindra Research Valley, Chennai to streamline vehicle and program budget planning using historical data, existing proposal workflows, and AI-assisted decision support.',
        'Built a Testbed Scheduler to allocate testbeds for component and part testing, reducing scheduling conflicts, test spillage, resource under-utilization, and avoidable testing costs through structured planning.',
        'Delivered role-based workflow interfaces, approval flows, analytics dashboards, and audit-ready backend services that enhanced security, digitalized approvals, and embedded AI support into existing enterprise processes.'
    ]
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'HashCase',
    date: 'Jan 2025 – Apr 2025',
    url: 'https://hashcase.co',
    description: [
        'Built and deployed end-to-end full-stack applications using Next.js, Express.js, SQL, and REST APIs, supporting 1,000+ concurrent users across production workflows.',
        'Delivered engagement and loyalty platforms for brand-led products, helping improve repeat participation and customer journeys for clients including Upliance AI and Mysten Labs.',
        'Engineered secure and scalable full-stack features including authentication, authorization, input validation, admin workflows, API integrations, and responsive user interfaces, improving reliability, usability, and production readiness.',
        'Provisioned and managed AWS infrastructure, configured application environments, deployed services, and handled release operations end-to-end'
    ]
  }
];

export const achievements: Achievement[] = [
  {
      title: 'ETH Global New Delhi Winner (0G Labs Track)',
      issuer: 'ETH Global',
      date: 'Sep 2025',
      description: [
          'Built Nebula-SDK, an AI agent kit for the 0G Chain enabling on-chain agents to execute blockchain transactions, issue refunds, and perform policy-governed actions under admin controls, winning $2,500 at ETHGlobal New Delhi'
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
    }
];