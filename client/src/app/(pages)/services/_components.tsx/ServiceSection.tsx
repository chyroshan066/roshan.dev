'use client';

import React, { useRef, useState } from 'react';
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

export const ServicesSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});
    const [expandedTechIcons, setExpandedTechIcons] = useState<{ [key: string]: boolean }>({});

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(titleRef.current,
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
            );

            gsap.fromTo(subtitleRef.current,
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.3,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: subtitleRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

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
                            delay: index * 0.2,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 85%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );

                    const handleMouseEnter = () => {
                        gsap.to(card, {
                            y: -10,
                            scale: 1.02,
                            duration: 0.4,
                            ease: "power2.out"
                        });
                    };

                    const handleMouseLeave = () => {
                        gsap.to(card, {
                            y: 0,
                            scale: 1,
                            duration: 0.4,
                            ease: "power2.out"
                        });
                    };

                    card.addEventListener('mouseenter', handleMouseEnter);
                    card.addEventListener('mouseleave', handleMouseLeave);

                    return () => {
                        card.removeEventListener('mouseenter', handleMouseEnter);
                        card.removeEventListener('mouseleave', handleMouseLeave);
                    };
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToRefs = (el: HTMLDivElement | null, index: number) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current[index] = el;
        }
    };

    const toggleExpanded = (serviceId: number) => {
        setExpandedCards(prev => ({
            ...prev,
            [serviceId]: !prev[serviceId]
        }));
    };

    const toggleTechIcons = (serviceId: number) => {
        setExpandedTechIcons(prev => ({
            ...prev,
            [serviceId]: !prev[serviceId]
        }));
    };

    const getVisibleFeatures = (features: string[], serviceId: number, isExpanded: boolean) => {
        if (features.length <= 4) return features;
        return isExpanded ? features : features.slice(0, 4);
    };

    const getVisibleTechIcons = (technologies: any[], serviceId: number, isExpanded: boolean) => {
        if (technologies.length <= 5) return technologies;
        return isExpanded ? technologies : technologies.slice(0, 5);
    };

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
                    {services.map((service, index) => {
                        const isExpanded = expandedCards[service.id] || false;
                        const isTechIconsExpanded = expandedTechIcons[service.id] || false;
                        const visibleFeatures = getVisibleFeatures(service.features, service.id, isExpanded);
                        const visibleTechIcons = getVisibleTechIcons(service.technologies, service.id, isTechIconsExpanded);
                        const hasMoreFeatures = service.features.length > 6;
                        const hasMoreTechIcons = service.technologies.length > 5;

                        return (
                            <div
                                key={service.id}
                                ref={(el) => addToRefs(el, index)}
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
                                                {visibleFeatures.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="flex items-center text-gray-300">
                                                        <div className="w-1.5 h-1.5 bg-blue-50 rounded-full mr-3 group-hover:bg-blue-300 transition-colors duration-300" />
                                                        <span className="text-sm font-medium">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {hasMoreFeatures && (
                                                <button
                                                    onClick={() => toggleExpanded(service.id)}
                                                    className="mt-4 text-gray-300 hover:text-blue-200 text-sm font-medium transition-colors duration-300 flex items-center gap-1 group/toggle"
                                                >
                                                    <span>{isExpanded ? 'See less' : 'See more'}</span>
                                                    <svg
                                                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            {visibleTechIcons.map((tech, techIndex) => (
                                                <div
                                                    key={techIndex}
                                                    className="group/tech flex items-center gap-2 px-3 py-2 bg-black-300 text-gray-300 rounded-lg text-xs font-medium border border-gray-700 hover:border-blue-300/50 hover:text-blue-50 transition-all duration-300 cursor-default hover:bg-gray-700/50"
                                                >
                                                    <div className="relative w-4 h-4 flex-shrink-0 aspect-square">
                                                        <Image
                                                            src={tech.icon}
                                                            alt={tech.name}
                                                            fill
                                                            className="object-contain tech-icon"
                                                            onError={(e) => {
                                                                e.currentTarget.style.display = 'none';
                                                                const fallback = e.currentTarget.nextElementSibling as HTMLSpanElement;
                                                                if (fallback) fallback.style.display = 'inline';
                                                            }}
                                                        />
                                                        <span className="hidden text-xs">
                                                            {tech.name.charAt(0).toUpperCase()}
                                                        </span>
                                                    </div>
                                                    <span className="text-xs font-medium">{tech.name}</span>
                                                </div>
                                            ))}

                                            {hasMoreTechIcons && (
                                                <button
                                                    onClick={() => toggleTechIcons(service.id)}
                                                    className="group/tech flex items-center gap-2 px-3 py-2 bg-black-300 text-gray-300 rounded-lg text-xs font-medium border border-gray-700 hover:border-blue-300/50 hover:text-blue-50 transition-all duration-300 hover:bg-gray-700/50"
                                                >
                                                    <span className="text-xs font-medium">{isTechIconsExpanded ? 'See less' : 'See more'}</span>
                                                    <svg
                                                        className={`w-4 h-4 transition-transform duration-300 ${isTechIconsExpanded ? 'rotate-180' : ''}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
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
                    })}
                </div>

            </div>
        </section>
    );
};