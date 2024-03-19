"use client";
import { delay, motion } from "framer-motion";
import Link from "next/link";
import Header from "./header";

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const children = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    delay: 1,
    transition: {
      ease: "easeIn",
      duration: 0.3,
    },
  },
};

const button = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.3,
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  },
};

export default function Hero() {
  return (
    <section className="h-screen flex flex-col md:justify-center p-10 md:p-0">
      <motion.div
        className="container flex flex-col mx-auto gap-2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          className="md:tracking-wide text-sm md:text-md font-mono text-md text-brand-500"
          variants={children}
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          className="text-4xl md:text-7xl font-bold text-gray-100"
          variants={children}
        >
          Nwike Odigwe.
        </motion.h1>
        <motion.h2
          className="text-4xl md:text-7xl text-gray-300 font-sans font-bold"
          variants={children}
        >
          I build things for the web
        </motion.h2>
        <motion.p
          className="text-sm md:text-2xl text-gray-300 md:w-2/3"
          variants={children}
        >
          I am a software engineer specializing in building (and occasionally
          desingning) exceptional digital Experiences. Currently, I am focused
          on building accessible, human-centered products
        </motion.p>
        <div>
          <Link href="mailto:nwikeodigwe@outlook.com">
            <motion.button
              className="border-[1px] border-brand-400 font-mono text-brand-400 text-sm px-8 py-3 md:px-10 md:py-4 mt-6 rounded-sm"
              variants={button}
              initial="hidden"
              animate="show"
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              Get In Touch!
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
