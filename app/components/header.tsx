"use client";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    href: "#about",
    title: "About",
  },
  {
    href: "#experience",
    title: "Experience",
  },
  {
    href: "#work",
    title: "Work",
  },
  {
    href: "#contact",
    title: "Contact",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, staggerDirection: 1 },
  },
};

const backdrop = {
  visible: { opacity: 1 },
  show: { opacity: 0 },
};

const menu = {
  hidden: { x: "100vw" },
  show: {
    x: 0,
    transition: { duration: 1, delay: 0.5 },
  },
};

const item = {
  hidden: { y: "-100vh" },
  show: {
    y: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
    },
  },
  whileHover: {
    y: -5,
    transition: {
      ease: "easeInOut",
    },
  },
};

const button = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  show: {
    transition: {
      delay: 0.8,
      duration: 1.5,
      type: "spring",
      mass: 0.4,
      damping: 8,
    },
    opacity: 1,
    y: 0,
  },
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      mass: 0.4,
      stiffness: 400,
      damping: 10,
    },
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <>
      <header className="py-8 font-mono text-sm static top-0 left-0">
        <div className="flex px-10 items-center justify-between">
          <div>
            <h1>Logo</h1>
          </div>
          <div>
            <HiOutlineMenuAlt1
              className="text-3xl text-brand-500 md:hidden"
              onClick={() => setIsOpen(true)}
            />
          </div>
          <div className="hidden md:flex items-center gap-12 mono">
            <motion.ul
              className="gap-12 list-decimal text-brand-500 hidden md:flex items-center"
              variants={container}
              animate="show"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={item}
                  whileHover={{ y: -5, transition: { ease: "easeInOut" } }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-brand-500 transition duration-300"
                  >
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            <motion.button
              className="border-[1px] border-brand-500 text-brand-500 px-4 py-2 rounded-sm p-3"
              variants={button}
              initial="hidden"
              animate="show"
              whileHover="hover"
            >
              Resume
            </motion.button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div className="fixed flex justify-end w-full h-full top-0 backdrop-blur-sm overflow-hidden">
            <motion.div
              className="bg-secondary-900 h-full w-[80%] flex flex-col justify-between p-10"
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.2, delay: 0.2 }}
              exit={{ x: "100vw" }}
            >
              <div className="flex justify-end">
                <motion.span
                  whileTap={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <RxCross1
                    className="text-3xl text-brand-500 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  />
                </motion.span>
              </div>
              <ul className="gap-8 list-decimal text-brand-500 flex flex-col items-center">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-brand-500 transition duration-300"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <button className="border-[1px] border-brand-500 text-brand-500 px-8 py-2 rounded-sm">
                Resume
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
