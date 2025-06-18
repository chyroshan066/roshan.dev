import { CallToAction } from "@/sections/CallToAction";
import { ProjectsSection } from "./_components/ProjectsSection";

export default function Projects() {
    return <>
        <div className="flex-center relative md:p-0 px-5 flex-col md:mb-40 mb-20">
            <ProjectsSection />
            <CallToAction />
        </div>

    </>;
}