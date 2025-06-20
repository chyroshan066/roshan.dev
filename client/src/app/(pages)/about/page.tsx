import { Education } from "./_components/Education";
import { WorkExperience } from "./_components/WorkExperience";
import { Certificate } from "./_components/Certificate";
import { Testimonials } from "@/components/blocks/testimonial/Testimonials";
import { CallToAction } from "@/components/blocks/CallToAction";
import { AboutHero } from "./_components/AboutHero";
import { TechStack } from "@/components/blocks/tech/TechStack";

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