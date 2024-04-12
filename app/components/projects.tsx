"use client";
import { motion } from "framer-motion";
import ProjectCard from "./project-card";
import work from "../data/work.js";

const section = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, delay: 0.5 },
  },
};
export default function Projects() {
  return (
    <section className="my-28" id="work">
      <motion.div
        className="container md:max-w-screen-lg mx-auto p-8"
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-3xl font-bold">
            Noteworthy Projects
          </h1>
          <p className="text-center text-sm text-brand-400 font-mono">
            view the archive
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 mt-20 gap-4">
          {work.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-16">
          <button className="border-[1px] border-brand-400 font-mono text-brand-400 text-sm px-6 py-4">
            Show More
          </button>
        </div>
      </motion.div>
    </section>
  );
}
