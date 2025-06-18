import { ContactExperience } from "./_components/ContactExperience";
import { ContactForm } from "./_components/ContactForm";
import { TitleHeader } from "@/components/blocks/TitleHeader";

export default function Contact() {
    return <>
        <section
            id="contact"
            className="flex-center relative md:p-0 px-5"
        >
            <div className="w-full h-full container md:my-40 my-20">

                <TitleHeader
                    title={"Contact Me"}
                    text={"Let's collaborate on tailored, sustainable solutions"}
                />

                <div className="mt-20">
                    <div className="grid grid-cols-12">
                        <div className="md:col-span-5 col-span-12 md:order-none order-1 relative z-10">

                            <ContactForm />

                        </div>
                        <div className="md:col-span-7 col-span-12">
                            <div className="w-full md:h-full h-96 md:absolute top-0 md:left-96 left-0 md:m-0 -mt-32">

                                <ContactExperience />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>;
}