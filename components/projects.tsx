"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { majorProjectsData, funProjectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.10);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 max-w-[75rem] mx-auto px-4">
      <SectionHeading>My Projects</SectionHeading>
      
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Major Technical Projects</h3>
        <div>
          {majorProjectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Creative & Fun Projects</h3>
        <div>
          {funProjectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
