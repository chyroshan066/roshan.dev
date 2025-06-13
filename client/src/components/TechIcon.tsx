"use client";

import { iconsListType } from "@/types";
import Image from "next/image";
import { useState } from "react";

export const TechIcon = ({
    icon
}: {
    icon: iconsListType
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return <>

        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="md:w-32 md:h-32 w-20 h-20 bg-black-300 flex-center gradient-border hover:-translate-y-3 transition-all duration-700 marquee-item flex-none">
                <div className="relative md:size-16 size-10 aspect-square">
                    <Image
                        src={icon.image}
                        alt={icon.name}
                        fill
                    />
                </div>
            </div>

            {isHovered && (
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gray-900 text-white px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap shadow-lg border border-gray-700">
                        {icon.name}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 border-l border-t border-gray-700 rotate-45"></div>
                    </div>
                </div>
            )}
        </div>
    </>;
}