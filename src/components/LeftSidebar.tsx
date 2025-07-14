import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';

export const LeftSidebar = () => {
  return (
    <header className="p-4 lg:fixed lg:h-screen lg:w-80 lg:p-10 lg:flex lg:flex-col lg:items-center lg:justify-center lg:z-10">
        <div className="w-full bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-6 text-center">
            <div className="mx-auto mb-4 w-32 h-32">
                <Image
                    src="/avatar.jpg"
                    alt="Vatsal Tibrewal"
                    width={128}
                    height={128}
                    className="rounded-full"
                />
            </div>
            <h1 className="text-2xl font-bold mb-2">Vatsal Tibrewal</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Full Stack | GenAI | Web3</p>
            <div className="flex justify-center gap-5 mb-6 text-xl">
                <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent" title="LinkedIn"><Linkedin /></a>
                <a href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent" title="GitHub"><Github /></a>
                <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent" title="Twitter">
                    <svg className="h-6 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </a>
                <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="hover:text-accent" title="Email"><Mail /></a>
            </div>

            <div className="border-t border-light-border dark:border-dark-border my-4"></div>

            <div className="text-center space-y-4 text-sm mb-6">
                <p className="text-gray-600 dark:text-gray-400">{process.env.NEXT_PUBLIC_EMAIL}</p>
            </div>

            <a href="/resume" target="_blank" rel="noopener noreferrer" className="w-full block bg-accent text-white py-2.5 rounded-lg hover:bg-opacity-90">View Resume</a>
        </div>
    </header>
  );
};