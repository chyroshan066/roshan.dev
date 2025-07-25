import { GradientSpheres } from "@/components/blocks/GradientSphere";
// import { TestimonialCarousel } from "@/components/blocks/testimonial/TestimonialCarousel";
import { TitleHeader } from "@/components/blocks/TitleHeader";
import { lazy } from "react";

const TestimonialCarousel = lazy(() => import("@/components/blocks/testimonial/TestimonialCarousel"));

const Testimonials = () => {
    return <>
        <section
            id="testimonials"
            className="flex-center relative px-5"
        >

            <GradientSpheres
                sphere1Class={"testimonial-gradient-sphere testimonial-sphere-1"}
                sphere2Class={"testimonial-gradient-sphere testimonial-sphere-2"}

            />

            <div className="w-full h-full relative z-10 ">

                <TitleHeader
                    title={"TESTIMONIALS"}
                    text={"Watch our clients are saying about us"}
                />

                <div className="mt-20">

                    <TestimonialCarousel />

                </div>
            </div>
        </section>
    </>;
};

export default Testimonials;