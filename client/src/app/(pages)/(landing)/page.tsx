// "use client";

import type { Metadata } from "next";
import { Hero } from "./components/Hero";
import dynamic from 'next/dynamic';
import CallToAction from "@/components/blocks/CallToAction";
// import { useEffect, useState } from "react";
// import Intro from "./components/Intro";

const About = dynamic(() => import('./components/About'));
const Projects = dynamic(() => import('./components/Projects'));
const Testimonials = dynamic(() => import('@/components/blocks/testimonial/Testimonials'));
const TechStack = dynamic(() => import('@/components/blocks/tech/TechStack'));

export default function Home() {
  // const getInitialStates = (): {
  //   showIntro: boolean;
  //   showHome: boolean
  // } => {
  //   if (typeof window === 'undefined') {
  //     return {
  //       showIntro: true,
  //       showHome: false
  //     };
  //   }

  //   const introShown = sessionStorage.getItem('introShown');
  //   const navigationSource = sessionStorage.getItem('navigationSource');

  //   const shouldShowIntro = !introShown || navigationSource !== 'internal';  // Show intro if it hasn't been shown yet OR if it's a fresh page load (no navigationSource)

  //   if (shouldShowIntro) {
  //     sessionStorage.removeItem('introShown');
  //     return {
  //       showIntro: true,
  //       showHome: false
  //     };
  //   } else {
  //     return {
  //       showIntro: false,
  //       showHome: true
  //     };
  //   }
  // };

  // const initialStates = getInitialStates();
  // const [showIntro, setShowIntro] = useState<boolean>(initialStates.showIntro);
  // const [showHome, setShowHome] = useState<boolean>(initialStates.showHome);

  // useEffect(() => {
  //   const handleBeforeUnload = (): void => {
  //     if (typeof window !== 'undefined') {
  //       sessionStorage.removeItem('navigationSource');
  //     }
  //   };

  //   if (typeof window !== 'undefined') {
  //     sessionStorage.setItem('navigationSource', 'internal');
  //     window.addEventListener('beforeunload', handleBeforeUnload);
  //   }

  //   return () => {
  //     if (typeof window !== 'undefined') {
  //       window.removeEventListener('beforeunload', handleBeforeUnload);
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleIntroComplete = (): void => {
  //     try {
  //       if (typeof window !== 'undefined') {
  //         sessionStorage.setItem('introShown', 'true');
  //       }
  //     } catch (error) {
  //       console.warn('Could not set sessionStorage item');
  //     }

  //     // Add a small delay for smooth transition
  //     setTimeout(() => {
  //       setShowIntro(false);
  //       setTimeout(() => {
  //         setShowHome(true);
  //       }, 300); // Delay to allow intro to fade out
  //     }, 500); // Show final greeting for a bit longer
  //   };

  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('introComplete', handleIntroComplete);
  //   }

  //   return () => {
  //     if (typeof window !== 'undefined') {
  //       window.removeEventListener('introComplete', handleIntroComplete);
  //     }
  //   };
  // }, []);

  // if (!showIntro && !showHome) {
  //   return (
  //     <div className="fixed inset-0 z-70 bg-black-100 flex items-center justify-center">
  //       {/* Optional: Add a simple loading indicator */}
  //       {/* <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div> */}
  //     </div>
  //   );
  // }

  return (
    // <div className="relative">
    //   {showIntro && (
    //     <div
    //       className={`fixed inset-0 z-70 bg-black-100 transition-opacity duration-300 ${showIntro ? 'opacity-100' : 'opacity-0'
    //         }`}
    //     >
    //       <Intro />
    //     </div>
    //   )}

    //   <div
    //     className={`transition-opacity ${showHome ? 'opacity-100' : 'opacity-0'
    //       }`}
    //   >
    //     <div className="md:mb-40 mb-20">
    //       <Hero />
    //       <About />
    //       <TechStack />
    //       <Projects />
    //       <Testimonials />
    //       <CallToAction />
    //     </div>
    //   </div>
    // </div>

    <div className="md:mb-40 mb-20">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Testimonials />
      <CallToAction />
    </div>
  );
}