import { ContactForm } from "./_components/ContactForm";
import { TitleHeader } from "@/components/blocks/TitleHeader";
import { Suspense, lazy } from "react";

const ContactExperience = lazy(() => import("./_components/ContactExperience"));

const ContactExperienceLoader = () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
        <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-sm text-gray-600 animate-pulse">Loading 3D Experience...</p>
        </div>
    </div>
);

export const metadata = {
    title: "Contact - Roshan Chaudhary",
    description: "Get in touch to discuss tailored, sustainable solutions for your project needs.",
    keywords: [
        "contact",
        "collaboration",
        "sustainable solutions",
        "consultation",
        "web development"
    ],
    openGraph: {
        title: "Contact - Roshan Chaudhary",
        description: "Get in touch to discuss tailored, sustainable solutions for your project needs..",
        type: "profile",
        url: "/contact",
    },
    alternates: {
        canonical: "/contact",
    },
};

export default function Contact() {
    return <>
        <section
            id="contact"
            className="flex-center relative md:p-0 px-5"
            aria-labelledby="contact-title"
        >
            <div className="w-full h-full container md:my-40 my-20">

                <TitleHeader
                    title={"Contact Me"}
                    text={"Let's collaborate on tailored, sustainable solutions"}
                />

                <div className="mt-20">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="md:col-span-5 col-span-12 md:order-none order-1 relative z-10">

                            <ContactForm />

                        </div>

                        <div className="md:col-span-7 col-span-12">
                            <div className="w-full md:h-full h-96 md:absolute top-0 md:left-96 left-0 md:m-0 -mt-32">

                                <Suspense fallback={<ContactExperienceLoader />}>
                                    <ContactExperience />
                                </Suspense>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>;
}