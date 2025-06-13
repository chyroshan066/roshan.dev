import { Loader } from "@/components/Loader";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { TechStack } from "@/sections/TechStack";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Loader />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}
