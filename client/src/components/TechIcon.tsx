"use client";

import { iconsListType } from "@/types";
import Image from "next/image";
import { memo } from "react";
import { useInView } from "react-intersection-observer";

export const TechIcon = memo(({
    icon
}: {
    icon: iconsListType
}) => {
    // "ref" is used as a reference that must be attached to the DOM element you want to observe
    // "inView" is a boolean that tells you whether the element is currently visible in the viewport
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1  // fires the trigger when 10% of the element becomes visible in the viewport
    });

    return <>
        <div
            className="relative group"
            ref={ref}
        >
            {inView ? (
                <>
                    <div className="md:w-32 md:h-32 w-20 h-20 bg-black-300 flex-center gradient-border hover:translate-y-[-12px] transition-all duration-700 marquee-item flex-none">
                        <div className="relative md:size-16 size-10 aspect-square">
                            <Image
                                src={icon.image}
                                alt={icon.name}
                                fill
                                sizes="(max-width: 768px) 40px, 64px"
                                priority={false}
                                quality={85}
                            />
                        </div>
                    </div>

                    {/* Hovered info */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <div className="bg-gray-900 text-white px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap shadow-lg border border-gray-700">
                            {icon.name}
                            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 border-l border-t border-gray-700 rotate-45"></div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="md:w-32 md:h-32 w-20 h-20 bg-black-300/20 flex-center gradient-border marquee-item flex-none animate-pulse">
                    <div className="relative md:size-16 size-10 aspect-square bg-gray-400/20 rounded"></div>
                </div>
            )}
        </div>
    </>;
});

TechIcon.displayName = 'TechIcon';