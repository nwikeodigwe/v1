"use client";
import { motion } from "framer-motion";

const section = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, delay: 0.5 },
  },
};

export default function Skills() {
  return (
    <section className="my-28" id="skills">
      <div className="container mx-auto p-8 md:p-0">
        <motion.div
          className="md:grid md:grid-cols-12 gap-20"
          variants={section}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="col-span-3">
            <h2 className="uppercase md:text-right text-xl font-bold text-brand-400 tracking-wider">
              Skills
            </h2>
          </div>
          <div className="col-span-9 mt-8 md:mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ml-8 md:ml-0">
              <div className="col-span-1 flex flex-col">
                <h2 className="uppercase font-bold text-xl tracking-wide">
                  Languages
                </h2>
                <div className="text-gray-300">
                  <p>Javascript</p>
                  <p>Python</p>
                  <p>Java</p>
                  <p>PHP</p>
                  <p>C++</p>
                  <p>CSS/Sass</p>
                  <p>HTML</p>
                  <p>SQL</p>
                </div>
              </div>
              <div className="col-span-1 flex flex-col">
                <h2 className="uppercase font-bold text-xl tracking-wide">
                  Frameworks
                </h2>
                <div className="text-gray-300">
                  <p>React</p>
                  <p>Next Js</p>
                  <p>Vue</p>
                  <p>Node</p>
                  <p>Laravel</p>
                  <p>Tailwind css</p>
                  <p>Wordpress</p>
                  <p>Django</p>
                </div>
              </div>
              <div className="col-span-1 flex flex-col">
                <h2 className="uppercase font-bold text-xl tracking-wide">
                  Tools
                </h2>
                <div className="text-gray-300">
                  <p>Bash</p>
                  <p>Git & Github</p>
                  <p>Chrome DevTools</p>
                  <p>Postman</p>
                  <p>Data Grip</p>
                  <p>MongoDB</p>
                  <p>Postgres</p>
                  <p>Heroku</p>
                </div>
              </div>
              <div className="col-span-1 flex flex-col">
                <h2 className="uppercase font-bold text-xl tracking-wide">
                  Design
                </h2>
                <div className="text-gray-300">
                  <p>Photoshop</p>
                  <p>Adobe Illustrator</p>
                  <p>Sketch</p>
                  <p>Prototyping</p>
                  <p>Wireframing</p>
                  <p>InDesign</p>
                  <p>User Testing</p>
                  <p>InVision</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
