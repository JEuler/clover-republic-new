import { useState } from "react";
import { motion } from "framer-motion";

import dashboard from "../assets/images/dashboard.jpg";
import trollface from "../assets/images/trollface.png";

export const Hero = () => {
  return (
    <section
      className='w-screen flex justify-center items-center bg-customDarkBg1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0'
      id='home'
    >
      <div className='w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-20 md:pt-20 lg:pt-24 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className='text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4'>
            <span className='inline md:hidden'>Clover Republic</span>
            <span className='hidden md:inline'>Clover Republic</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className='text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 '>
            Mobile apps and hustling ⭐
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className='flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center'>
            <div
              className='w-64 sm:w-52 h-12 rounded-xl font-bold text-white border border-solid  flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-customPrimary transition'
              onClick={() =>
                (window.location.href =
                  "http://windowsphone.com/s?appid=27fe54a0-c1eb-4759-a93c-109a32d2158e")
              }
            >
              Windows Phone <img style={{marginLeft: 6}} width="24" height="24" src={trollface} />
            </div>
            <div
              className='w-64 sm:w-52 h-12 rounded-xl font-bold text-white border border-solid  flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-customPrimary transition'
              onClick={() =>
                (window.location.href =
                  "https://play.google.com/store/apps/developer?id=Clover+Republic")
              }
            >
              Android
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div
            className='relative w-screen flex justify-center'
            onClick={() =>
              (window.location.href =
                "https://play.google.com/store/apps/developer?id=Clover+Republic")
            }
          >
            <img
              src={dashboard}
              alt='123'
              className='w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl custom-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0'
            />
          </div>
        </motion.div>
        <div className='relative w-screen flex justify-center '>
          <div className='custom-shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block'>
            <svg
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1200 120'
              preserveAspectRatio='none'
              className=' bg-customDarkBg2'
            >
              <path
                d='M1200 0L0 0 598.97 114.72 1200 0z'
                className='shape-fill custom-bg-dark1'
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
