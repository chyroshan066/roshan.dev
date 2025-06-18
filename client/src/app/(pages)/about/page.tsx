import { TechStack } from "@/sections/TechStack";
import { AboutExperience } from "./_components/AboutExperience";
import { Education } from "./_components/Education";
import { MoreInfo } from "./_components/MoreInfo";
import { WorkExperience } from "./_components/WorkExperience";
import { Certificate } from "./_components/Certificate";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { AboutHero } from "./_components/AboutHero";

export default function About() {
    return <>
        <div className="flex-center relative md:p-0 px-5 flex-col md:mb-40 mb-20">
            <AboutHero />
            <WorkExperience />
            <Education />
            <TechStack />
            <Certificate />
            <Testimonials />
            <CallToAction />
        </div>
    </>;
}