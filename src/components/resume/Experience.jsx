import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="Innovate space - ( March 2024 - Present)"
            result="Anambra"
            
          />
          <ResumeCard
            title="Web Developer"
            subTitle="Paystride developer Team - (2023 - present)"
            result="Nigeria"
            
          />
          <ResumeCard
            title="CyberSecuriy instructor"
            subTitle="Webstack ict global - (2023 - 2024)"
            result="Anambra"
           
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="UNN Gym Center (2018 - 2021)"
            result="Enugu"
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="Classic systems info-Tech (2022 - 2023)"
            result="Ekiti"
            // des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Christ Girls' Secondary School (2022 - 2023)"
            result="Ekiti"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;