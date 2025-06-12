import { testimonialType } from "@/types";
import Image from "next/image";

export const TestimonialCard = ({
    testimonial
}: {
    testimonial: testimonialType
}) => {
    return <>
        <div className="col-span-1 bg-black-300 group rounded-xl testimonial-card">
            <div className="group-hover:bg-blue-300 transition-all duration-700 p-10 rounded-xl">
                <div className="flex items-center justify-between">
                    <div className="relative md:w-36 md:h-36 w-24 h-24 aspect-square">
                        <Image
                            src={testimonial.imgPath}
                            alt="cover"
                            fill
                            className="border border-transparent rounded-full  group-hover:border-white group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-700"
                        />
                    </div>
                    <div className="relative md:w-28 md:h-28 w-14 h-14 aspect-square">
                        <Image
                            src="/images/quote.png"
                            alt="quote"
                            fill
                            className="group-hover:mix-blend-screen transition-all duration-700"
                        />
                    </div>
                </div>
                <div className="mt-10">
                    <p className="md:text-2xl font-light group-hover:text-white-50 transition-all duration-700">{testimonial.review}</p>
                </div>
                <div className="flex md:flex-row flex-col md:items-center justify-between md:mt-20 mt-10">
                    <div>
                        <h1 className="text-blue-50 md:text-3xl text-lg font-medium mb-1 group-hover:text-white transition-all duration-700">{testimonial.name}</h1>
                        <p className="md:text-xl text-sm opacity-70 font-light group-hover:text-white-50 transition-all duration-700">{testimonial.pos}</p>
                    </div>
                    <div className="flex items-center gap-3 md:mt-0 mt-5">
                        <div className="relative md:size-12 size-5 aspect-square">
                            <Image
                                src="/images/x.svg"
                                alt="x"
                                fill
                                className="group-hover:mix-blend-luminosity transition-all duration-700"
                            />
                        </div>
                        <div className="relative md:size-12 size-5 aspect-square">
                            <Image
                                src="/images/fb.svg"
                                alt="fb"
                                fill
                                className="group-hover:mix-blend-luminosity transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}