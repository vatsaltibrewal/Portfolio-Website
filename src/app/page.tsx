// src/app/page.tsx
import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <Hero />
        <Skills />
        <FeaturedProjects />
      </div>
    </>
  );
}