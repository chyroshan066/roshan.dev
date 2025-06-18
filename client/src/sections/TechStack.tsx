import { TechIcon } from "@/components/TechIcon";
import { TitleHeader } from "@/components/blocks/TitleHeader";
import { iconsList } from "@/constants";

export const TechStack = () => {
    return <>
        <div className="w-full h-full">
            <div className="container mx-auto md:p-0 px-5">

                <TitleHeader
                    title={"TECH STACK"}
                    text={"My Go-To Tools for Crafting Solutions"}
                />

            </div>
            <div className="md:mt-20 mt-10 relative">
                <div className="marquee h-52">
                    <div className="marquee-box md:gap-12 gap-5">
                        {iconsList.map((icon, index) => (

                            <TechIcon
                                key={index}
                                icon={icon}
                            />

                        ))}
                        {iconsList.map((icon, index) => (

                            <TechIcon
                                key={index}
                                icon={icon}
                            />

                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>;
}