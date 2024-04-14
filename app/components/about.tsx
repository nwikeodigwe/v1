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
    <section className="mb-28" id="about">
      <div className="container max-w-screen-sm sm:max-w-screen-lg mx-auto p-8">
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
              Hey there! I&apos;m{" "}
              <span className="font-semibold text-gray-100">Nwike Odigwe</span>,
              a passionate software engineer fueled by curiosity and creativity.
              With a solid technical education and diverse experience, I thrive
              on exploring new horizons and bringing ideas to life using various
              tech stacks.
            </p>
            <p>
              My journey into software engineering began with a simple curiosity
              about{" "}
              <span className="font-semibold text-gray-100">
                video game development
              </span>
              , leading me to delve into{" "}
              <span className="font-semibold text-gray-100">Java</span> and
              beyond. Over the years, I&apos;ve honed my skills across different
              stacks, driven by an insatiable desire to push boundaries and
              discover new possibilities.
            </p>
            <p>
              These days, my focus lies in crafting elegant and accessible
              solutions for complex systems, always with an unwavering
              commitment to user satisfaction and inclusivity. I&apos;ve had the
              privilege of contributing to the developmen of a{" "}
              <span className="font-semibold text-gray-100">
                virtual home startup , real estate ventures, and online
                education platforms{" "}
              </span>
              . I particularly enjoy the intersection of design and engineering,
              where creativity meets functionality.
            </p>
            <p>
              Beyond coding, you&apos;ll find me immersing myself in the local
              business scene, collaborating on unique web designs. When I&apos;m
              not in front of my computer, I&apos;m out bouldering,
              skateboarding, diving into a good book, or simply enjoying quality
              time with friends.
            </p>
            <p>Let&apos;s connect and create something remarkable together!</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
