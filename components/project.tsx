"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { Icon } from "@iconify/react";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  icon: string;
  github: string;
  imageUrl: StaticImageData;
};

const techLogos: { [key: string]: string } = {
  "Python": "logos:python",
  "PyTorch": "logos:pytorch-icon",
  "TensorFlow": "logos:tensorflow",
  "Machine Learning": "carbon:machine-learning",
  "Deep Learning": "carbon:deep-learning",
  "Neural Networks": "carbon:neural-network",
  "Data Analysis": "carbon:data-vis-1",
  "Pandas": "logos:pandas-icon",
  "Scikit-learn": "simple-icons:scikit-learn",
  "TypeScript": "logos:typescript-icon",
  "React": "logos:react",
  "Node.js": "logos:nodejs-icon",
  "Healthcare": "healthicons:health",
  "Data Science": "carbon:data-vis-4",
  "OpenCV": "logos:opencv",
  "C": "logos:c",
  "Mathematics": "carbon:mathematics",
  "AI": "carbon:machine-learning-model",
  "Security": "carbon:security",
  "Finance": "carbon:finance",
  "Trading": "carbon:chart-line",
  "Education": "carbon:education",
  "Gaming": "carbon:game-console",
  "Computer Vision": "carbon:face-activated",
  "Travel": "carbon:airport-01"
};

export default function Project({
  title,
  description,
  tags,
  icon,
  github,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 shadow-lg hover:shadow-xl">
        <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <p className="font-bold text-gray-500 dark:text-white/70">
              Made with:{" "}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                techLogos[tag] && (
                  <Icon 
                    key={index} 
                    icon={techLogos[tag]} 
                    className="text-2xl" 
                    title={tag}
                  />
                )
              ))}
            </div>
          </div>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-4">
            {description}
          </p>
          <div className="flex mt-auto">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border border-[#111827] py-2 px-4 rounded-full mr-2 text-[#111827] hover:scale-105 dark:border-white dark:text-white dark:border-opacity-40"
            >
              <AiFillGithub className="mr-1 opacity-70" />{" "}
              <span className="opacity-70">GitHub</span>
            </a>
          </div>
        </div>

        <div className="relative w-full h-48 sm:h-auto sm:w-[28.25rem] lg:absolute lg:top-[60px] lg:-right-10">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="rounded-t-lg shadow-2xl transition lg:scale-[1.1] object-cover w-full h-full"
          />
        </div>
      </section>
    </motion.div>
  );
}
