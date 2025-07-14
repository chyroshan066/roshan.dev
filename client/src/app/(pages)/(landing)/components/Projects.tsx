import { GradientSpheres } from "@/components/blocks/GradientSphere";
import { TitleHeader } from "@/components/blocks/TitleHeader";
import { lazy, Suspense } from 'react';
import { memo } from 'react';

const ProjectCarousel = lazy(() => import('./ProjectCarousel'));  // lazy-loading requires default export

const Projects = memo(() => {
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
                <div className="mx-auto px-5">

                    <TitleHeader
                        title={"My PROJECTS"}
                        text={"Check my recent project below for your Goal"}
                    />

                </div>
                <div className="md:mt-20 mt-10">

                    <Suspense fallback={<div>Loading projects...</div>}>
                        <ProjectCarousel />
                    </Suspense>

                </div>
            </div>
        </section>
    </>;
});

Projects.displayName = "Projects";

export default Projects;