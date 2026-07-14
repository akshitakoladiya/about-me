import About from "@/components/About/About";
import GradientDivider from "@/components/common/GradientDivider";
import ContactCTA from "@/components/contact/ContactCTA";
import Education from "@/components/education/Education";
import Experience from "@/components/experience/Experience";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
<>
  <Hero />
  <GradientDivider />

  <About />
  <GradientDivider />

  <Skills />
  <GradientDivider />

  <Experience />
  <GradientDivider />

  <Projects />
  <GradientDivider />

  <Education />
  <GradientDivider />
  
  <ContactCTA  />
  <GradientDivider />
</>
  );
}