import React, { useTransition } from 'react'
import Navbar from '../Navbar';
import { IoIosArrowRoundForward } from 'react-icons/io';
import blob from "../../assets/blob.svg";
import HeroPng from "../../assets/hero.png";
// import {animate, motion} from "framer-motion";

export const FadeUp = (delay) => {
  return{

    initial:{
      opacity: 0,
      y: 50,
    },
    animate:{
      opacity:1,
      y: 0,
      Transition: {
        type: "spring",
        stiffness:100,
        duration: 0.5,
      }
    }
  }
}

const Hero =() =>{
    return (
    <section className='bg-light dark:bg-black overflow-hidden relative'>
        <Navbar/>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px]'>
            {/*brand info */}
        <div className='flex flex-col justify-center py-14 md:py-0 relative z-20'>
          <div className='text-center md:text-left space-y-10 lg:max-w-[400px]'>

            <h1 className='text-3xl lg:text-5xl font-bold !leading-snug'>
                let's learn to build a {" "}<span
               className="text-secondary">Website </span> for your business
                </h1>
                <div className='flex justify-center md:justify-start'>
                  <button className='primary-btn flex items-center gap-2 group'>
                    Get started
                    <IoIosArrowRoundForward className='text-xl group-hover: translate-x-2' group-hover:rotate-45 duration-300/>
                  </button>
                </div>
         </div>
        </div>
        
        {/*hero image */}
        <div className='flex justify-center items-center'>
          <img src={HeroPng} alt="" className='w-[400px] xl:w-[600px]
          relative z-10 drop-shadow'/>
          <img src={blob} alt='' 
          className='absolute -bottom-32 w-[800px] md:w-
          [1500px] z-[1] hidden md:block'/>
        </div>

    </div>
    </section>
  );
};
export default Hero;