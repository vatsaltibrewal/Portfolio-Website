// src/app/page.tsx
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import ExperienceCards from "@/components/home/ExperienceCards";
import ProjectSlider from "@/components/home/ProjectSlider";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 pb-12">
        <Hero />
        <Skills />
        <ExperienceCards />
        <ProjectSlider />
      </div>
    </>
  );
}