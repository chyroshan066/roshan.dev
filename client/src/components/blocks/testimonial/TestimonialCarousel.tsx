"use client";

import { testimonials } from "@/constants";
import { useGSAP } from "@gsap/react";
import { useState, useCallback, useMemo, useRef } from "react";
import gsap from "gsap";
import { TestimonialCard } from "./TestimonialCard";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

const TestimonialCarousel = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    const maxIndex = useMemo(() => testimonials.length - 1, []);

    const prevTestimonial = useCallback(() => {
        setCurrentTestimonial((prev) => (prev - 1 + maxIndex) % maxIndex);
    }, [maxIndex]);

    const nextTestimonial = useCallback(() => {
        setCurrentTestimonial((prev) => (prev + 1) % maxIndex);
    }, [maxIndex]);

    useGSAP(() => {
        if (timelineRef.current) {
            timelineRef.current.kill();  // Kill existing timeline to prevent conflicts
        }

        timelineRef.current = gsap.timeline();

        timelineRef.current
            .to(".slider-item", {
                x: `-${currentTestimonial * 63}vw`,
                duration: 1.2,
                ease: "expo.out",
            })
            .fromTo(
                `.slider-item:nth-child(${currentTestimonial + 2}) img`,
                { scale: 2 },
                {
                    scale: 1,
                    duration: 1,
                    ease: "power2.out",
                },
                "<0.2"
            );
    }, [currentTestimonial]);

    const sliderItems = useMemo(() =>
        testimonials.map((testimonial, index) => (
            <div
                key={`testimonial-${index}`}
                className="slider-item w-[60vw] h-full flex-none relative"
            >
                <TestimonialCard testimonial={testimonial} />
            </div>
        )), []);

    return <>
        <div className="relative">
            <div className="w-full relative  md:h-[78vh] sm:h-[60vh] h-[71vh]">
                <div className="absolute w-full -left-[43vw] top-0">
                    <div className="flex w-full md:h-[78vh] sm:h-[60vh] h-[71vh] items-center gap-[3vw]">
                        {sliderItems}
                    </div>
                </div>
            </div>

            {/* Arrow button */}
            <nav
                className="mt-20 text-white-50 flex justify-end gap-5 md:-translate-x-32 -translate-x-5"
                aria-label="Testimonial navigation"
            >
                <button
                    onClick={prevTestimonial}
                    className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-12 h-12 flex-center"
                    aria-label="Previous testimonial"
                    type="button"
                >

                    <CaretLeftIcon
                        size={20}
                        color="#fff"
                        weight="bold"
                    />

                </button>
                <button
                    onClick={nextTestimonial}
                    className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-12 h-12 flex-center"
                    aria-label="Next testimonial"
                    type="button"
                >

                    <CaretRightIcon
                        size={20}
                        color="#fff"
                        weight="bold"
                    />

                </button>
            </nav>

            {/* Progress indicators for better UX */}
            <div className="flex justify-center gap-2 mt-6">
                {testimonials.slice(0, -1).map((_, index) => (
                    <button
                        key={`indicator-${index}`}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${index === currentTestimonial
                            ? 'bg-pink-100'
                            : 'bg-blue-50/50'
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    </>;
}

export default TestimonialCarousel;
