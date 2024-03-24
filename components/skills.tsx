"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import { motion } from "@/lib/motionWrapper";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (id: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * id,
    },
  }),
};

export default function Skills() {

  return (
    <section
      id="skills"
      className="max-w-[53rem] pt-2 text-center"
    >
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 hover:from-green-500 hover:to-yellow-500">
        {skillsData.map((skill) => (
          <motion.li
            className="select-none bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 "
            key={skill.id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover={{ scale: 1.05 }}
            viewport={{
              once: true,
            }}
            custom={skill.id}
          >
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
