"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
// import CodeSnippet from './code-snippet';
import { motion } from "@/lib/motionWrapper";
import { heartEmojis, haleyActivities } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

type ActivityKey = 'A' | 'B' | 'C' | 'D';

// type haleyActivitiesType = {
//   [key in ActivityKey]: string;
// };

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
        When I'm not coding, <br />
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
        Before moving into tech, I worked in curatorial practice, where shaping exhibitions demanded narrative thinking, financial fluency, and the ability to work fluidly across disciplines. Navigating budgets, stakeholders, and high-pressure moments taught me how to stay clear under pressure and move complex, multi-stakeholder projects forward with both empathy and precision—an approach that continues to shape how I approach engineering today.
      </p>
      {animateActivities()}
      {/* <CodeSnippet /> */}
    </motion.section>
  );
}
