import { CallToAction } from "@/components/blocks/CallToAction";
import { Loader } from "@/components/Loader";
import { Hero } from "./components/Hero";
import dynamic from 'next/dynamic';

const About = dynamic(() => import('./components/About'));
const Projects = dynamic(() => import('./components/Projects'));
const Testimonials = dynamic(() => import('@/components/blocks/testimonial/Testimonials'));

const TechStack = dynamic(() => import('@/components/blocks/tech/TechStack'), {
  loading: () => <div className="h-32 animate-pulse bg-gray-200" />
});

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
