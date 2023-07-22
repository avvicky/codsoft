import SkillsCard from "@components/SkillsCard";
import Header from "@components/Header";
import AboutSection from "@components/AboutSection";
import Projects from "@components/Projects";
import ContactSection from "@components/ContactSection";

const page = () => {
  return (
    <>
      <Header />
      <AboutSection />
      <SkillsCard />
      <Projects />
      <ContactSection />
    </>
  );
};

export default page;
