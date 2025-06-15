import { ContactForm } from "../contact/_components/ContactForm";
import { AboutExperience } from "./_components/AboutExperience";

export default function About() {
    return <>
        <section
            id="contact"
            className="flex-center relative md:p-0 px-5"
        >
            <div className="w-full h-full container md:my-40 my-20">
                <div className="grid grid-cols-12">
                    <div className="md:col-span-5 col-span-12">
                        <div className="w-full md:h-full h-96 relative">
                            <div className="absolute inset-0 -top-0 md:-left-80 -left-50">

                                <AboutExperience />

                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-7 col-span-12 md:order-none order-1 relative z-10">

                        <ContactForm />

                    </div>
                </div>
            </div>
        </section>
    </>;
}