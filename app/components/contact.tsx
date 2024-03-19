"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const section = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, delay: 0.5 },
  },
};

export default function Contact() {
  return (
    <section className="my-28">
      <motion.div
        className="container mx-auto p-8 md:p-0"
        variants={section}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-center text-sm text-brand-400 font-mono">
            What&apos;s Next?
          </p>
          <h1 className="text-center text-4xl md:text-6xl font-bold capitalize">
            Get in touch
          </h1>
        </div>
        <div className="flex flex-col mt-4 md:w-[480px] mx-auto">
          <p className="text-xl text-gray-400 text-center">
            Have a question? Want to hire me? Want to Collaborate? or just want
            to chat? Shoot me a message.
          </p>
        </div>
        <div className="flex items-center justify-center mt-12">
          <Link href="mailto:nwikeodigwe@outlook.com">
            <motion.button
              className="border-[1px] border-brand-400 font-mono text-brand-400 text-sm px-6 py-4 rounded-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Say Hello
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
