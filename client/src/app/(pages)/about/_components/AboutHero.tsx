import { AboutExperience } from "./AboutExperience";
import { MoreInfo } from "./MoreInfo";

export const AboutHero = () => {
    return <>
        <div className="w-full h-full container md:my-30 my-10">
            <div className="grid grid-cols-12">
                <div className="md:col-span-5 col-span-12">
                    <div className="w-full md:h-full h-96 relative">
                        <div className="absolute inset-0 -top-0 md:-left-80 -left-50">

                            <AboutExperience />

                        </div>
                    </div>
                </div>
                <div className="md:col-span-7 col-span-12 md:order-none order-1 relative z-10">

                    <MoreInfo />

                </div>
            </div>
        </div>
    </>;
}