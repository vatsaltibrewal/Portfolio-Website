import {
  SiCplusplus, SiPython, SiJavascript, SiTypescript, SiSolidity, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiDocker, SiGoogle, SiAmazon, SiGit, SiTailwindcss, SiSocketdotio, SiWebrtc, SiFastapi, SiDjango
} from 'react-icons/si';
import { FaBug, FaKey } from "react-icons/fa";
import { TbArrowsRightLeft } from 'react-icons/tb';
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
    { name: 'C++', icon: <SiCplusplus size={36} /> },
    { name: 'Python', icon: <SiPython size={36} /> }, { name: 'JavaScript', icon: <SiJavascript size={36} /> },
    { name: 'TypeScript', icon: <SiTypescript size={36} /> }, { name: 'Solidity', icon: <SiSolidity size={36} /> }, 
];
const frameworks = [
    { name: 'FastAPI', icon: <SiFastapi size={36} /> }, { name: 'Django', icon: <SiDjango size={36} /> },
    { name: 'React.js', icon: <SiReact size={36} /> }, { name: 'Next.js', icon: <SiNextdotjs size={36} /> },
    { name: 'Node.js', icon: <SiNodedotjs size={36} /> }, { name: 'Express', icon: <SiExpress size={36} /> },
    { name: 'WebRTC', icon: <SiWebrtc size={36} /> }, { name: 'WebSockets', icon: <SiSocketdotio size={36} /> },
    { name: 'Tailwind', icon: <SiTailwindcss size={36} /> }
];
const databases = [
    { name: 'MongoDB', icon: <SiMongodb size={36} /> }, { name: 'MySQL', icon: <SiMysql size={36} /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={36} /> },
];
const devops = [
    { name: 'AWS', icon: <SiAmazon size={36} /> }, { name: 'GCP', icon: <SiGoogle size={36} /> },
    { name: 'Docker', icon: <SiDocker size={36} /> },
];
const otherSkills = [
    { name: 'RESTful APIs', icon: <TbArrowsRightLeft size={36} /> },
    { name: 'Microservices', icon: <BsBoxes size={36} /> },
    { name: 'OAuth', icon: <FaKey size={36} /> },
    { name: 'Git', icon: <SiGit size={36} /> },
    { name: 'Debugging', icon: <FaBug size={36} /> },
];

export default function SkillsPage() {
    return (
        <div className="space-y-12">
            <SkillSection title="Languages">{languages.map(skill => <SkillCard key={skill.name} {...skill} />)}</SkillSection>
            <SkillSection title="Frameworks, Libraries & Protocols">{frameworks.map(skill => <SkillCard key={skill.name} {...skill} />)}</SkillSection>
            <SkillSection title="Databases">{databases.map(skill => <SkillCard key={skill.name} {...skill} />)}</SkillSection>
            <SkillSection title="Cloud & DevOps">{devops.map(skill => <SkillCard key={skill.name} {...skill} />)}</SkillSection>
            <SkillSection title="Other Skills & Concepts">{otherSkills.map(skill => <SkillCard key={skill.name} {...skill} />)}</SkillSection>
        </div>
    );
}