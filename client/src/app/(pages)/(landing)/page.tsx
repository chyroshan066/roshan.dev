"use client";

import { Hero } from "./components/Hero";
import dynamic from 'next/dynamic';
import CallToAction from "@/components/blocks/CallToAction";
// import { useEffect, useState } from "react";
// import Intro from "@/components/blocks/Intro";

const About = dynamic(() => import('./components/About'));
const Projects = dynamic(() => import('./components/Projects'));
const Testimonials = dynamic(() => import('@/components/blocks/testimonial/Testimonials'));
const TechStack = dynamic(() => import('@/components/blocks/tech/TechStack'));

export default function Home() {
  // const [showIntro, setShowIntro] = useState(true);
  // const [showHome, setShowHome] = useState(false);

  // useEffect(() => {
  //   const handleIntroComplete = () => {
  //     // Add a small delay for smooth transition
  //     setTimeout(() => {
  //       setShowIntro(false);
  //       setTimeout(() => {
  //         setShowHome(true);
  //       }, 300); // Delay to allow intro to fade out
  //     }, 500); // Show final greeting for a bit longer
  //   };

  // You'll need to emit this event from your Intro component
  //   window.addEventListener('introComplete', handleIntroComplete);

  //   return () => {
  //     window.removeEventListener('introComplete', handleIntroComplete);
  //   };
  // }, []);

  return (
    <>
      <div className="md:mb-40 mb-20">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Testimonials />
        <CallToAction />
      </div>

      {/* for displaying intro */}
      {/* <div className="relative">
        {showIntro && (
          <div
            className={`fixed inset-0 z-50 bg-black transition-opacity duration-300 ${showIntro ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Intro />
          </div>
        )}

        <div
          className={`transition-opacity duration-500 ${showHome ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="md:mb-40 mb-20">
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Testimonials />
            <CallToAction />
          </div>
        </div>
      </div> */}
    </>
  );
}
