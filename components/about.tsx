"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import CodeSnippet from './code-snippet';
import { motion } from "@/lib/motionWrapper";
import { heartEmojis, haleyActivities, recentLearnings } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

type ActivityKey = 'A' | 'B' | 'C' | 'D';

type haleyActivitiesType = {
  [key in ActivityKey]: string;
};

export default function About() {
  const { ref } = useSectionInView("About");
  const [activityIndex, setActivityIndex] = useState(0);
  const [heartIndex, setHeartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartIndex((prevIndex) => (prevIndex + 1) % heartEmojis.length);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivityIndex((prevIndex) => (prevIndex + 1) % Object.keys(haleyActivities).length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const loopHeartEmojis = () => {
    return <span key={heartIndex}>{heartEmojis[heartIndex]}</span>;
  }

  const animateActivities = () => {
    const activityKey = Object.keys(haleyActivities)[activityIndex] as ActivityKey;
    const activity = haleyActivities[activityKey];
    return (
      <p>
        When I'm not coding, <br/>
        I'm most likely {" "}
        <span className="font-medium text-gray-800 dark:text-pink-400">{activity}</span>
      </p>
    );
  };

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>My Story</SectionHeading>
      <p className="mb-3 ">
        After graduating with a degree in{" "}
        <span className="font-medium">Visual and Critical Studies</span> in Chicago, I delved into my passion for programming by building {" "}
        <span className="">websites for artist exhibitions</span>. After working as a full-time {" "}
        <span className="font-medium underline">Product Manager</span> {" "} and on the side as a {" "}
        <span className="font-medium underline">Web Developer</span>, I sought to expand my expertise in {" "}
        <span className="textHighlight">full-stack development</span> by enrolling in a software engineering bootcamp in 2022. {" "}
        Embarking on a new chapter as a Software Engineer at a financial services firm upon graduation, I've broadened my skills to encompass {" "}
        <span className="textHighlight">infrastructure management</span>, {" "}
        <span className="textHighlight">automation</span>, {" "}
        <span className="textHighlight">machine learning</span>, and migrating {" "}
        <span className="textHighlight">React applications to TypeScript</span>. {" "}
      </p>
      <p className="">
        I {loopHeartEmojis()} the {" "}
          <span className="textHighlight">creative problem-solving</span> {" "} and {" "}
          <span className="textHighlight">continuous learning</span> {" "} of programming, and the {" "}
          <span className="textHighlight">autonomy</span> {" "} to build what I imagine. I'm always looking to learn new technologies and apply them to fun projects. Recently, I've picked up {" "}
          <span className="font-medium">{recentLearnings[0]}</span> and {" "}
          <span className="font-medium">{recentLearnings[1]}</span>.
      </p>
      {animateActivities()}
      <CodeSnippet />
    </motion.section>
  );
}
