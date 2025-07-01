import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const CallToAction = dynamic(() => import("@/components/blocks/CallToAction"), {
    loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded-lg" />,
    ssr: true
});

const ServicesSection = dynamic(() =>
    import("./_components/ServiceSection"), {
    loading: () => <div className="animate-pulse bg-gray-200 h-96 rounded-lg" />,
    ssr: true
});

export const metadata: Metadata = {
    title: 'Services | Roshan Chaudhary',
    description: 'Discover my comprehensive range of web services designed to help your business grow.',
    keywords: [
        'services',
        "portfolio",
        "website development",
        "frontend development",
        "backend development"
    ],
    openGraph: {
        title: 'Services | Roshan Chaudhary',
        description: 'Comprehensive web development services for your success',
        type: 'website',
    },
};

const ServicesPageSkeleton = () => {
    return (
        <div className="flex-center relative md:p-0 px-5 flex-col md:mb-40 mb-20">
            <div className="animate-pulse bg-gray-200 h-96 w-full rounded-lg mb-8" />
            <div className="animate-pulse bg-gray-200 h-32 w-full rounded-lg" />
        </div>
    );
};

export function ServicesErrorBoundary() {
    return (
        <div className="flex-center relative md:p-0 px-5 flex-col md:mb-40 mb-20">
            <div className="text-center p-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4">
                    Something went wrong loading services
                </h2>
                <p className="text-gray-600 mb-4">
                    We apologize for the inconvenience. Please try refreshing the page.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                    Refresh Page
                </button>
            </div>
        </div>
    );
}

export default function Services() {
    return <>
        <Suspense fallback={<ServicesPageSkeleton />}>

            <div className="flex-center relative md:p-0 px-5 flex-col md:mb-40 mb-20">
                <ServicesSection />
                <CallToAction />
            </div>

        </Suspense>
    </>;
}