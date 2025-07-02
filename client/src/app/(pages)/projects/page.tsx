import { Suspense } from 'react';
import { Metadata } from 'next';
import dynamicImport from 'next/dynamic';

const CallToAction = dynamicImport(() => import("@/components/blocks/CallToAction"), {
    loading: () => (
        <div className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-lg h-48 w-full" />
    ),
    ssr: true,
});

const ProjectsSection = dynamicImport(() =>
    import("./_components/ProjectsSection"), {
    loading: () => (
        <div className="animate-pulse space-y-4">
            <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-64 w-full" />
            <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-48 w-full" />
        </div>
    ),
    ssr: true,
});

export const metadata: Metadata = {
    title: 'Projects | Roshan Chaudhary',
    description: 'Explore my portfolio of projects and work samples',
    keywords: [
        "portfolio projects",
        "web applications",
        "react projects",
        "node.js applications",
        "javascript projects",
        "full-stack applications",
        "coding examples",
        "development showcase"
    ],
    openGraph: {
        title: 'Projects Portfolio',
        description: 'Explore my portfolio of projects and work samples',
        url: "https://roshan-dev-gilt.vercel.app/projects",
    },
};

const ProjectsErrorBoundary = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            {children}
        </div>
    );
};

export default function Projects() {
    return <>
        <ProjectsErrorBoundary>

            <main className="flex-center relative flex-col md:mb-40 mb-20">

                <Suspense fallback={
                    <div className="animate-pulse space-y-6 w-full max-w-4xl">
                        <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-12 w-64 mx-auto" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div key={i} className="bg-gray-200 dark:bg-gray-800 rounded-lg h-64" />
                            ))}
                        </div>
                    </div>
                }>
                    <ProjectsSection />
                </Suspense>

                <Suspense fallback={
                    <div className="animate-pulse bg-gray-200 dark:bg-gray-800 rounded-lg h-48 w-full max-w-4xl mt-16" />
                }>
                    <CallToAction />
                </Suspense>

            </main>

        </ProjectsErrorBoundary>
    </>;
};

export const dynamic = 'force-static';  // Enable static generation for better performance
export const revalidate = 3600;  // Revalidate every hour for ISR (Incremental Static Regeneration)