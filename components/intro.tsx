"use client";

import Image from "next/image";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./particle-container";
import profilePic from "@/public/saifghibli.jpg";

type MotionSpanProps = HTMLMotionProps<"span">;
type MotionH1Props = HTMLMotionProps<"h1">;
type MotionPProps = HTMLMotionProps<"p">;
type MotionDivProps = HTMLMotionProps<"div">;

const MotionSpan = motion("span") as React.FC<MotionSpanProps>;
const MotionH1 = motion("h1") as React.FC<MotionH1Props>;
const MotionP = motion("p") as React.FC<MotionPProps>;
const MotionDiv = motion("div") as React.FC<MotionDivProps>;

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4"
    >
      <ParticleContainer />
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
              src={profilePic}
              alt="Saif portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <MotionH1
        className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-white max-w-[50rem] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hey, Saif here.</span>{" "}
        <span className="font-bold">Crafting AI dreams</span> into reality —{" "}
        <span className="font-bold">one neural network</span> at a time.
      </MotionH1>

      <MotionP
        className="mb-8 px-4 text-lg text-gray-300"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        CS student by day, code artist by night. Building tomorrow's tech with today's coffee ☕
      </MotionP>

      <MotionDiv
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950 hover:text-gray-950 dark:bg-white dark:text-gray-950 dark:hover:text-gray-950"
          href="https://github.com/Saif-rathod"
          target="_blank"
        >
          GitHub <FaGithub className="opacity-70" />
        </a>

        <a
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://www.linkedin.com/in/saif-rathod/"
          target="_blank"
        >
          <span className="opacity-70">LinkedIn</span>
          <BsLinkedin className="opacity-70" />
        </a>
      </MotionDiv>
    </section>
  );
}
