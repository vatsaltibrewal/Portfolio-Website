export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section id="about">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="border border-light-border dark:border-dark-border rounded-xl p-8">
          <p className="text-base md:text-lg leading-relaxed">
            I am a passionate Full Stack Developer with Experience in Cloud Engineering and Web3. I am also an AWS Certified Cloud Practitioner and I thrive on building innovative solutions that enhance user experiences and drive business value. My expertise spans across various programming languages, frameworks, and tools, enabling me to tackle complex challenges in software development.
          </p>
        </div>
      </section>

      <section id="what-i-do">
        <h2 className="text-3xl font-bold mb-6">What I Do</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: Full-Stack Development */}
          <div className="border border-light-border dark:border-dark-border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-accent mb-2">Full-Stack Development</h3>
            <p>I build robust and responsive web applications, developing UIs with React, and engineering powerful back-ends with Node.js, Express, FastAPI, MongoDB, and SQL.</p>
          </div>
          {/* Card 2: Backend and Cloud Infrastructure */}
          <div className="border border-light-border dark:border-dark-border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-accent mb-2">Backend and Cloud Infrastructure</h3>
            <p>I design and manage scalable backend systems and cloud infrastructure, leveraging AWS services and best practices to ensure high availability, security, and performance.</p>
          </div>
          {/* Card 3: Blockchain */}
          <div className="border border-light-border dark:border-dark-border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-accent mb-2">Web3</h3>
            <p>I develop and deploy secure and efficient Solidity and Move smart contracts, increasing process efficiency and integrating blockchain solutions with user-friendly web interfaces.</p>
          </div>
        </div>
      </section>

      <section id="education" className="space-y-8">
        <h2 className="text-3xl font-bold text-center sm:text-left">Education</h2>

        <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-8">
          <h3 className="text-xl font-semibold">B.Tech in Computer Science & Engineering</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Bennett University (2022 - 2026)</p>
          <p className="font-medium">CGPA: 8.66/10.0</p>
          <p className="mt-4 text-sm">
            <span className="font-semibold">Relevant Coursework:</span> Data Structures, Algorithms, Operating Systems, DBMS, Computer Networks, Cloud Computing, Blockchain
          </p>
        </div>
      </section>
      <section id="certifications" className="space-y-8">
        <h2 className="text-3xl font-bold text-center sm:text-left">Certifications</h2>

        <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-8">
          <h3 className="text-xl font-semibold">AWS Certified Cloud Practitioner</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Amazon Web Services (2025)</p>
          <p className="mt-4 text-sm">
            Validates knowledge of AWS Cloud concepts, core services, security, architecture, pricing, and support.
          </p>
        </div>
      </section>
    </div>
  );
}


