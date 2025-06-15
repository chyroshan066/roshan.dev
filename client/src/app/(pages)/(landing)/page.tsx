import { CallToAction } from "@/sections/CallToAction";
import { Loader } from "@/components/Loader";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { TechStack } from "@/sections/TechStack";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <div className="md:mb-40 mb-20">
        {/* <Loader /> */}
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Testimonials />
        <CallToAction />
      </div>
    </>
  );
}
