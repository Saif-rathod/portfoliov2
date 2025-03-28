"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111827] text-gray-400 py-6 px-4">
      <motion.div 
        className="max-w-6xl mx-auto flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/Saif-rathod"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/saif-rathod/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          © 2025 Saif Rathod
        </p>
      </motion.div>
    </footer>
  );
}
