import Image from "next/image";
import { BiMap } from "react-icons/bi";

const ContactSection = () => {
  return (
    <div id="contact" className="contact-section">
      <h1 className="contact-title">Reach Out to me!</h1>
      <p className="contact-desc">
        "Software Developer 🐱‍💻 | Open Source Contributer 🔥"
      </p>
      <p className="location">
        <BiMap />
        TamilNadu, India
      </p>
      <p className="open-to-work">Open for opportunities: Yes</p>
      <div className="social-icons-contact social-icons">
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
    </div>
  );
};

export default ContactSection;
