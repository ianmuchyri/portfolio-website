import Image from "next/image";
import HeroSection from "./components/homepage/section-hero";
import AboutSection from "./components/homepage/section-about";
import ExperienceSection from "./components/homepage/section-experience";
import SkillsSection from "./components/homepage/section-skills";
import ProjectsSection from "./components/homepage/projects/section-projects";
import EducationSection from "./components/homepage/section-education";
import BlogsSection from "./components/homepage/blogs/section-blogs";
import ContactSection from "./components/homepage/contact/section-contact";

export default function Home() {
  return (
    <div suppressHydrationWarning={true}>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <BlogsSection />
      <ContactSection />
    </div>
  );
}
