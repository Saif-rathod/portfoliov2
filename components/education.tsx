"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import muImage from "@/public/image.png";

const MotionDiv = motion.div;
const MotionUl = motion.ul;
const MotionLi = motion.li;

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
    >
      <MotionDiv
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading>My Education</SectionHeading>

        <MotionDiv 
          className="mt-4 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
        >
          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              <MotionDiv
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="w-[120px]"
              >
                <Image 
                  src={muImage} 
                  alt="Marwadi University" 
                  width={120} 
                  height={120}
                  className="rounded-lg object-cover"
                  priority
                />
              </MotionDiv>

              <div className="space-y-2">
                <MotionDiv 
                  className="text-lg font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  Bachelor of Technology in Computer Science
                </MotionDiv>
                
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  Marwadi University (NAAC A+), Rajkot, India
                </MotionDiv>
                
                <MotionDiv 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  Expected Graduation: 2026
                </MotionDiv>
                
                <MotionDiv 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                >
                  CGPA: 8.0
                </MotionDiv>
              </div>
            </div>

            <MotionUl 
              className="list-disc pl-6 space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
            >
              <MotionLi
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.0 }}
                whileHover={{ x: 5 }}
              >
                Relevant Coursework: DSA, OS, DBMS, AI-ML, OOPs, WebDev, Data Science
              </MotionLi>
              <MotionLi
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.1 }}
                whileHover={{ x: 5 }}
              >
                Tech Lead at TECHBRIDGE community
              </MotionLi>
              <MotionLi
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.2 }}
                whileHover={{ x: 5 }}
              >
                Active participant in hackathons and coding competitions
              </MotionLi>
              <MotionLi
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.3 }}
                whileHover={{ x: 5 }}
              >
                Member of Green Club MU and involved in social outreach programs
              </MotionLi>
            </MotionUl>
          </div>
        </MotionDiv>
      </MotionDiv>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
        <div>
          <p className="text-lg font-medium">
            Higher Secondary Education
          </p>
          <p>Kendriya Vidyalaya, Porbandar, India</p>
          <p className="mt-1">Graduated: 2022</p>
        </div>
      </div>
    </section>
  );
}
