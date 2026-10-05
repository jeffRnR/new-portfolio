"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pb-20 pt-10">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white  
                    dark:bg-grid-white/[0.015] bg-grid-black/[0.2] flex items-center 
                    justify-center absolute top-0 left-0"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center 
                justify-center dark:bg-black-100 
                bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <motion.div
        className="flex justify-center relative z-10"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60-vw] flex flex-col items-center justify-center">
          <img
            className="mb-8 h-40 w-40 rounded-full border border-white/15 object-cover shadow-[0_0_70px_rgba(0,140,140,0.16)] ring-4 ring-[#008c8c]/10 md:h-44 md:w-44"
            src="self2.jpeg"
            alt="Jeff Jackson Munyigi"
          />

          <p className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-white-200">
            <span className="h-1.5 w-1.5 rounded-full bg-[#71d6c4] shadow-[0_0_12px_rgba(113,214,196,0.8)]" />
            Software engineer <span className="text-white/30">/</span> Nairobi, Kenya
          </p>

          {/* <TextGenerateEffect
            className="max-w-4xl text-center text-[40px] leading-[1.08] md:text-5xl lg:text-6xl"
            words="I build useful software for the people who use it."
          /> */}
          <p className="mb-7 mt-5 max-w-xl text-center text-sm leading-7 text-white-200 md:text-base">
            I&apos;m Jeff Jackson Munyigi, a product-minded engineer working across
            full-stack development, AI and fintech to turn real problems into
            thoughtful digital products.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#projects">
              <MagicButton
                title="Explore selected work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a
              href="https://github.com/jeffRnR"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Jeff's GitHub profile"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-xl text-white transition-colors duration-300 hover:border-[#71d6c4]/50 hover:text-[#71d6c4]"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
