"use client";

import { workExperiences } from '@/constants';
import React, { useState, useCallback } from 'react';

export const WorkExperience = () => {
    const [hoveredItem, setHoveredItem] = useState<null | number>(null);

    const handleMouseEnter = useCallback((id: number) => {
        setHoveredItem(id);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredItem(null);
    }, []);

    return (
        <div className="text-white p-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <h1 className="gradient-title md:text-5xl text-3xl font-bold animated-text">WORK EXPERIENCE</h1>
                    <span className="md:text-4xl text-2xl">✨</span>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    onMouseLeave={handleMouseLeave}
                >
                    {workExperiences.map((experience) => {
                        const isHovered = hoveredItem === experience.id;
                        const isOtherHovered = hoveredItem !== null && hoveredItem !== experience.id;

                        return (
                            <div
                                key={experience.id}
                                className={`bg-black-300 rounded-2xl p-7 cursor-pointer transition-all duration-500 ease-in-out ${hoveredItem === null
                                    ? 'opacity-100 scale-100'
                                    : isHovered
                                        ? 'opacity-100 scale-105 shadow-xl ring-2 ring-blue-500/50'
                                        : 'opacity-50 scale-95'
                                    }`}
                                onMouseEnter={() => handleMouseEnter(experience.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-300 rounded-lg flex items-center justify-center text-xl">
                                            {experience.logo}
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

                                <div className={`transition-all duration-300 ease-in-out ${isHovered
                                    ? 'max-h-screen opacity-100'
                                    : 'max-h-0 opacity-0 overflow-hidden'
                                    }`}>
                                    <div className="space-y-3 mb-6">
                                        {experience.details.map((detail, index) => (
                                            <div key={index} className="flex items-start gap-2">
                                                <span className="text-blue-400 text-sm mt-2">•</span>
                                                <p className="text-gray-300 text-sm leading-relaxed">{detail}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {experience.certificates && (
                                        <div className="flex flex-wrap gap-2">
                                            {experience.certificates.map((cert, index) => (
                                                <div
                                                    key={index}
                                                    className={`${cert.color} px-3 py-1 rounded text-xs text-white font-medium`}
                                                >
                                                    {cert.name}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};