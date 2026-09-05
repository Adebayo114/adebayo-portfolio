import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import DynaQuiz from "@/components/sections/DynaQuiz";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import ProjectArchive from "@/components/sections/ProjectArchive";
import InviteWaveShowcase from "@/components/sections/InviteWaveShowcase";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <InviteWaveShowcase />
        <DynaQuiz />
        <About />
        <Experience />
        <Skills />
        <ProjectArchive />
        <Contact />
      </main>
      
    </>
  );
}