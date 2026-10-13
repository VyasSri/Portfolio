import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import {
  About,
  TechMarquee,
  Roles,
  Experience,
  Projects,
  Education,
  Skills,
  Journey,
  Personal,
} from "@/components/Sections";
import { Contact, Footer } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* Professional block */}
        <div id="professional" className="scroll-mt-16">
          <About />
          <TechMarquee />
          <Roles />
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Journey />
        </div>

        {/* Personal block */}
        <Personal />

        <Contact />
      </main>
      <Footer />
    </>
  );
}
