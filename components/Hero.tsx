import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6';
import { AiFillGithub } from 'react-icons/ai';

const Hero = () => {
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
                <Spotlight
                    className="top-28 left-80 h-[80vh] w-[vw]"
                    fill="blue"
                />
            </div>
            <div
                className="h-screen w-full dark:bg-black-100 bg-white  
                    dark:bg-grid-white/[0.015] bg-grid-black/[0.2] flex items-center 
                    justify-center absolute top-0 left-0"
            >
                <div className="absolute pointer-events-none inset-0 flex items-center 
                justify-center dark:bg-black-100 
                bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>

            </div>

            <div className="flex justify-center relative z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60-vw] flex flex-col items-center justify-center">
                    <img className="w-[14rem] h-[14rem] rounded-full border-[2px] border-[#FDF5E6] mb-10" src="self.jpg" alt="profile pic"/>
                
                    <h2 className="uppercase tracking-widest text-sm text-center text-blue-100 max-w-80">
                        Jeff Jackson Munyigi <br/> <span className='text-xs text-purple lowercase'>jeffmunyigi@gmail.com<br/>+254742422990</span>
                    </h2>

                    <TextGenerateEffect 
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        words="Welcome to my digital world, where I'll bring your Ideas to a Seamleass Digital Reality 😊"
                    />
                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                        Hello, I&apos;m Jeff Jackson, a Software Engineer based in Nairobi
                    </p>
                    <a href="#about" className='mb-4'>
                        <MagicButton
                            title="Show my work"
                            icon={<FaLocationArrow />}
                            position='right'
                        />
                    </a>
                    <a href="https://github.com/jeffRnR" className='justify-center items-center'>
                        <MagicButton
                            title="My Github"
                            icon={<AiFillGithub />}
                            position='right'
                        />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Hero