"use client";
import { motion } from "framer-motion";
import { TfiEmail } from "react-icons/tfi";
import { TfiTwitter } from "react-icons/tfi";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiGithub } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import Link from "next/link";
const section = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, delay: 0.5 },
  },
};
export default function Footer() {
  return (
    <footer className="my-5">
      <motion.div
        className="container lg:flex max-w-screen-sm  md:max-w-screen-lg px-8 mx-auto md:items-center justify-between"
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-xl text-center font-bold">
          Developed by Nwike Odigwe. 2024
        </h2>
        <ul className="flex lg:hidden gap-4 justify-center mt-4 text-brand-500">
          <li>
            <Link href={"mailto:nwikeodigwe@outlook.com"}>
              <TfiEmail className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/nwikeodigwe" target="_blank">
              <TfiTwitter className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/nwikeodigwe"
              target="_blank"
            >
              <SlSocialLinkedin className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link href="github.com/nwikeodigwe" target="_blank">
              <SiGithub className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/nwikeodigwe" target="_blank">
              <SiInstagram className="text-2xl" />
            </Link>
          </li>
        </ul>
        <ul className="hidden lg:flex justify-center md:justify-right gap-10 tracking-wider uppercase text-blue-500 mt-5 md:mt-0">
          <motion.li whileHover={{ y: -5 }} transition={{ ease: "easeInOut" }}>
            <Link href={"mailto:nwikeodigwe@outlook.com"}>Email</Link>
          </motion.li>
          <motion.li whileHover={{ y: -5 }} transition={{ ease: "easeInOut" }}>
            <Link href={"https://twitter.com/nwikeodigwe"} target="_blank">
              Twitter
            </Link>
          </motion.li>
          <motion.li whileHover={{ y: -5 }} transition={{ ease: "easeInOut" }}>
            <Link href={"https://linkedin.com/in/nwikeodigwe"} target="_blank">
              Linkedin
            </Link>
          </motion.li>
          <motion.li whileHover={{ y: -5 }} transition={{ ease: "easeInOut" }}>
            <Link href={"https://github.com/nwikeodigwe"} target="_blank">
              Github
            </Link>
          </motion.li>
          <motion.li whileHover={{ y: -5 }} transition={{ ease: "easeInOut" }}>
            <Link href={"https://instgram.com/nwikeodigwe"} target="_blank">
              Instagram
            </Link>
          </motion.li>
        </ul>
      </motion.div>
    </footer>
  );
}
