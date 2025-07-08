import React from 'react';
import { motion } from 'framer-motion';

import AboutMe from '../components/AboutMe';
import HeroImage from '../components/HeroImage';
import Rudraksh from '../assets/rudraksh.png';
import MyStudio from '../components/MyStudio';
import MyProjectsSection from '../components/MyProjectsSection';
import Form from '../components/Form';

export default function Home() {
  return (
    <>
      <HeroImage imageUrl={Rudraksh} />

      <div className="p-4 text-2xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl lg:text-7xl mt-14 font-bold"
        >
          <span className="inline-block pl-2">Hey I'm</span>
          <span className="text-white font-bold underline decoration-primary underline-offset-4 pl-4">
            Rudraksh
          </span>
        </motion.h1>

        <div className="w-[480px] h-[0.1px] bg-white mt-20 mx-auto" />

        <div className="py-10 px-4">
          <section className="flex flex-col lg:flex-row xl:flex-row gap-6 items-stretch max-w-7xl mx-auto">
            <div className="flex-1 flex flex-col">
              <AboutMe />
            </div>

            <div className="flex-1 flex flex-col">
              <MyStudio />
            </div>
          </section>
        </div>
      </div>

      <div className="">
        <MyProjectsSection />
      </div>

      <div className="">
        <Form />
      </div>
    </>
  );
}
