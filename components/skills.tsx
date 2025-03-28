"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const growOnHover = {
  scale: 1.1,
  transition: {
    duration: 0.2,
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[90rem] scroll-mt-28 text-center sm:mb-40 px-4 sm:px-6 md:px-8"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {skillsData.map((skill, index) => (
          <motion.li
            className="flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 aspect-square"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover={growOnHover}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-2 sm:mb-3">
              <Icon icon={skill.icon} className="text-3xl sm:text-4xl md:text-5xl" />
            </div>
            <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900 dark:text-white text-center">{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
