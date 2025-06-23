import CallToAction from "@/components/blocks/CallToAction";
import { ServicesSection } from "./_components.tsx/ServiceSection";

export default function Services() {
    return <>
        <div className="flex-center relative md:p-0 px-5 flex-col md:mb-40 mb-20">
            <ServicesSection />
            <CallToAction />
        </div>
    </>;
}