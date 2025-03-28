"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

type MotionH1Props = HTMLMotionProps<"h1"> & React.HTMLAttributes<HTMLHeadingElement>;
type MotionPProps = HTMLMotionProps<"p"> & React.HTMLAttributes<HTMLParagraphElement>;
type MotionDivProps = HTMLMotionProps<"div"> & React.HTMLAttributes<HTMLDivElement>;

const MotionH1 = motion.h1 as React.FC<MotionH1Props>;
const MotionP = motion.p as React.FC<MotionPProps>;
const MotionDiv = motion.div as React.FC<MotionDivProps>;

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-0 scroll-mt-[100rem]"
    >
      <MotionDiv
        className="flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <MotionDiv
            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 1 }}
          />
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=80"
            alt="Saif Rathod"
            width="192"
            height="192"
            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </div>
      </MotionDiv>

      <MotionH1
        className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-white max-w-[50rem] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Saif.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 months</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </MotionH1>

      <MotionP
        className="mb-28 px-4 text-lg font-medium text-white"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <a
          className="bg-white text-black px-4 py-2 rounded-full outline-none hover:scale-110 hover:bg-gray-100 active:scale-105 transition"
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here <BsArrowRight className="inline-block" />
        </a>
        <a
          className="bg-white text-black p-4 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-100 active:scale-105 transition"
          href="/Saif_Rathod_Resume.pdf"
          download
        >
          Download CV <HiDownload className="opacity-60" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:text-gray-950 active:scale-105 transition"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none hover:scale-110 hover:text-gray-950 active:scale-105 transition"
          href="https://github.com"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </MotionP>
    </section>
  );
}
