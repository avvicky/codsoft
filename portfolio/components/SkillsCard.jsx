"use client";

import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import { useEffect } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoJavascript,
} from "react-icons/bi";
import {
  FaAws,
  FaDocker,
  FaNode,
  FaNpm,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";

const SkillsCard = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div id="skills" className="skills-section">
      <div className="skills-image" data-aos="fade-right" data-aos-once={true}>
        <Image
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="skills-image"
          src="/assets/skills-section.jpg"
        />
      </div>
      <div className="skills-text" data-aos="fade-left" data-aos-once={true}>
        <div className="skills">
          <h1 className="skills-head">What I do?</h1>
          <p className="skills-second-head">
            Crazy Full Stack Developer who want's to explore Every Tech Stack
          </p>
          <div className="skills-icons">
            <AiFillHtml5 className="skills-icon" size="50px" color="#919191" />
            <BiLogoCss3 className="skills-icon" size="50px" color="#919191" />
            <BiLogoTailwindCss
              className="skills-icon"
              size="50px"
              color="#919191"
            />
            <BiLogoJavascript
              className="skills-icon"
              size="50px"
              color="#919191"
            />
            <FaReact className="skills-icon" size="50px" color="#919191" />
            <FaNode className="skills-icon" size="50px" color="#919191" />
            <FaNpm className="skills-icon" size="50px" color="#919191" />
            <FaAws className="skills-icon" size="50px" color="#919191" />
            <FaPython className="skills-icon" size="50px" color="#919191" />
            <FaDocker className="skills-icon" size="50px" color="#919191" />
          </div>
          <ul>
            <li>
              <BsFillLightningChargeFill color="#fac32a" /> Develop highly
              interactive Front end / User Interfaces for your web
              applicatiions.
            </li>
            <li>
              <BsFillLightningChargeFill color="#fac32a" /> Integration of third
              partyy services such as Firebase / AWS.
            </li>
            <li>
              <BsFillLightningChargeFill color="#fac32a" /> Proficient in
              developing robust and scalable backend solution using modern
              technologies and framework.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
