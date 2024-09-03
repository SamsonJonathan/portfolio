import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Biochemistry"
            subTitle="University of Nigeria (2016 - 2021)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Bsc in Software Engineering"
            subTitle="Alx X Holberton School, CA USA (2022 - 2023)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="As - Cybersecuriy and Network Technician"
            subTitle="Cisco Networking Academy, San Francisco USA (2023 - 2024)"
            result="5.00/5"
            des="Additional skill acquired in order to widen my scope in Tech."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Cyber Security tutor"
            subTitle="Innovate Space - (April 2024 - Present)"
            result="Nigeria"
            des="I train people on the intricases of Cyber Security."
          />
          <ResumeCard
            title="Frontend Developer"
            subTitle="Paystride Inc - (Nov 2023 - present)"
            result="Nigeria"
            des="A volunteer role"
          />
          <ResumeCard
            title="Cyber Security Analyst & tutor "
            subTitle="Webstack Ict global - (Sept 2023 - Mar 2024)"
            result="Nigeria"
            des="The Anambra state economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education