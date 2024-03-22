import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import ScrollTracker from "@/components/scroll-tracker";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <ScrollTracker />
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
