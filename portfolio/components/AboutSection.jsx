"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <div id="about" className="about-section">
      <div className="about-text">
        <div className="about">
          <h1>
            Hi all I'm Vignesh{" "}
            <span className="inline-image">
              <Image
                alt="hi"
                height={45}
                width={45}
                src="/assets/hi-gesture.png"
              />
            </span>{" "}
          </h1>
          <p>
            A Passionate UI and Software developer with a keen interest in
            solving problems, to optimize web applications. Having an experiance
            of nuilding Web applications with JavaScript / Reactjs / Nodejs and
            some other libraries and frameworks
          </p>
          <div className="social-icons">
            <a href="https://github.com/avvicky" target="__blank">
              <Image
                className="social-icon"
                alt="socials"
                height={40}
                width={40}
                src="/assets/github.png"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/vignesh-mernstack/"
              target="__blank"
            >
              <Image
                className="social-icon"
                alt="socials"
                height={40}
                width={40}
                src="/assets/linkedin.png"
              />
            </a>
            <a href="https://twitter.com/Vignesh_armugam" target="__blank">
              <Image
                className="social-icon"
                alt="socials"
                height={40}
                width={40}
                src="/assets/twitter.png"
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100086656013042"
              target="__blank"
            >
              <Image
                className="social-icon"
                alt="socials"
                height={40}
                width={40}
                src="/assets/facebook.png"
              />
            </a>
          </div>
          <div className="about-section-btns">
            <a className="about-section-btn" href="#contact">
              Contact Me
            </a>
            <a className="about-section-btn" href="#">
              See My Resume
            </a>
          </div>
        </div>
      </div>
      <div className="about-image" data-aos="fade-left">
        <Image
          className="about-img"
          alt="about-image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill={true}
          src="/assets/homepage-optimized.jpg"
        />
      </div>
    </div>
  );
};

export default AboutSection;
