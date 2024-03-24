import React from "react";
import { motion } from "@/lib/motionWrapper";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.h2
      className="text-3xl font-medium capitalize mb-8 text-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.h2>
  );
}
