"use client";
import { motion } from "framer-motion";
import { CiFolderOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";

export default function ProjectCard() {
  return (
    <motion.div
      className="col-span-4 p-8 flex flex-col shadow-lg rounded-md bg-secondary-900"
      whileHover={{ y: -10 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <CiFolderOn className="text-4xl text-brand-400" />
        </div>
        <div className="flex items-center gap-2">
          <FiGithub className="text-xl" />
          <GoLinkExternal className="text-xl" />
        </div>
      </div>
      <h2 className="font-bold mt-6 text-2xl">
        Integrating Algolia Search with WordPress Multisite
      </h2>
      <p className="text-gray-300 mt-2">
        Building a custom multisite compactible Wordpress plugin to build global
        search with Algolia
      </p>
    </motion.div>
  );
}
