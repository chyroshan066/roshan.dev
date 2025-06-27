"use client";

import { useGSAP } from "@gsap/react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useState, useEffect } from "react";

export const Loader = () => {
    const { progress } = useProgress();
    const [isLoaded, setIsLoaded] = useState(false);

    useGSAP(() => {
        // CHANGE: Check if progress reaches 100% instead of hardcoded total
        if (progress === 100 && !isLoaded) {
            setIsLoaded(true);

            // CHANGE: Add a slight delay before hiding the loader
            gsap.to(".loader-screen", {
                y: "-100%",
                duration: 1,
                ease: "power2.inOut",
                // CHANGE: Add onComplete callback to hide the loader completely
                onComplete: () => {
                    gsap.set(".loader-screen", { display: "none" });
                }
            });
        }
    }, [progress, isLoaded]);

    // CHANGE: Don't render the loader if it's already loaded (alternative approach)
    // if (isLoaded) return null;

    return (
        <div className="loader-screen bg-black-100 w-screen h-dvh fixed top-0 left-0 z-[100]">
            <div className="flex-center w-full h-full">
                <img src="/images/loader.gif" alt="loader" />
            </div>
            <div className="text-white-50 font-bold text-7xl leading-none gradient-title absolute bottom-10 right-10">
                {Math.floor(progress)}%
            </div>
        </div>
    );
};