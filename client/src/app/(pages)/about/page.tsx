import { WorkExperienceDisplay } from "./_components/WorkExperience";
import { AboutHero } from "./_components/AboutHero";
import { Suspense, lazy } from "react";
import { Metadata } from "next";
import Head from "next/head";

const Education = lazy(() => import("./_components/Education"));
const Certificate = lazy(() => import("./_components/Certificate"));
const TechStack = lazy(() => import("@/components/blocks/tech/TechStack"));
const Testimonials = lazy(() => import("@/components/blocks/testimonial/Testimonials"));
const CallToAction = lazy(() => import("@/components/blocks/CallToAction"));

const SectionSkeleton = () => (
    <div className="flex-center relative md:p-0 px-5 w-full">
        <div className="container w-full h-full md:my-40 my-20 relative z-10 md:px-0 px-6">
            <div className="animate-pulse">
                <div className="h-8 bg-gray-700/20 rounded-lg w-1/3 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-700/20 rounded w-2/3 mx-auto mb-12"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* The Array(3) creates a sparse array with 3 empty slots. */}
                    {/* _ - the current value (undefined, which is ignored by using _) */}
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="bg-gray-700/10 rounded-2xl h-64 animate-pulse"></div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export const metadata: Metadata = {
    title: "About | Roshan Chaudhary",
    description: "Learn about my journey as a full-stack developer, including my work experience, education, certifications, and technical skills. Discover my passion for creating innovative web solutions.",
    keywords: [
        "about roshan",
        "developer bio",
        "programming experience",
        "tech stack",
        "software engineer background",
        "developer skills",
        "coding journey",
        "professional experience"
    ],
    openGraph: {
        title: "About Me | Roshan Chaudhary",
        description: "Learn about my journey as a full-stack developer, including my work experience, education, certifications, and technical skills.",
        url: "https://roshan-dev-gilt.vercel.app/about",
    },
};

export default function About() {
    return <>
        <Head>
            <link
                rel="preload"
                href="/models/avatar-transformed.glb"
                as="fetch"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/models/Male_Sitting_Pose.fbx"
                as="fetch"
                crossOrigin="anonymous"
            />
        </Head>
        <div className="flex-center relative flex-col md:mb-40 mb-20">
            <AboutHero />
            <WorkExperienceDisplay />

            <Suspense fallback={<SectionSkeleton />}>
                <Education />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
                <TechStack />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
                <Certificate />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
                <Testimonials />
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
                <CallToAction />
            </Suspense>

        </div>
    </>;
};