"use client";

import { workExperience } from "@/data";
import { motion, useReducedMotion } from "framer-motion";
import { FaBrain, FaCode, FaHeadset, FaLaptopCode } from "react-icons/fa6";

const roleIcons = [FaBrain, FaCode, FaHeadset, FaLaptopCode];
const contentMotion = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: "easeOut" } },
};

const Experience = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section className="py-20 sm:py-24" id="experience">
            <div className="mb-10">
                <p className="mb-3 text-center text-xs font-medium uppercase tracking-[0.22em] text-[#71d6c4]">
                    The path so far
                </p>
                <h2 className="heading">
                    My <span className="text-purple">work experience</span>
                </h2>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
                {workExperience.map((card, index) => {
                    const RoleIcon = roleIcons[index % roleIcons.length];

                    return (
                        <motion.article
                            key={card.id}
                            className="group relative isolate flex h-full min-h-64 flex-col overflow-hidden rounded-xl border border-white/[0.09] bg-[#090d14]/90 p-5 transition-colors duration-300 hover:border-[#71d6c4]/30 hover:bg-[#0c1219] sm:p-6 lg:p-7"
                            initial={reduceMotion ? false : "hidden"}
                            whileInView={reduceMotion ? undefined : "visible"}
                            whileHover={reduceMotion ? undefined : { y: -4 }}
                            variants={{
                                hidden: { opacity: 0, y: 24 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.58,
                                        delay: index * 0.08,
                                        ease: [0.22, 1, 0.36, 1],
                                        staggerChildren: 0.09,
                                    },
                                },
                            }}
                            viewport={{ once: true, amount: 0.18 }}
                        >
                            <div className="pointer-events-none absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#71d6c4]/80 via-[#71d6c4]/20 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                            {!reduceMotion && (
                                <motion.div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.045] to-transparent"
                                    initial={{ x: "-180%", opacity: 0 }}
                                    whileHover={{ x: "460%", opacity: [0, 1, 0] }}
                                    transition={{ duration: 0.75, ease: "easeInOut" }}
                                />
                            )}
                            <span aria-hidden="true" className="pointer-events-none absolute -right-1 -top-5 select-none text-8xl font-semibold leading-none text-white/[0.025]">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <motion.div variants={contentMotion} className="relative flex items-start gap-4">
                                <motion.div
                                    whileHover={reduceMotion ? undefined : { scale: 1.1, rotate: 7 }}
                                    transition={{ type: "spring", stiffness: 320, damping: 16 }}
                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#71d6c4]/15 bg-[#71d6c4]/[0.07] text-lg text-[#9de7d6] transition-colors duration-300 group-hover:border-[#71d6c4]/35 group-hover:bg-[#71d6c4]/[0.12]"
                                >
                                    <RoleIcon aria-hidden="true" />
                                </motion.div>
                                <div className="min-w-0 pt-0.5">
                                    <p className="mb-1 text-xs font-medium uppercase tracking-[0.16em] text-[#9de7d6]">
                                        {card.company}
                                    </p>
                                    <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                                        {card.title.trim()}
                                    </h3>
                                </div>
                            </motion.div>

                            <motion.p variants={contentMotion} className="relative mt-5 max-w-prose text-sm leading-6 text-white/60 sm:mt-6">
                                {card.desc}
                            </motion.p>

                            <motion.div variants={contentMotion} className="mt-auto flex items-center gap-2 pt-6 text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">
                                <motion.span
                                    className="h-1 w-1 rounded-full bg-[#71d6c4]/70"
                                    animate={reduceMotion ? undefined : { scale: [1, 1.5, 1], opacity: [0.65, 1, 0.65] }}
                                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.18 }}
                                />
                                {String(index + 1).padStart(2, "0")}
                            </motion.div>
                        </motion.article>
                    );
                })}
            </div>
        </section>
    );
};

export default Experience;