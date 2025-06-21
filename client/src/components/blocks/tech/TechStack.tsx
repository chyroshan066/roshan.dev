import { iconsList } from "@/constants";
import { TechIcon } from "./TechIcon";
import { TitleHeader } from "../TitleHeader";
import { memo, useMemo } from 'react';

const TechStack = memo(() => {
    const duplicatedIcons = useMemo(() => {
        return [...iconsList, ...iconsList];
    }, []);

    const iconComponents = useMemo(() => {
        return duplicatedIcons.map((icon, index) => (
            <TechIcon
                key={`tech-icon-${index}`}
                icon={icon}
            />
        ));
    }, [duplicatedIcons]);

    return <>
        <div className="w-full h-full">
            <div className="container mx-auto md:p-0 px-5">

                <TitleHeader
                    title={"TECH STACK"}
                    text={"My Go-To Tools for Crafting Solutions"}
                />

            </div>

            {/* Tech Icons Display */}
            <div className="md:mt-20 mt-10 relative">
                <div className="marquee h-52 overflow-hidden">
                    <div className="marquee-box md:gap-12 gap-5 flex">
                        {/* {iconsList.map((icon, index) => (

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

                        ))} */}
                        {iconComponents}
                    </div>
                </div>
            </div>
        </div>
    </>;
});

TechStack.displayName = 'TechStack';

export default TechStack;