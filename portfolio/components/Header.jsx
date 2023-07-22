import Image from "next/image";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <Image
          width={100}
          priority={true}
          alt="logo"
          height={50}
          src="/assets/signature1.png"
        />
      </div>
      <div className="header-link">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;
