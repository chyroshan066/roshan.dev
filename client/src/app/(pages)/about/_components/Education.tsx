"use client";

import { GradientSpheres } from '@/components/blocks/GradientSphere';
import { TitleHeader } from '@/components/blocks/TitleHeader';
import { education } from '@/constants';
import { Education } from '@/types';
import { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react';

const getArrowClasses = (arrow: { position: string; direction: string } | undefined) => {
    if (!arrow) return '';

    const baseClasses = 'absolute ';
    const directionClasses = arrow.direction === 'up'
        ? 'bottom-full border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-700 '
        : 'top-full border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-700 ';

    const positionClasses = arrow.position === 'left'
        ? 'left-8'
        : arrow.position === 'right'
            ? 'right-8'
            : 'left-1/2 transform -translate-x-1/2';

    return baseClasses + directionClasses + positionClasses;
};

const calculateTooltipPosition = (item: Education, dotElement: HTMLElement) => {
    const dotRect = dotElement.getBoundingClientRect();
    const tooltipWidth = 384;
    const tooltipHeight = 300;
    const margin = 20;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const dotCenterX = dotRect.left + dotRect.width / 2;

    // Determine horizontal position
    let left = 0;
    let arrowPosition = 'center';

    if (item.position <= 25) {
        left = dotRect.left;
        arrowPosition = 'left';
    } else if (item.position >= 75) {
        left = dotRect.right - tooltipWidth;
        arrowPosition = 'right';
    } else {
        left = dotCenterX - tooltipWidth / 2;
    }

    // Boundary checks
    if (left < margin) {
        left = margin;
        arrowPosition = 'left';
    } else if (left + tooltipWidth > viewportWidth - margin) {
        left = viewportWidth - tooltipWidth - margin;
        arrowPosition = 'right';
    }

    // Determine vertical position
    const spaceBelow = viewportHeight - dotRect.bottom - margin;
    const spaceAbove = dotRect.top - margin;

    let top = 0;
    let arrowDirection = 'up';

    if (spaceBelow >= tooltipHeight) {
        top = dotRect.bottom + 16;
        arrowDirection = 'up';
    } else if (spaceAbove >= tooltipHeight) {
        top = dotRect.top - tooltipHeight - 10;
        arrowDirection = 'down';
    } else {
        top = spaceBelow > spaceAbove
            ? viewportHeight - tooltipHeight - margin
            : margin;
        arrowDirection = spaceBelow > spaceAbove ? 'up' : 'down';
    }

    return {
        style: {
            position: 'fixed' as const,
            top: `${top}px`,
            left: `${left}px`,
            zIndex: 50,
        },
        arrow: { position: arrowPosition, direction: arrowDirection }
    };
};

const EducationTimeline = memo(() => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<null | number>(null);
    const [tooltipStyles, setTooltipStyles] = useState<{ [key: number]: React.CSSProperties }>({});
    const [arrowStyles, setArrowStyles] = useState<{
        [key: number]: {
            position: string,
            direction: string
        }
    }>({});
    const timelineRef = useRef<HTMLDivElement>(null);
    const tooltipRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
    const [isMobile, setIsMobile] = useState(false);

    const sortedEducation = useMemo(() =>
        [...education].sort((a, b) => a.position - b.position),
        []
    );

    const animationDelays = useMemo(() => {
        const delays: { [key: number]: number } = {};
        sortedEducation.forEach((item, index) => {
            delays[item.id] = (index + 1) * 500;
        });
        return delays;
    }, [sortedEducation]);

    const handleResize = useCallback(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
        let timeoutId: NodeJS.Timeout;

        return () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkIsMobile, 150);
        };
    }, []);

    const handleMouseEnter = useCallback((item: Education, event: React.MouseEvent) => {
        setHoveredItem(item.id);

        const dotElement = event.currentTarget as HTMLElement;
        const positioning = calculateTooltipPosition(item, dotElement);

        setTooltipStyles(prev => ({
            ...prev,
            [item.id]: positioning.style
        }));

        setArrowStyles(prev => ({
            ...prev,
            [item.id]: positioning.arrow
        }));
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredItem(null);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();
        const debouncedResize = handleResize();
        window.addEventListener('resize', debouncedResize);

        return () => window.removeEventListener('resize', debouncedResize);
    }, [handleResize]);

    const timelineDots = useMemo(() =>
        education.map((item) => (
            <div
                key={item.id}
                className="absolute transform -translate-x-1/2"
                style={{
                    left: `${item.position}%`,
                    top: isMobile ? '-50px' : '-55px',
                    minWidth: '32px'
                }}
            >
                <div
                    className={`relative w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-4 border-slate-900 cursor-pointer transition-all duration-300 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                        } ${hoveredItem === item.id ? 'scale-125' : 'hover:scale-110'}`}
                    style={{
                        transitionDelay: `${animationDelays[item.id]}ms`,
                        boxShadow: hoveredItem === item.id
                            ? '0 0 30px rgba(96, 165, 250, 0.8)'
                            : '0 0 15px rgba(96, 165, 250, 0.4)',
                        willChange: 'transform, opacity' // Optimize for animations
                    }}
                    onMouseEnter={(e) => handleMouseEnter(item, e)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-ping opacity-20" />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white font-bold text-sm md:text-base whitespace-nowrap">
                        {item.endYear}
                    </div>
                </div>
            </div>
        )),
        [isMobile, isVisible, hoveredItem, animationDelays, handleMouseEnter, handleMouseLeave]
    );

    const tooltipContent = useMemo(() => {
        if (!hoveredItem) return null;

        const item = education.find(edu => edu.id === hoveredItem);
        if (!item) return null;

        const style = tooltipStyles[item.id];
        if (!style) return null;

        return (
            <div
                key={`tooltip-${item.id}`}
                ref={(el) => { tooltipRefs.current[item.id] = el; }}
                className="transition-all duration-300 opacity-100 pointer-events-auto"
                style={{
                    ...style,
                    willChange: 'transform, opacity'
                }}
            >
                <div className="bg-[#17151f] backdrop-blur-lg border border-gray-700 rounded-2xl p-4 md:p-6 min-w-80 md:min-w-96 max-w-sm shadow-2xl">
                    <div className="flex items-center mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center mr-3">
                            <span className="text-white text-lg md:text-xl font-bold">
                                {item.degree.includes('Bachelor') ? '🎓' : '📚'}
                            </span>
                        </div>
                        <div>
                            <h3 className="gradient-title text-lg md:text-xl font-bold leading-tight">{item.degree}</h3>
                            <div className="flex items-center text-gray-300 text-sm">
                                <span className="mr-2">📍</span>
                                <span>{item.institution}</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                        {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-400 text-sm">
                            <span className="mr-2">📅</span>
                            <span>{item.startYear} - {item.endYear}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === 'Ongoing'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            }`}>
                            {item.status}
                        </span>
                    </div>

                    <div className={getArrowClasses(arrowStyles[item.id])} />
                </div>
            </div>
        );
    }, [hoveredItem, tooltipStyles, arrowStyles]);

    return (
        <div className="flex-center relative md:p-0 px-5 w-full">

            <GradientSpheres
                sphere1Class={"about-gradient-sphere about-sphere-1"}
                sphere2Class={"about-gradient-sphere about-sphere-2"}
            />

            <div className="container w-full h-full relative z-10 md:mb-40 mb-20 mt-10 md:mt-0">

                <TitleHeader
                    title={"EDUCATION 🎓"}
                    className={"mb-15"}
                />

                <div className="px-2 md:px-4 py-6 w-full">
                    <div
                        className="relative w-full max-w-full"
                        ref={timelineRef}
                    >
                        <div
                            className="relative mx-auto"
                            style={{ maxWidth: '100%' }}
                        >
                            <div className="relative h-2 rounded-full mb-8 w-full">
                                <div
                                    className={`absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-2000 ease-out shadow-lg ${isVisible ? 'w-full opacity-100' : 'w-0 opacity-0'
                                        }`}
                                    style={{
                                        boxShadow: '0 0 20px rgba(96, 165, 250, 0.5)',
                                        willChange: 'width, opacity'
                                    }}
                                />
                            </div>
                            <div className="relative w-full">
                                {timelineDots}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {tooltipContent}
        </div>
    );
});

EducationTimeline.displayName = "Education";

export default EducationTimeline;