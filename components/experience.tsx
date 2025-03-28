"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";
import { BsCalendar } from "react-icons/bs";

type MotionLiProps = HTMLMotionProps<"li"> & React.HTMLAttributes<HTMLLIElement>;
const MotionLi = motion.li as React.FC<MotionLiProps>;

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
    >
      <div>
        <SectionHeading>My Experience</SectionHeading>

        <ul className="mt-4">
          {experiencesData.map((experience, index) => (
            <MotionLi
              key={index}
              className={`relative w-full flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
              initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-[80%] md:w-[60%] bg-white dark:bg-white/10 p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-2xl">
                    {experience.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{experience.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{experience.location}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{experience.description}</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <BsCalendar />
                  <span>{experience.date}</span>
                </div>
              </div>
            </MotionLi>
          ))}
        </ul>
      </div>
    </section>
  );
}
