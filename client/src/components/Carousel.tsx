"use client";

import { slides } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useState } from "react";

export const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + (slides.length - 1)) % (slides.length - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % (slides.length - 1));
    };

    useGSAP(() => {
        gsap.to(".slider-item", {
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
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="slider-item w-[60vw] h-full flex-none relative overflow-hidden"
                            >
                                <div className="relative w-full h-full aspect-square">
                                    <Image
                                        src={slide.img}
                                        alt="slide"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                                <div className="absolute w-full h-20 bottom-0 left-0 bg-black-300/90 px-5">
                                    <div className="flex h-full justify-between items-center">
                                        <div className="flex-center gap-2">
                                            <p>{index + 1}.</p>
                                            <p>{slide.title}</p>
                                        </div>
                                        <div className="flex-center gap-5">
                                            <p>Preview Project</p>
                                            <div className="relative md:size-10 size-7 aspect-square">
                                                <Image
                                                    src="/images/arrowupright.svg"
                                                    alt="arrowupright"
                                                    fill
                                                />
                                            </div>
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
}