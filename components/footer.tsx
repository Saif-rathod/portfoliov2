"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

type MotionDivProps = HTMLMotionProps<"div"> & React.HTMLAttributes<HTMLDivElement>;
const MotionDiv = motion.div as React.FC<MotionDivProps>;

export default function Footer() {
  return (
    <footer className="w-full bg-[#111827] text-gray-400 py-6 px-4">
      <MotionDiv 
        className="max-w-6xl mx-auto flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/Saif-rathod"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/saif-rathod/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/Saif-rathod"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          © 2025 Saif Rathod. All rights reserved.
        </p>
      </MotionDiv>
    </footer>
  );
}
