"use client";

import { GradientSpheres } from "@/components/blocks/GradientSphere";
import { TitleHeader } from "@/components/blocks/TitleHeader";
import Image from "next/image";
import { bentoSocialLinks } from "@/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { memo, lazy, Suspense } from "react";
import { AlienExperience } from "./AlienExperience";
import { BentoSocialLink } from "@/types";
import { FlowerLotusIcon } from "@phosphor-icons/react";

// Lazy load the Alien component since it's heavy 3D content
// const Alien = lazy(() => import("@/components/models/Alien"));

const LazyArrowUpRightIcon = lazy(() =>
    import('@phosphor-icons/react').then(module => ({
        default: module.ArrowUpRightIcon
    }))
);

const AlienLoadingFallback = memo(() => (
    <div className="w-full h-full flex items-center justify-center bg-[#c8d751] rounded-2xl">
        <div className="animate-pulse text-black text-lg">Loading 3D Model...</div>
    </div>
));

AlienLoadingFallback.displayName = "AlienLoadingFallback";

gsap.registerPlugin(ScrollTrigger);

const MOTIVATION_TEXTS = ["BE YOURSELF!", "BE DIFFERENT!", "BUILD DIFFERENT!"] as const;

const ServiceCard = memo(({
    title, description
}: {
    title: string; description: string
}) => (
    <div
        id="card"
        className="md:col-span-6 col-span-12 row-span-3"
    >
        <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
            <div className="flex flex-col h-full justify-center gap-2">
                <h1 className="gradient-title md:text-3xl text-2xl font-medium animated-text">{title}</h1>
                <p className="md:text-2xl max-w-96 animated-text">{description}</p>
            </div>
        </div>
    </div>
));

ServiceCard.displayName = "ServiceCard";

const SocialLinkCard = memo(({ item }: { item: BentoSocialLink }) => (
    <div className="md:col-span-4 col-span-12 row-span-2">
        <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
            <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="flex justify-between items-center h-full">
                    <div className="flex items-center md:gap-5">
                        {typeof item.icon === "string" ? (
                            <Image
                                src={item.icon}
                                alt={item.name}
                                width={47}
                                height={47}
                                loading="lazy"
                            />) : (
                            item.icon
                        )}
                        <h1 className="gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium">{item.name}</h1>
                    </div>
                    <div className="lg:block md:hidden group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:[filter:brightness(0)_saturate(100%)_invert(27%)_sepia(96%)_saturate(6916%)_hue-rotate(221deg)_brightness(91%)_contrast(105%)] transition-all duration-300">

                        <Suspense fallback={
                            <div className="w-[41px] h-[41px] bg-gray-200 animate-pulse rounded lg:scale-100 scale-50" />
                        }>
                            <LazyArrowUpRightIcon
                                size={41}
                                weight="bold"
                                className="lg:scale-100 scale-50"
                            />
                        </Suspense>

                    </div>
                </div>
            </a>
        </div>
    </div>
));

SocialLinkCard.displayName = "SocialLinkCard";

const About = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top top",
                once: true,
            },
        });

        tl.from("#card", {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.inOut",
        })
            .from(".animated-text", {
                opacity: 0,
                y: 20,
                stagger: 0.15,
                duration: 0.6,
                ease: "power3.inOut",
            }, "-=0.4"); // Overlap animations for smoother experience. Starts animation 0.4s earlier
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

                        {/* Main profile card */}
                        <div className="md:col-span-7 col-span-12 row-span-5">
                            <div className="bg-black-300 rounded-2xl p-7 w-full h-full">

                                <FlowerLotusIcon
                                    className="md:w-32 w-16 h-auto"
                                    weight="regular"
                                />

                                <div className="mt-5">
                                    <h1 className="text-blue-50 md:text-5xl text-3xl">Roshan Chaudhary</h1>
                                    <p className="md:text-2xl mt-2">
                                        I am a Nepal-based full-stack developer specializing in web development and software engineering. With a versatile skill set, I have worked across multiple companies, delivering scalable and efficient digital solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 3D Model card */}
                        <div className="md:col-span-5 col-span-12 row-span-5">
                            <div className="bg-[#c8d751] hover:cursor-grab rounded-2xl w-full md:h-full h-60">
                                <div className="w-full h-full">
                                    <Suspense fallback={<AlienLoadingFallback />}>

                                        <AlienExperience />

                                    </Suspense>
                                </div>
                            </div>
                        </div>

                        {/* Service cards */}
                        <ServiceCard
                            title="Web Design & Dev"
                            description="Cleanly Designed, Conversion-focused, and build for easy updates."
                        />

                        <ServiceCard
                            title="PostgreSQL & Database"
                            description="Bulletproof PostgreSQL—fast, scalable, and crash-proof."
                        />

                        {/* Motivation Card */}
                        <div
                            id="card"
                            className="md:col-span-4 col-span-12 row-span-4"
                        >
                            <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                                <div className="flex flex-col justify-between h-full">
                                    {MOTIVATION_TEXTS.map(text => (
                                        <h1
                                            key={text}
                                            className="gradient-title md:text-5xl text-3xl font-bold animated-text"
                                        >
                                            {text}
                                        </h1>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* bento social links */}
                        {bentoSocialLinks.map((item, index) => (
                            <SocialLinkCard
                                key={`${item.name}-${index}`}
                                item={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </>;
}

About.displayName = 'About';

export default About;