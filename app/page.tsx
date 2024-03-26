import Intro from "@/components/intro";
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

// Lazy load components
const ScrollTracker = dynamic(() => import('@/components/scroll-tracker'));
const SectionDivider = dynamic(() => import('@/components/section-divider'));
const About = dynamic(() => import('@/components/about'));
const Projects = dynamic(() => import('@/components/projects'));
const Experience = dynamic(() => import('@/components/experience'));
const Contact = dynamic(() => import('@/components/contact'));

function Home() {
  // Memoize components
  const MemoizedIntro = useMemo(() => <Intro />, []);
  const MemoizedAbout = useMemo(() => <About />, []);
  const MemoizedProjects = useMemo(() => <Projects />, []);
  const MemoizedExperience = useMemo(() => <Experience />, []);
  const MemoizedContact = useMemo(() => <Contact />, []);

  return (
    <main className="flex flex-col items-center px-4">
      <ScrollTracker />
      {MemoizedIntro}
      <SectionDivider />
      {MemoizedAbout}
      {MemoizedProjects}
      {MemoizedExperience}
      {MemoizedContact}
    </main>
  );
}

export default Home;
