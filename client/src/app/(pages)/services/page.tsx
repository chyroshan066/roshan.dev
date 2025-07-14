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
        'full-stack developer',
        'web development services',
        'custom web applications',
        'RESTful API development',
        'frontend development services',
        'backend development services',
        'professional full-stack web developer',
        'custom web application development',
        'modern web development solutions'
    ],
    openGraph: {
        title: 'Services | Roshan Chaudhary',
        description: 'Comprehensive web development services for your success',
        url: "https://roshan-dev-gilt.vercel.app/services",
    },
};

const ServicesPageSkeleton = () => {
    return (
        <div className="flex-center relative px-5 flex-col md:mb-40 mb-20">
            <div className="animate-pulse bg-gray-200 h-96 w-full rounded-lg mb-8" />
            <div className="animate-pulse bg-gray-200 h-32 w-full rounded-lg" />
        </div>
    );
};

export default function Services() {
    return <>
        <Suspense fallback={<ServicesPageSkeleton />}>

            <div className="flex-center relative flex-col md:mb-40 mb-20">
                <ServicesSection />
                <CallToAction />
            </div>

        </Suspense>
    </>;
}