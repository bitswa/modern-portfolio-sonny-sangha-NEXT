import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            >
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src=""
                alt=""
              />

              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0]/58">
                    Case Study {index + 1} of {projects.length}:
                  </span>
                  Netflix Clone
                </h4>

                <p className="text-lg text-center md:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                  facere laboriosam ullam sapiente id eveniet repudiandae
                  recusandae, atque magni alias maiores obcaecati dicta dolorem
                  iusto nemo vitae repellendus ad ducimus. Dignissimos,
                  temporibus? Nostrum modi repellendus iste veniam id laborum
                  reprehenderit eligendi nemo voluptate recusandae quidem iure
                  ab harum sint quae praesentium doloremque pariatur in quo a
                  dolore tempora, voluptates deleniti?
                </p>
              </div>
            </div>
          );
        })}
        <div></div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB01]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
