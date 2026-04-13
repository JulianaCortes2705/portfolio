import AboutIntro from "../../components/About/AboutIntro";
import ExperienceSection from "../../components/About/ExperienceSection";
import SkillsSection from "../../components/About/SkillsSection";

export const metadata = {
  title: "Portfolio - About",
  description: "About page of my portfolio.",
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <ExperienceSection />
      <SkillsSection />
    </>
  );
}
