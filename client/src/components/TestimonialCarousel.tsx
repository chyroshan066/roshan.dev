"use client";

import { testimonials } from "@/constants";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useState } from "react";
import gsap from "gsap";
import { TestimonialCard } from "./TestimonialCard";

export const TestimonialCarousel = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + (testimonials.length - 1)) % (testimonials.length - 1));
    };

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % (testimonials.length - 1));
    };

    useGSAP(() => {
        gsap.to(".slider-item", {
            x: `-${currentTestimonial * 63}vw`,
            opacity: 1,
            duration: 1.2,
            ease: "expo.out",
        });
        gsap.fromTo(`.slider-item:nth-child(${currentTestimonial + 2}) img`, {
            scale: 2,
        }, {
            scale: 1,
            duration: 1,
            ease: "power2.out",
        });
    }, [currentTestimonial]);

    return <>
        <div className="relative">

            <div className="w-full relative  md:h-[78vh] sm:h-[60vh] h-[71vh]">
                <div className="absolute w-full -left-[43vw] top-0">
                    <div className="flex w-full md:h-[78vh] sm:h-[60vh] h-[71vh] items-center gap-[3vw]">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="slider-item w-[60vw] h-full flex-none relative"
                            >
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Arrow button */}
            <div className="mt-10 text-white-50 flex justify-end gap-5 md:-translate-x-32 -translate-x-5">
                <div
                    onClick={prevTestimonial}
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
                    onClick={nextTestimonial}
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


