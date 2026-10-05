"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false);
  const reduceMotion = useReducedMotion();
  const handleCopy = () => {
    navigator.clipboard.writeText('jeffmunyigi@gmail.com');
    setCopied(true);
  }
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      whileHover={reduceMotion ? undefined : {
        y: -6,
        scale: 1.008,
        boxShadow: "0 24px 64px -36px rgba(113, 214, 196, 0.48)",
        transition: { duration: 0.24, ease: "easeOut" },
      }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.68,
        delay: (id - 1) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "row-span-1 relative overflow-hidden rounded-xl group/bento shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute rounded-full">
          {img && (
            <motion.img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center', id === 5 && 'bento-float')}
              animate={id === 5 && !reduceMotion ? { y: [0, -8, 0] } : undefined}
              transition={id === 5 ? { duration: 5, repeat: Infinity, ease: "easeInOut" } : undefined}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={'object-cover object-center w-full h-full'}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            
          </BackgroundGradientAnimation>
        )}

        <div className={cn(
          titleClassName,
          'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10',
          id === 3 && 'justify-start'
        )}>
          <div className="font-sans font-extralight 
          text-[#c1c2d3]
          text-sm md:text-xs lg:text-base z-1000">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-1000">
            {title}
          </div>


          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="mt-auto grid w-full grid-cols-2 gap-2 pt-4 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
              {['TypeScript', 'React', 'Python', 'PHP', 'Next.js', 'AI / ML', 'Flutter', 'Fintech'].map
                ((item, index) => (
                  <motion.span
                    key={item}
                    className="bento-chip flex min-h-9 min-w-0 items-center justify-center rounded-lg border border-white/[0.06] bg-[#10132E]/90 px-2 py-2 text-center text-xs font-medium text-white/85"
                    animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
                    transition={{ duration: 3.6, delay: index * 0.11, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {item}
                  </motion.span>
                ))}
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              {copied && (
                <div aria-hidden="true" className="pointer-events-none absolute -right-1 -top-3 z-10 h-12 w-16">
                  {[
                    { color: "#71d6c4", x: -16, y: -20, rotate: -35 },
                    { color: "#d8bd84", x: 0, y: -27, rotate: 20 },
                    { color: "#cbacF9", x: 15, y: -17, rotate: 55 },
                    { color: "#f2f0e9", x: 25, y: -29, rotate: -15 },
                    { color: "#71d6c4", x: -3, y: -12, rotate: 70 },
                  ].map((particle, index) => (
                    <motion.span
                      key={index}
                      className="absolute right-1 top-8 h-2 w-1 rounded-sm"
                      style={{ backgroundColor: particle.color }}
                      initial={{ opacity: 0, x: 0, y: 0, scale: 0.4 }}
                      animate={reduceMotion ? { opacity: 0 } : {
                        opacity: [0, 1, 0],
                        x: [0, particle.x],
                        y: [0, particle.y],
                        rotate: particle.rotate,
                        scale: [0.4, 1, 0.7],
                      }}
                      transition={{ duration: 0.75, delay: index * 0.035, ease: "easeOut" }}
                    />
                  ))}
                </div>
              )}

              <MagicButton 
                title={copied ? "Email copied" : "Copy my Email"}
                icon={<IoCopyOutline/>}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          ) }
        </div>
      </div>
    </motion.div>
  );
};
