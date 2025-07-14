export interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  status: 'Completed' | 'Ongoing';
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'DoubtIt: AI Support Platform',
    description: 'DoubtIt is an intelligent developer support platform that bridges the gap between AI and human expertise. It provides a seamless experience where developers can quickly get answers to technical questions from an AI assistant, with the option to seamlessly transition to a human expert when needed.',
    imageUrl: '/projects/doubtit-placeholder.png',
    status: 'Completed',
    githubUrl: 'https://github.com/vatsaltibrewal/Doubt-It',
    liveUrl: 'https://doubt-it.vercel.app',
  },
  {
    title: 'Project Spark',
    description: 'Project Spark is our entry for the Walmart Sparkathon, designed for the "Reimagining Customer Experience with Emerging Technologies" category. It\'s a hyper-personalized, voice-first AI shopping assistant that redefines how customers discover, evaluate, and purchase products at Walmart.',
    imageUrl: '/projects/spark-placeholder.png',
    status: 'Completed',
    githubUrl: 'https://github.com/vatsaltibrewal/walmart-sparkathon',
    liveUrl: 'https://walmart-sparkathon-three.vercel.app',
  },
  {
    title: 'Crime Dapp',
    description: 'Crime Reporting Dapp aims to revolutionize crime reporting by leveraging blockchain technology to create a secure, anonymous platform where citizens can report crimes without fear of revealing their identity. Our mission is to increase crime reporting rates by removing the primary barrier - fear of retaliation or involvement.',
    imageUrl: '/projects/crime-dapp-placeholder.png',
    status: 'Completed',
    githubUrl: 'https://github.com/vatsaltibrewal/Crime-Reporting-Dapp',
  },
  {
    title: 'DigiLoom',
    description: 'DigiLoom is a decentralized platform that connects companies and individuals with a distributed network of users to complete small tasks. By leveraging cryptocurrency for secure and instant micropayments, AI for intelligent analysis, cloud storage (AWS) for data management, and blockchain for trustless and transparent transactions, DigiLoom offers an innovative solution for task management.',
    status: 'Completed',
    githubUrl: 'https://github.com/Kaushalsurana/DigiLoom',
  },
  {
    title: 'Event Management On Move',
    description: 'A decentralized event management system built on Aptos Move with integrated token rewards and NFT collections. This Contract was also used in India Blockchain Week 2024 for Event Management.',
    status: 'Completed',
    githubUrl: 'https://github.com/vatsaltibrewal/Event-Management-On-Move',
  },
  {
    title: 'SUI HashCase Package',
    description: 'Hashcase is a comprehensive NFT platform built on the Sui blockchain, offering advanced NFT minting capabilities, gasless transactions, and an integrated loyalty points system.',
    status: 'Completed',
    githubUrl: 'https://github.com/vatsaltibrewal/SUI-HashCase-Package',
  },
  {
    title: 'Cooking Anna',
    description: 'A cooking assistant that helps you find recipes based on the ingredients you have at home. It uses AI to suggest recipes and provides step-by-step cooking instructions.',
    status: 'Ongoing',
    githubUrl: 'https://github.com/vatsaltibrewal/Cooking-Anna',
  },
];