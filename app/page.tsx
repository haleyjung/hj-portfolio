// import About from "@/components/about";
// import Contact from "@/components/contact";
// import Experience from "@/components/experience";
import Intro from "@/components/intro";
// import Projects from "@/components/projects";
// import ScrollTracker from "@/components/scroll-tracker";
// import SectionDivider from "@/components/section-divider";

// export default function Home() {
//   return (
//     <main className="flex flex-col items-center px-4">
//       <ScrollTracker />
//       <Intro />
//       <SectionDivider />
//       <About />
//       <Projects />
//       <Experience />
//       <Contact />
//     </main>
//   );
// }

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

// Lazy load components
const About = dynamic(() => import('@/components/about'));
const Contact = dynamic(() => import('@/components/contact'));
// const Experience = dynamic(() => import('@/components/experience'));
// const Intro = dynamic(() => import('@/components/intro'));
const Projects = dynamic(() => import('@/components/projects'));
const ScrollTracker = dynamic(() => import('@/components/scroll-tracker'));
const SectionDivider = dynamic(() => import('@/components/section-divider'));

function Home() {
  // Memoize components
  const MemoizedIntro = useMemo(() => <Intro />, []);
  const MemoizedAbout = useMemo(() => <About />, []);
  const MemoizedProjects = useMemo(() => <Projects />, []);
  // const MemoizedExperience = useMemo(() => <Experience />, []);
  const MemoizedContact = useMemo(() => <Contact />, []);

  return (
    <main className="flex flex-col items-center px-4">
      <ScrollTracker />
      {MemoizedIntro}
      <SectionDivider />
      {MemoizedAbout}
      {MemoizedProjects}
      {/* {MemoizedExperience} */}
      {MemoizedContact}
    </main>
  );
}

export default Home;
