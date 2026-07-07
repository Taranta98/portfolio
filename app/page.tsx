import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { ProjectTree } from "@/components/ProjectTree";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function Home() {
  return (
    <div className="relative">
      <DottedSurface className="opacity-100" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <ProjectTree />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
