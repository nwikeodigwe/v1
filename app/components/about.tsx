"use client";
import { motion } from "framer-motion";

const section = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, delay: 0.5 },
  },
};
export default function About() {
  return (
    <section className="mb-28">
      <div className="container mx-auto p-10 md:p-0">
        <motion.div
          className="md:grid grid-cols-12 gap-16"
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="col-span-3">
            <h2 className="uppercase md:text-right text-xl font-bold text-brand-400 tracking-wider">
              About
            </h2>
          </div>
          <div className="col-span-9 flex flex-col gap-6 font-extralight text-gray-300 ml-8 mt-8 md:mt-0">
            <p>
              I&apos;m currently an Engineer at Upstatement building things for
              the web with some awesome people. I recently graduated from
              Northeastern University after completing three awesome six-month
              co-ops at MullenLowe U.S., Starry, and Apple Music.
            </p>
            <p>
              As a software engineer, I enjoy bridging the gap between
              engineering and design — combining my technical knowledge with my
              keen eye for design to create a beautiful product. My goal is to
              always build applications that are scalable and efficient under
              the hood while providing engaging, pixel-perfect user experiences.
            </p>
            <p>
              When I&apos;m not in front of a computer screen, I&apos;m probably
              snowboarding, cruising around on my penny board, or crossing off
              another item on my bucket list.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
