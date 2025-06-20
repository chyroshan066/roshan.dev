"use client";

import { projects } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { memo, useEffect, useState } from "react";

export const ProjectCarousel = memo(() => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        // Preload next/previous images
        const preloadImage = (src: string) => {
            const img = new window.Image();
            img.src = src;
        };

        if (projects[currentSlide + 1]) preloadImage(projects[currentSlide + 1].img);
        if (projects[currentSlide - 1]) preloadImage(projects[currentSlide - 1].img);
    }, [currentSlide]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + (projects.length - 1)) % (projects.length - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % (projects.length - 1));
    };

    useGSAP(() => {
        gsap.to(`.slider-item`, {
            x: `-${currentSlide * 63}vw`,
            opacity: 1,
            duration: 1.2,
            ease: "expo.out",
        });

        gsap.fromTo(`.slider-item:nth-child(${currentSlide + 2}) img`, {
            scale: 2,
        }, {
            scale: 1,
            duration: 1,
            ease: "power2.out",
        });
    }, [currentSlide]);

    return <>
        <div className="relative">

            <div className="w-full relative lg:h-[60vh] md:h[40vh] h-[60vh]">
                <div className="absolute w-full -left-[43vw] top-0">
                    <div className="flex w-full lg:h-[60vh] md:h[40vh] h-[60vh] items-center gap-[3vw]">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="slider-item w-[60vw] h-full flex-none relative overflow-hidden"
                            >
                                <div className="relative w-full h-full aspect-square">
                                    <Image
                                        src={project.img}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-center"
                                        priority={index === currentSlide} // Priority for current slide
                                        loading={Math.abs(index - currentSlide) <= 1 ? "eager" : "lazy"} // Eager load adjacent slides
                                        sizes="(max-width: 768px) 60vw, (max-width: 1024px) 60vw, 60vw"
                                    />
                                </div>
                                {/* Project name with links */}
                                <div className="absolute w-full h-20 bottom-0 left-0 bg-black-300/90 px-3 md:px-5">
                                    <div className="flex h-full justify-between items-center">
                                        <div className="flex-center gap-2">
                                            <p className="text-sm md:text-base">{index}.</p>
                                            <p className="text-sm md:text-base truncate">{project.title}</p>
                                        </div>
                                        <div className="flex items-center gap-2 md:gap-4">
                                            {/* Source Code Link */}
                                            <a
                                                href=""
                                                // href={slide.sourceUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 md:gap-2 text-xs md:text-sm hover:text-blue-400 transition-colors group"
                                            >
                                                <span className="hidden sm:inline">Source</span>
                                                <span className="sm:hidden">Code</span>
                                                <div className="relative w-3 h-3 md:w-4 md:h-4 aspect-square group-hover:scale-110 transition-transform">
                                                    <Image
                                                        src="/images/tech-icons/github.svg"
                                                        alt="github"
                                                        fill
                                                    />
                                                </div>
                                            </a>

                                            {/* Divider */}
                                            <div className="w-px h-4 bg-white-50/30"></div>

                                            {/* Live Project Link */}
                                            <a
                                                href=""
                                                // href={slide.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 md:gap-2 text-xs md:text-sm hover:text-pink-400 transition-colors group"
                                            >
                                                <span className="hidden sm:inline">Live</span>
                                                <span className="sm:hidden">View</span>
                                                <div className="relative w-3 h-3 md:w-4 md:h-4 aspect-square group-hover:scale-110 transition-transform">
                                                    <Image
                                                        src="/images/arrowupright.svg"
                                                        alt="external link"
                                                        fill
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-10 text-white-50 flex justify-end gap-5 md:-translate-x-32 -translate-x-5">
                <div
                    onClick={prevSlide}
                    className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-12 h-12 flex-center"
                >
                    <div className="relative w-5 h-5 aspect-square">
                        <Image
                            src="/images/CaretLeft.svg"
                            alt="left"
                            fill
                        />
                    </div>
                </div>
                <div
                    onClick={nextSlide}
                    className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-12 h-12 flex-center"
                >
                    <div className="relative w-5 h-5 aspect-square">
                        <Image
                            src="/images/CaretRight.svg"
                            alt="right"
                            fill
                        />
                    </div>
                </div>
            </div>
        </div>
    </>;
});

ProjectCarousel.displayName = 'ProjectCarousel';