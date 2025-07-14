"use client";

import { TitleHeader } from '@/components/blocks/TitleHeader';
import { workExperiences } from '@/constants';
import { WorkExperience } from '@/types';
import Image from 'next/image';
import { useState, useCallback, useMemo, memo } from 'react';

const WorkExperienceItem = memo(({
    experience,
    hoveredItem,
    onMouseEnter,
    onMouseLeave
}: {
    experience: WorkExperience;
    hoveredItem: number | null;
    onMouseEnter: (id: number) => void;
    onMouseLeave: () => void;
}) => {
    const isHovered = hoveredItem === experience.id;
    // const isOtherHovered = hoveredItem !== null && hoveredItem !== experience.id;

    const cardClassName = useMemo(() => {
        const baseClasses = "bg-[#17151f] border-gray-700 border-r border-b rounded-2xl p-7 cursor-pointer transition-all duration-500 ease-in-out";

        if (hoveredItem === null) {
            return `${baseClasses} opacity-100 scale-100`;
        } else if (isHovered) {
            return `${baseClasses} opacity-100 scale-105 shadow-xl ring-2 ring-gray-500/50`;
        } else {
            return `${baseClasses} opacity-50 scale-95`;
        }
    }, [hoveredItem, isHovered]);

    const detailsClassName = useMemo(() => {
        return `transition-all duration-300 ease-in-out ${isHovered
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
            }`;
    }, [isHovered]);

    const handleMouseEnter = useCallback(() => {
        onMouseEnter(experience.id);
    }, [experience.id, onMouseEnter]);

    return (
        <div
            className={cardClassName}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 aspect-square bg-white rounded-lg flex items-center justify-center text-xl">
                        <Image
                            src={experience.logo}
                            alt={`${experience.company}-logo`}
                            fill
                        />
                    </div>
                    <div>
                        <h3 className="gradient-title text-xl font-bold">{experience.title}</h3>
                        <p className="text-sm text-[#a7a7a7]">{experience.company}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-sm text-gray-400">{experience.period}</p>
                    <p className="text-sm text-blue-300">{experience.status}</p>
                </div>
            </div>

            <div className={detailsClassName}>
                <div className="space-y-3">
                    {experience.details.map((detail: string, index: number) => (
                        <div key={index} className="flex items-start gap-2">
                            <span className="text-blue-400 text-sm mt-2">•</span>
                            <p className="text-gray-300 text-sm leading-relaxed">{detail}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
});

WorkExperienceItem.displayName = 'WorkExperienceItem';

export const WorkExperienceDisplay = memo(() => {
    const [hoveredItem, setHoveredItem] = useState<null | number>(null);

    const handleMouseEnter = useCallback((id: number) => {
        setHoveredItem(id);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredItem(null);
    }, []);

    const gridProps = useMemo(() => ({
        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
        onMouseLeave: handleMouseLeave
    }), [handleMouseLeave]);

    return (
        <div className="flex-center relative px-5">
            <div className="w-full h-full relative z-10 md:mb-40 mb-20 mt-10 md:mt-0">

                <TitleHeader
                    title={"WORK EXPERIENCE"}
                    className={"mb-15"}
                />

                <div {...gridProps}>
                    {workExperiences.map((experience) => (

                        <WorkExperienceItem
                            key={experience.id}
                            experience={experience}
                            hoveredItem={hoveredItem}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />

                    ))}
                </div>
            </div>
        </div>
    );
});

WorkExperienceDisplay.displayName = "WorkExperienceDisplay";