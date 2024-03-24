"use client";

import Image from "next/image";
import React from "react";
import Skills from "@/components/skills";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("👋", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-10 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.webp"
              alt="Profile image of Haley"
              width="300"
              height="300"
              quality="95"
              priority={true}
              className="pointer-events-none select-none h-45 w-45 rounded-full object-cover"
              draggable={false}
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="select-none mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I'm Haley!</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">2+ years</span> of experience. I love building{" "}
        <span className="italic">web & mobile applications</span> using{" "}
        <span className="underline">React</span>.
      </motion.h1>
      <Skills />
    </section>
  );
}
