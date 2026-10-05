"use client";

import { projects } from "@/data";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

type ProjectVisualProps = {
  img: string;
  imgAlt?: string;
  title: string;
};

function ProjectVisual({ img, imgAlt, title }: ProjectVisualProps) {
  return (
    <img
      src={img}
      alt={imgAlt ?? `${title} website screenshot`}
      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
    />
  );
}

const RecentProjects = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-24 sm:py-28" id="projects">
      <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[#71d6c4]">Selected work</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Built for the real world.</h2>
        </div>
        <a
          href="https://github.com/jeffRnR?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-[#9de7d6]"
        >
          More on GitHub <FaArrowUpRightFromSquare className="text-xs" />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map(({ id, title, des, img, imgAlt, link, demo }, index) => {
          const featured = index === 0;

          return (
            <motion.article
              key={id}
              className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#090d14] transition-colors duration-500 hover:border-[#71d6c4]/30 ${featured ? "sm:col-span-2 sm:grid sm:grid-cols-[1.08fr_0.92fr]" : ""}`}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.65, delay: index % 2 === 0 ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`relative isolate aspect-[1.55] overflow-hidden bg-[#10181c] ${featured ? "sm:aspect-auto sm:min-h-[21rem]" : ""}`}>
                <ProjectVisual img={img} imgAlt={imgAlt} title={title} />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#090d14]/55 to-transparent sm:hidden" />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">{des}</p>
                </div>

                <div className="mt-6 flex items-center gap-5 border-t border-white/[0.08] pt-4">
                  <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-white/70 transition-colors hover:text-[#9de7d6]">
                    <FaGithub className="text-sm" /> Source
                  </a>
                  {demo && (
                    <a href={demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-[#9de7d6] transition-colors hover:text-white">
                      Live project <FaArrowUpRightFromSquare className="text-[10px]" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentProjects;