"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
import { BsSun, BsMoonStars } from "react-icons/bs";
import type { SectionName } from "@/lib/types";

type MotionDivProps = HTMLMotionProps<"div"> & React.HTMLAttributes<HTMLDivElement>;
type MotionLiProps = HTMLMotionProps<"li"> & React.HTMLAttributes<HTMLLIElement>;
type MotionSpanProps = HTMLMotionProps<"span"> & React.HTMLAttributes<HTMLSpanElement>;

const MotionDiv = motion.div as React.FC<MotionDivProps>;
const MotionLi = motion.li as React.FC<MotionLiProps>;
const MotionSpan = motion.span as React.FC<MotionSpanProps>;

const links: { name: SectionName; href: string }[] = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const { ref } = useSectionInView("Home");
  const { activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick } = useActiveSectionContext();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="z-[999] relative">
      <MotionDiv
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <MotionLi
                key={link.href}
                className="relative h-3/4 flex items-center justify-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  className={`flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 ${
                    activeSection === link.name ? "text-gray-950 dark:text-gray-200" : ""
                  }`}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                  {activeSection === link.name && (
                    <MotionSpan
                      className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </MotionLi>
            ))}
            <MotionLi
              className="relative h-3/4 flex items-center justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={toggleTheme}
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
              >
                {theme === "light" ? <BsSun /> : <BsMoonStars />}
              </button>
            </MotionLi>
          </ul>
        </nav>
      </MotionDiv>
    </header>
  );
}
