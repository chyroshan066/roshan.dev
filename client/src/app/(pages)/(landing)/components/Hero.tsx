"use client";

import { GradientSpheres } from "@/components/blocks/GradientSphere";
import { HeroExperience } from "./HeroExperience";
import Image from "next/image";
import { memo } from "react";
import { ArrowDownIcon, ArrowFatLinesDownIcon } from "@phosphor-icons/react";

export const Hero: React.FC = memo(() => {
    return <>
        <section
            className="w-screen h-dvh overflow-hidden relative text-white-50 px-5 md:p-0"
        >
            <div className="gradient-box w-full h-96 absolute bottom-0 left-0 z-20 will-change-transform"></div>

            <GradientSpheres
                sphere1Class={"gradient-sphere sphere-1"}
                sphere2Class={"gradient-sphere sphere-2"}
            />

            <div className="h-full w-full flex-center">
                <div className="container relative h-full w-full">
                    <div className="md:mt-40 mt-20">
                        <p className="font-medium md:text-2xl text-base">
                            👋 Hey, I&apos;m Here
                        </p>
                        <h1 className="font-bold md:text-8xl text-5xl">ROSHAN CHAUDHARY</h1>
                        <h1 className="font-bold md:text-9xl text-5xl">FULL-STACK</h1>
                    </div>
                    <div className="absolute w-full z-30 bottom-20 right-0">
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col items-center md:gap-5 gap-1">
                                <p className="md:text-base text-xs">Explore</p>
                                <div className="will-change-transform">

                                    <ArrowDownIcon
                                        size={28}
                                        className="animate-bounce"
                                        weight="bold"
                                    />

                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <Image
                                    src="/images/shape.svg"
                                    alt="shape"
                                    width={100}
                                    height={100}
                                    priority
                                    sizes="(max-width: 768px) 60px, 100px"
                                />
                                <h1 className="font-bold md:text-9xl text-5xl">DEVELOPER</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full absolute inset-0">

                <HeroExperience />

            </div>
        </section>
    </>;
});

Hero.displayName = 'Hero';