'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectType } from '@/types';
import { projects } from '@/constants';
import { TitleHeader } from '@/components/blocks/TitleHeader';
import Image from 'next/image';
import { GradientSpheres } from '@/components/blocks/GradientSphere';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export const ProjectsSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'all' | 'personal' | 'client'>('all');
    const [filteredProjects, setFilteredProjects] = useState<projectType[]>(projects);

    // Refs for GSAP animations
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const tabsRef = useRef<HTMLDivElement>(null);
    const projectsGridRef = useRef<HTMLDivElement>(null);
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Filter projects based on active tab
    useEffect(() => {
        const filtered = activeTab === 'all'
            ? projects
            : projects.filter(project => project.category === activeTab);

        setFilteredProjects(filtered);
    }, [activeTab]);

    // GSAP animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial animation for section entrance
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            });

            // Animate title
            tl.fromTo(titleRef.current,
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power3.out'
                }
            );

            // Animate tabs
            tl.fromTo(tabsRef.current?.children || [],
                {
                    opacity: 0,
                    y: 30,
                    rotationX: -15
                },
                {
                    opacity: 1,
                    y: 0,
                    rotationX: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out'
                },
                '-=0.4'
            );

            // Animate project cards
            tl.fromTo(projectRefs.current.filter(Boolean),
                {
                    opacity: 0,
                    y: 60,
                    scale: 0.8,
                    rotationY: -15
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotationY: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out'
                },
                '-=0.3'
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Animate project cards when filtering
    useEffect(() => {
        if (projectsGridRef.current) {
            const validRefs = projectRefs.current.filter(Boolean);

            gsap.fromTo(validRefs,
                {
                    opacity: 0,
                    scale: 0.8,
                    y: 30
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: 'power2.out'
                }
            );
        }
    }, [filteredProjects]);

    const handleTabChange = (tab: 'all' | 'personal' | 'client') => {
        if (tab !== activeTab) {
            // Animate out current projects
            gsap.to(projectRefs.current.filter(Boolean), {
                opacity: 0,
                scale: 0.9,
                y: -20,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => {
                    setActiveTab(tab);
                }
            });
        }
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
                    title={"PROJECTS"}
                    text={"Discover a selection of projects I've crafted with precision and passion, showcasing innovative solutions and creative implementations."}
                />

                <div className="md:mt-20 mt-10">
                    <div
                        ref={tabsRef}
                        className="flex justify-center mb-12 space-x-2"
                    >
                        {[
                            { key: 'all', label: 'All' },
                            { key: 'personal', label: 'Personal' },
                            { key: 'client', label: 'Client' }
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => handleTabChange(tab.key as 'all' | 'personal' | 'client')}
                                className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm border-2 hover:scale-105 active:scale-95 ${activeTab === tab.key
                                    ? 'bg-blue-300 text-white border-transparent shadow-lg shadow-blue-500/25'
                                    : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20 hover:text-white hover:border-white/40'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div
                        ref={projectsGridRef}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                ref={(el) => {
                                    if (el) projectRefs.current[index] = el;
                                }}
                                className="group relative bg-black-300/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-500/10 hover:-translate-y-2"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />
                                    <div className="relative w-full h-full aspect-square group-hover:scale-110 transition-transform duration-700">
                                        <Image
                                            src={project.img}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="absolute top-4 right-4 z-20 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.liveURL && (
                                            <a
                                                href={project.liveURL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-blue-50 rounded-full hover:bg-blue-300 transition-colors"
                                            >
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}
                                        {project.githubURL && (
                                            <a
                                                href={project.githubURL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-gray-500 rounded-full hover:bg-gray-700 transition-colors"
                                            >
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-50 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies && (
                                            project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-3 py-1 bg-black-300 text-gray-300 border-gray-700 hover:border-blue-300/50 hover:text-blue-50 text-sm rounded-full border hover:bg-gray-700/50"
                                                >
                                                    {tech}
                                                </span>
                                            )))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">🚀</div>
                            <h3 className="text-2xl font-bold text-white mb-2">No Projects Found</h3>
                            <p className="text-gray-300">Try switching to a different category.</p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};