import {
  SiCplusplus, SiPython, SiJavascript, SiTypescript, SiSolidity, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiDocker, SiKubernetes,
  SiVercel, SiOpenai, SiAmazon, SiGit, SiTailwindcss, SiBootstrap
} from 'react-icons/si';
import { FaJava, FaBug, FaBrain } from "react-icons/fa";
import { TbArrowsRightLeft, TbRepeat } from 'react-icons/tb';
import { BsBoxes } from 'react-icons/bs';

const SkillSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <section>
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="flex flex-wrap gap-4">{children}</div>
    </section>
);

const SkillCard = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
    <div className="flex flex-col items-center justify-center gap-2 border border-light-border dark:border-dark-border p-4 rounded-lg h-28 w-28 text-center">
        {icon}
        <p className="font-medium text-sm">{name}</p>
    </div>
);

const languages = [
    { name: 'C++', icon: <SiCplusplus size={36} /> }, { name: 'Java', icon: <FaJava size={36} /> },
    { name: 'Python', icon: <SiPython size={36} /> }, { name: 'JavaScript', icon: <SiJavascript size={36} /> },
    { name: 'TypeScript', icon: <SiTypescript size={36} /> }, { name: 'Solidity', icon: <SiSolidity size={36} /> }, 
    { name: '', icon: 
      (
        <div className="h-[36px] flex items-center justify-center">
          <span className="text-2xl font-extrabold tracking-wider">MOVE</span>
        </div>
      )
    },
];
const frameworks = [
    { name: 'React.js', icon: <SiReact size={36} /> }, { name: 'Next.js', icon: <SiNextdotjs size={36} /> },
    { name: 'Node.js', icon: <SiNodedotjs size={36} /> }, { name: 'Express', icon: <SiExpress size={36} /> },
    { name: 'Bootstrap', icon: <SiBootstrap size={36} /> }, { name: 'Tailwind', icon: <SiTailwindcss size={36} /> }
];
const databases = [
    { name: 'MongoDB', icon: <SiMongodb size={36} /> }, { name: 'MySQL', icon: <SiMysql size={36} /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={36} /> },
];
const devops = [
    { name: 'AWS', icon: <SiAmazon size={36} /> }, { name: 'Docker', icon: <SiDocker size={36} /> },
    { name: 'Kubernetes', icon: <SiKubernetes size={36} /> }, { name: 'Vercel', icon: <SiVercel size={36} /> },
];
const ai_ml = [
    { name: 'Gemini AI', icon: <FaBrain size={36} /> }, { name: 'OpenAI', icon: <SiOpenai size={36} /> },
];
const otherSkills = [
    { name: 'RESTful APIs', icon: <TbArrowsRightLeft size={36} /> },
    { name: 'Microservices', icon: <BsBoxes size={36} /> },
    { name: 'Agile', icon: <TbRepeat size={36} /> },
    { name: 'Git', icon: <SiGit size={36} /> },
    { name: 'Debugging', icon: <FaBug size={36} /> },
];

export default function SkillsPage() {
    return (
        <div className="space-y-12">
            <SkillSection title="Languages">{languages.map(skill => <SkillCard key={skill.name} {...skill} />)}</SkillSection>
            <SkillSection title="Frameworks & Libraries">{frameworks.map(skill => <SkillCard key={skill.name} {...skill} />)}</SkillSection>
            <SkillSection title="Databases">{databases.map(skill => <SkillCard key={skill.name} {...skill} />)}</SkillSection>
            <SkillSection title="Cloud & DevOps">{devops.map(skill => <SkillCard key={skill.name} {...skill} />)}</SkillSection>
            <SkillSection title="AI & ML">{ai_ml.map(skill => <SkillCard key={skill.name} {...skill} />)}</SkillSection>
            <SkillSection title="Other Skills & Concepts">{otherSkills.map(skill => <SkillCard key={skill.name} {...skill} />)}</SkillSection>
        </div>
    );
}