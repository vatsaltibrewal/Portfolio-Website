// src/app/about/page.tsx
import Timeline from "@/components/about/Timeline";

// Sample timeline data
const experienceData = [
  {
    year: "2022 - Present",
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    description: "Lead development of enterprise applications using React, Node.js, and AWS. Implemented CI/CD pipelines and mentored junior developers."
  },
  {
    year: "2020 - 2022",
    title: "Full Stack Developer",
    company: "Web Innovators",
    description: "Developed and maintained multiple client websites and web applications using Next.js, Express, and MongoDB."
  },
  {
    year: "2018 - 2020",
    title: "Frontend Developer",
    company: "Digital Creatives",
    description: "Created responsive interfaces using React and optimized application performance for high-traffic websites."
  },
  {
    year: "2016 - 2018",
    title: "Bachelor's Degree in Computer Science",
    company: "University of Technology",
    description: "Graduated with honors, focusing on web development and software engineering principles."
  }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <span className="text-blue-500">Your Photo</span>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Vatsal Tibrewal</h2>
            <p className="text-lg mb-4">
              I&apos;m a passionate Full Stack Developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create seamless, user-focused experiences that solve real-world problems.
            </p>
            <p className="text-lg mb-4">
              My journey in tech started with a fascination for creating things that live on the internet. Since then, I&apos;ve worked on various projects ranging from small business websites to complex enterprise applications.
            </p>
            <p className="text-lg">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
            </p>
            
            <div className="flex gap-4 mt-8">
              <a 
                href="/path-to-your-resume.pdf" 
                className="rounded-full bg-foreground text-background px-6 py-3 font-medium hover:opacity-90 transition-opacity inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Download Resume</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Experience & Education</h2>
          <Timeline items={experienceData} />
        </section>
      </div>
    </div>
  );
}