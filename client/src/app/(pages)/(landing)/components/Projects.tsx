import { ProjectCarousel } from ".//ProjectCarousel";
import { GradientSpheres } from "@/components/blocks/GradientSphere";
import { TitleHeader } from "@/components/blocks/TitleHeader";

export const Projects = () => {
    return <>
        <section
            id="projects"
            className="w-full h-full flex-center relative"
        >

            <GradientSpheres
                sphere1Class={"projects-gradient-sphere projects-sphere-1"}
                sphere2Class={"projects-gradient-sphere projects-sphere-2"}
            />

            <div className="w-full md:my-40 my-20 relative z-10">
                <div className="container mx-auto md:p-0 px-5">

                    <TitleHeader
                        title={"My PROJECTS"}
                        text={"Check my recent project below for your Goal"}
                    />

                </div>
                <div className="md:mt-20 mt-10">
                    <ProjectCarousel />
                </div>
            </div>
        </section>
    </>;
}