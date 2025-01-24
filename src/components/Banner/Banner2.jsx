import React from "react";
import BannerPng from "../../assets/banner.png";
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion";
function Banner2() {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
         
         {/* Banner Text */}
         <motion.div 
         initial={{opacity: 1, x: -50}}
         whileInView={{opacity: 1, x: 0}}
         className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">

          </div>
          <div className="text-center md:text-left space-4 lg:max-w-[450px]" >
            <h1 className="text-4xl font-bold !leading-snug">Join Our Community To Start Your Journey</h1>
            <p className="text-dark2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </p>
            <a href=" " className="primary-btn !mt-8">
            Join Now
            </a>
         </div>
       
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerPng}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default Banner2;
