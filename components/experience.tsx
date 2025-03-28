"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import { BsCalendar } from "react-icons/bs";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
      <SectionHeading>My experience</SectionHeading>
      <div className="relative">
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 dark:from-white/20 dark:via-white/30 dark:to-white/20 -translate-x-1/2" />
        <ul className="flex flex-col gap-8 sm:gap-12">
          {experiencesData.map((experience, index) => (
            <motion.li
              key={index}
              className={`relative w-full flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
              initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute left-1/2 top-8 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-4 border-gray-200 dark:border-gray-600 -translate-x-1/2" />
              
              <div className={`relative w-[45%] bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{experience.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium mt-1">{experience.location}</p>
                <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mt-2">{experience.description}</p>
              </div>

              <div className={`absolute ${index % 2 === 0 ? 'left-0 text-right' : 'right-0'} w-[45%] top-8 flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} text-gray-500 dark:text-gray-400 text-sm`}>
                <BsCalendar className={`${index % 2 === 0 ? 'ml-1 order-last' : 'mr-1'}`} />
                {experience.date}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
