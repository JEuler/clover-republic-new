import { useState } from "react";
import { motion } from "framer-motion";

export const PrivacyPolicy = () => {
  return (
    <section
      className="w-screen  flex justify-center items-center bg-customDarkBg1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-20 md:pt-20 lg:pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4" >
            <span className="inline md:hidden">Privacy Policy</span>
            <span className="hidden md:inline">Privacy Policy</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 text-left">
          Privacy policy for Windows Store Application
          <br />
          We do not collect personal information from the users who use WinGym or WinGym Lite. You enter your name at "Profile" section just for your own user experience, it is not transfered anywhere.
          <br />
          <br />
          Privacy policy for Windows Phone Application
          <br />
          We do not collect personal information from the users who use WinGym or WinGym Lite. You enter your name at "Profile" section just for your own user experience, it is not transfered anywhere.
          <br />
          <br />
          Privacy policy for Google Play WinGym and WinGym Exercises
          <br />
          We do not collect personal information from the users who use WinGym or WinGym Exercises and don't transfer it anywhere.
          <br />
          <br />
          Privacy policy for Обзыватор (Humiliator)
          <br />
          We do not collect personal information from the users who use this app, but we use the Firebase Analytics for the analytics purposes and Admob for ads.
          </div>
        </motion.div>
        <div className="relative w-screen flex justify-center ">
          <div className="custom-shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className=" bg-customDarkBg2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill custom-bg-dark1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
