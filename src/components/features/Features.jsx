import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiKalilinux } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title Title="Features" des="What I Do" />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
        {/* <Card
          title="Business Strategy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendous ad."
          
        /> */}
        <Card
          title="Web Development"
          des="I develop reponsive websites with nice ui tailored to solve me clients needs"
          icon={<AiFillAppstore />}
        />
        <Card
          title="Cyber Security"
          des="With the ever-evolving threats in the cyberSpace, I secure networked systems and everything associated with the electronic side of life."
          icon={<SiKalilinux  />}
        />
        <Card
          title="Network Technician"
          des="I collaborate with my fellow network technician to reduce system downtime that may impede business operation."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="I develop mobile applications to cater different business needs"
          icon={<FaMobile />}
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendous ad."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
