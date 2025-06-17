import { TechStack } from "@/sections/TechStack";
import { AboutExperience } from "./_components/AboutExperience";
import { Education } from "./_components/Education";
import { MoreInfo } from "./_components/MoreInfo";
import { WorkExperience } from "./_components/WorkExperience";

export default function About() {
    return <>
        <section
            id="contact"
            className="flex-center relative md:p-0 px-5 flex-col"
        >
            <div className="w-full h-full container md:my-30 my-10">
                <div className="grid grid-cols-12">
                    <div className="md:col-span-5 col-span-12">
                        <div className="w-full md:h-full h-96 relative">
                            <div className="absolute inset-0 -top-0 md:-left-80 -left-50">

                                <AboutExperience />

                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-7 col-span-12 md:order-none order-1 relative z-10">

                        <MoreInfo />

                    </div>
                </div>
            </div>

            <WorkExperience />
            <Education />
            <TechStack />
        </section>
    </>;
}