"use client";

import { GradientSpheres } from "@/components/GradientSphere";
import { TitleHeader } from "@/components/TitleHeader";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Alien } from "@/components/models/Alien";
import { OrbitControls } from "@react-three/drei";
import { bentoSocialLinks } from "@/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
    useGSAP(() => {
        // slide in animation for cards
        gsap.from("#card", {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: "#about",
                start: "top top",
            },
        });

        // staggered text animations
        gsap.from(".animated-text", {
            opacity: 0,
            y: 20,
            stagger: 0.15,
            duration: 0.6,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: "#about",
                start: "top top",
            },
        });
    }, []);

    return <>
        <section
            id="about"
            className="flex-center relative md:p-0 px-5"
        >

            <GradientSpheres
                sphere1Class={"about-gradient-sphere about-sphere-1"}
                sphere2Class={"about-gradient-sphere about-sphere-2"}
            />

            <div className="container w-full h-full md:my-40 my-20 relative z-10">

                <TitleHeader
                    title={"About Me"}
                    text={"Passionate Developer, Lifelong Learner"}
                />

                <div className="md:mt-20 mt-10">
                    <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
                        <div className="md:col-span-7 col-span-12 row-span-5">
                            <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                                <div>
                                    <div className="relative md:w-32 w-16 h-auto aspect-square">
                                        <Image
                                            src="/images/flower.svg"
                                            alt="flower"
                                            fill
                                            className="object-contain flower"
                                        />
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <h1 className="text-blue-50 md:text-5xl text-3xl">Roshan Chaudhary</h1>
                                    <p className="md:text-2xl mt-2">
                                        I am a Nepal-based full-stack developer specializing in web development and software engineering. With a versatile skill set, I have worked across multiple companies, delivering scalable and efficient digital solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-5 col-span-12 row-span-5">
                            <div className="bg-[#c8d751] hover:cursor-grab rounded-2xl w-full md:h-full h-60">
                                <div className="w-full h-full">
                                    <Canvas>
                                        <OrbitControls enableZoom={false} />
                                        <Alien
                                            scale={2}
                                            position={[0, -5.5, 0]}
                                            rotation={[0, -0.5, 0]}
                                        />
                                    </Canvas>
                                </div>
                            </div>
                        </div>

                        {/* Web Design Card */}
                        <div
                            id="card"
                            className="md:col-span-6 col-span-12 row-span-3"
                        >
                            <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                                <div className="flex flex-col h-full justify-center gap-2">
                                    <h1 className="gradient-title md:text-3xl text-2xl font-medium animated-text">Web Design & Dev</h1>
                                    <p className="md:text-2xl max-w-96 animated-text">Cleanly Designed, Conversion-focused, and build for easy updates.</p>
                                </div>
                            </div>
                        </div>

                        {/* UI/UX Design Card */}
                        <div
                            id="card"
                            className="md:col-span-6 col-span-12 row-span-3"
                        >
                            <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                                <div className="flex flex-col h-full justify-center gap-2">
                                    <h1 className="gradient-title md:text-3xl text-2xl font-medium animated-text">PostgreSQL & Database</h1>
                                    <p className="md:text-2xl max-w-96 animated-text">Bulletproof PostgreSQL—fast, scalable, and crash-proof.</p>
                                </div>
                            </div>
                        </div>

                        {/* Motivation Card */}
                        <div
                            id="card"
                            className="md:col-span-4 col-span-12 row-span-4"
                        >
                            <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                                <div className="flex flex-col justify-between h-full">
                                    {
                                        [
                                            "BE YOURSELF!",
                                            "BE DIFFERENT!",
                                            "BUILD DIFFERENT!"
                                        ].map((text, index) => (
                                            <h1
                                                key={index}
                                                className="gradient-title md:text-5xl text-3xl font-bold animated-text"
                                            >
                                                {text}
                                            </h1>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        {/* bento social links */}
                        {bentoSocialLinks.map((item, index) => (
                            <div
                                key={index}
                                className="md:col-span-4 col-span-12 row-span-2"
                            >
                                <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                                    <a
                                        href={item.href}
                                        target="_blank"
                                    >
                                        <div className="flex justify-between items-center h-full">
                                            <div className="flex items-center md:gap-5">
                                                <Image
                                                    src={item.icon}
                                                    alt={item.icon}
                                                    width={47}
                                                    height={47}
                                                />
                                                <h1 className="gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium">{item.name}</h1>
                                            </div>
                                            <div className="lg:block md:hidden group-hover:translate-x-2 group-hover:-translate-y-1  group-hover:[filter:brightness(0)_saturate(100%)_invert(27%)_sepia(96%)_saturate(6916%)_hue-rotate(221deg)_brightness(91%)_contrast(105%)] transition-all duration-300">
                                                <Image
                                                    src="/images/arrowupright.svg"
                                                    alt="arrowupright"
                                                    width={41}
                                                    height={41}
                                                    className="lg:scale-100 scale-50"
                                                />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    </>;
}