"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CiFolderOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";

interface ProjectCardProps {
  title: string;
  description: string;
  git: string;
  link: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  git,
  link,
  tags,
}: ProjectCardProps) {
  return (
    <motion.div
      className="col-span-4 p-8 flex flex-col justify-between shadow-lg rounded-md bg-secondary-900"
      whileHover={{ y: -10 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <CiFolderOn className="text-4xl text-brand-400" />
        </div>
        <div className="flex items-center gap-2">
          <Link href={git}>
            <FiGithub className="text-xl hover:text-brand-500 transition duration-100" />
          </Link>
          {link && (
            <Link href={link}>
              <GoLinkExternal className="text-xl hover:text-brand-500 transition duration-100" />
            </Link>
          )}
        </div>
      </div>
      <div>
        <h2 className="font-bold mt-6 text-2xl">{title}</h2>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 mt-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-brand-500 text-xs font-mono border-[1px] border-brand-500 rounded-sm py-1 px-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
