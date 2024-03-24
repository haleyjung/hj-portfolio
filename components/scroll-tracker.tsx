"use client";

import { motion, useScroll, useSpring } from "@/lib/motionWrapper";

export default function ScrollTracker() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="z-[999] fixed top-0 left-0 right-0 h-2 bg- transform origin-left bg-purple-300 dark:bg-emerald-300"
      style={{ scaleX }}
    />
  )
}