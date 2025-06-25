'use client';

import { useRef, useState, useCallback, useMemo, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services } from '@/constants';
import { GradientSpheres } from '@/components/blocks/GradientSphere';
import { TitleHeader } from '@/components/blocks/TitleHeader';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const ServiceCard = memo<{
    service: any;
    index: number;
    isExpanded: boolean;
    isTechIconsExpanded: boolean;
    onToggleExpanded: (serviceId: number) => void;
    onToggleTechIcons: (serviceId: number) => void;
    onRefSet: (el: HTMLDivElement | null, index: number) => void;
}>(({
    service, index, isExpanded, isTechIconsExpanded, onToggleExpanded, onToggleTechIcons, onRefSet
}) => {
    const { visibleFeatures, visibleTechIcons, hasMoreFeatures, hasMoreTechIcons } = useMemo(() => {
        const getVisibleFeatures = (features: string[], isExpanded: boolean) => {
            if (features.length <= 4) return features;
            return isExpanded ? features : features.slice(0, 4);
        };

        const getVisibleTechIcons = (technologies: any[], isExpanded: boolean) => {
            if (technologies.length <= 5) return technologies;
            return isExpanded ? technologies : technologies.slice(0, 5);
        };

        return {
            visibleFeatures: getVisibleFeatures(service.features, isExpanded),
            visibleTechIcons: getVisibleTechIcons(service.technologies, isTechIconsExpanded),
            hasMoreFeatures: service.features.length > 6,
            hasMoreTechIcons: service.technologies.length > 5
        };
    }, [service.features, service.technologies, isExpanded, isTechIconsExpanded]);

    const handleToggleExpanded = useCallback(() => {
        onToggleExpanded(service.id);
    }, [service.id, onToggleExpanded]);

    const handleToggleTechIcons = useCallback(() => {
        onToggleTechIcons(service.id);
    }, [service.id, onToggleTechIcons]);

    const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.style.display = 'none';
        const fallback = e.currentTarget.nextElementSibling as HTMLSpanElement;
        if (fallback) fallback.style.display = 'inline';
    }, []);

    return (
        <div
            key={service.id}
            ref={(el) => onRefSet(el, index)}
            className="group relative"
        >
            <div className="relative bg-[#17151f] backdrop-blur-xl border border-gray-700 rounded-2xl p-8 h-full transition-all duration-500 hover:border-gray-500/50">
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-blue-300 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-50 transition-colors duration-300">
                        {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed font-light">
                        {service.description}
                    </p>

                    <div className="mb-8">
                        <ul className="space-y-3 features-list">
                            {visibleFeatures.map((feature: string, featureIndex: number) => (
                                <li
                                    key={featureIndex}
                                    className="flex items-center text-gray-300"
                                >
                                    <div className="w-1.5 h-1.5 bg-blue-50 rounded-full mr-3 group-hover:bg-blue-300 transition-colors duration-300" />
                                    <span className="text-sm font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {hasMoreFeatures && (
                            <button
                                onClick={handleToggleExpanded}
                                className="mt-4 text-gray-300 hover:text-blue-200 text-sm font-medium transition-colors duration-300 flex items-center gap-1 group/toggle cursor-pointer"
                                aria-label={isExpanded ? 'Show fewer features' : 'Show more features'}
                            >
                                <span>{isExpanded ? 'See less' : 'See more'}</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {visibleTechIcons.map((tech: any, techIndex: number) => (
                            <div
                                key={techIndex}
                                className="group/tech flex items-center gap-2 px-3 py-2 bg-black-300 text-gray-300 rounded-lg text-xs font-medium border border-gray-700 hover:border-blue-300/50 hover:text-blue-50 transition-all duration-300 cursor-default hover:bg-gray-700/50"
                            >
                                <div className="relative w-4 h-4 flex-shrink-0 aspect-square">
                                    {typeof tech.icon === "string" ? (
                                        <Image
                                            src={tech.icon}
                                            alt={tech.name}
                                            fill
                                            className="object-contain tech-icon"
                                            onError={handleImageError}
                                            priority={index < 3}
                                            sizes="16px"
                                            loading={index < 3 ? 'eager' : 'lazy'}
                                        />
                                    ) : (
                                        tech.icon
                                    )}
                                    <span className="hidden text-xs">
                                        {tech.name.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                                <span className="text-xs font-medium">{tech.name}</span>
                            </div>
                        ))}

                        {hasMoreTechIcons && (
                            <button
                                onClick={handleToggleTechIcons}
                                className="group/tech flex items-center gap-2 px-3 py-2 bg-black-300 text-gray-300 rounded-lg text-xs font-medium border border-gray-700 hover:border-blue-300/50 hover:text-blue-50 transition-all duration-300 hover:bg-gray-700/50 cursor-pointer"
                                aria-label={isTechIconsExpanded ? 'Show fewer technologies' : 'Show more technologies'}
                            >
                                <span className="text-xs font-medium">{isTechIconsExpanded ? 'See less' : 'See more'}</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${isTechIconsExpanded ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});

ServiceCard.displayName = 'ServiceCard';

const ServicesSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});
    const [expandedTechIcons, setExpandedTechIcons] = useState<{ [key: string]: boolean }>({});

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo(titleRef.current,
                {
                    opacity: 0,
                    y: 100,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            )
                .fromTo(subtitleRef.current,
                    {
                        opacity: 0,
                        y: 50
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: subtitleRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    },
                    "-=0.9"
                );

            // Batch card animations
            cardsRef.current.forEach((card, index) => {
                if (card) {
                    gsap.fromTo(card,
                        {
                            opacity: 0,
                            y: 80,
                            rotateX: 15
                        },
                        {
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            duration: 1,
                            delay: index * 0.15,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 85%",
                                toggleActions: "play none none reverse",
                                once: true
                            }
                        }
                    );
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = useCallback((el: HTMLDivElement | null, index: number) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current[index] = el;
        }
    }, []);

    const toggleExpanded = useCallback((serviceId: number) => {
        setExpandedCards(prev => ({
            ...prev,
            [serviceId]: !prev[serviceId]
        }));
    }, []);

    const toggleTechIcons = useCallback((serviceId: number) => {
        setExpandedTechIcons(prev => ({
            ...prev,
            [serviceId]: !prev[serviceId]
        }));
    }, []);

    const servicesData = useMemo(() => services, []);

    return (
        <section
            ref={sectionRef}
            className="flex-center relative md:p-0 px-5"
        >
            <GradientSpheres
                sphere1Class={"about-gradient-sphere about-sphere-1"}
                sphere2Class={"about-gradient-sphere about-sphere-2"}
            />

            <div className="container w-full h-full md:mt-40 mt-20 mb-10 relative z-10 px-5 md:p-0">
                <TitleHeader
                    title={"SERVICES"}
                    text={"Transforming ideas into digital reality with cutting-edge technology and innovative solutions that drive measurable business impact."}
                />

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:gap-12 md:mt-20 mt-15">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                            isExpanded={expandedCards[service.id] || false}
                            isTechIconsExpanded={expandedTechIcons[service.id] || false}
                            onToggleExpanded={toggleExpanded}
                            onToggleTechIcons={toggleTechIcons}
                            onRefSet={addToRefs}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;