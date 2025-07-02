"use client";

import { useRef, useCallback, useMemo, memo } from 'react';
import gsap from 'gsap';
import { certificates } from '@/constants';
import { GradientSpheres } from '@/components/blocks/GradientSphere';
import { TitleHeader } from '@/components/blocks/TitleHeader';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { ArrowSquareUpRightIcon, CalendarIcon } from '@phosphor-icons/react';
import { Certificate } from '@/types';

const CertificateCard = memo(({
    cert,
    index,
    onCardRef,
    onImageRef
}: {
    cert: Certificate;
    index: number;
    onCardRef: (el: HTMLDivElement | null, index: number) => void;
    onImageRef: (el: HTMLDivElement | null, index: number) => void;
}) => {
    return (
        <div
            ref={(el) => onCardRef(el, index)}
            className="group relative bg-[#17151f] backdrop-blur-lg border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-500/20"
        >
            <div className="relative h-48 flex items-center justify-center overflow-hidden">
                <div
                    ref={(el) => onImageRef(el, index)}
                    className="relative w-full h-full aspect-square"
                >
                    <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover"
                        {...(index < 3
                            ? {
                                priority: true
                            }
                            : {
                                loading: "lazy"
                            }
                        )}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLDyv3fqfUr85/NNyFcpDDuKQkzEhUk7aM13RKrq7Q=="
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-50 font-semibold text-sm tracking-wide uppercase max-w-65">
                        {cert.organization}
                    </span>
                    <div className="flex items-center text-slate-400 text-sm">

                        <CalendarIcon
                            size={16}
                            weight='bold'
                            className='mr-1'
                        />

                        <time dateTime={cert.date}>{cert.date}</time>
                    </div>
                </div>

                {cert.description && (
                    <p className="text-[#a7a7a7] text-sm leading-relaxed mb-4">
                        {cert.description}
                    </p>
                )}

                {cert.credentialUrl && (
                    <a
                        href={cert.credentialUrl}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200 group-hover:translate-x-1 transform"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View credential for ${cert.title}`}
                    >
                        View Credential

                        <ArrowSquareUpRightIcon
                            size={16}
                            weight='bold'
                            className='ml-2'
                        />

                    </a>
                )}
            </div>
        </div>
    );
});

CertificateCard.displayName = 'CertificateCard';

const CertificateDisplay: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleCardRef = useCallback((el: HTMLDivElement | null, index: number) => {
        cardsRef.current[index] = el;
    }, []);

    const handleImageRef = useCallback((el: HTMLDivElement | null, index: number) => {
        imageRefs.current[index] = el;
    }, []);

    const memoizedCertificates = useMemo(() => certificates, []);

    useGSAP(() => {
        const initAnimations = () => {
            // Wait for images to load before animating
            const imageElements = imageRefs.current.filter(Boolean);
            const cardElements = cardsRef.current.filter(Boolean);

            if (cardElements.length === 0) return;

            gsap.set(imageElements, {
                scale: 1.5,
                willChange: 'transform'
            });

            gsap.set(cardElements, {
                opacity: 0,
                y: 50,
                scale: 0.9,
                rotationX: 20,
                willChange: 'transform, opacity'
            });

            gsap.to(cardElements, {
                opacity: 1,
                y: 0,
                scale: 1,
                rotationX: 0,
                duration: 0.6,
                stagger: 0.1,
                delay: 0.3,
                ease: "power2.out",
                onComplete: () => {
                    gsap.set(cardElements, { willChange: 'auto' });
                }
            });

            cardElements.forEach((card, index) => {
                if (!card) return;

                const imageEl = imageElements[index];
                let hoverTween: gsap.core.Tween | null = null;
                let imageTween: gsap.core.Tween | null = null;

                const handleMouseEnter = () => {
                    // Kill existing tweens to prevent conflicts
                    if (hoverTween) hoverTween.kill(); // Tween is short for "in-between"
                    if (imageTween) imageTween.kill();

                    hoverTween = gsap.to(card, {
                        scale: 1.05,
                        y: -10,
                        duration: 0.3,
                        ease: "power2.out",
                        willChange: 'transform'
                    });

                    if (imageEl) {
                        imageTween = gsap.to(imageEl, {
                            scale: 1,
                            duration: 0.4,
                            ease: "power2.out",
                            willChange: 'transform'
                        });
                    }
                };

                const handleMouseLeave = () => {
                    if (hoverTween) hoverTween.kill();
                    if (imageTween) imageTween.kill();

                    hoverTween = gsap.to(card, {
                        scale: 1,
                        y: 0,
                        duration: 0.3,
                        ease: "power2.out",
                        willChange: 'auto'
                    });

                    if (imageEl) {
                        imageTween = gsap.to(imageEl, {
                            scale: 1.5, // Reduced from 2 for better performance
                            duration: 0.4,
                            ease: "power2.out",
                            willChange: 'auto'
                        });
                    }
                };

                card.addEventListener('mouseenter', handleMouseEnter, { passive: true });
                card.addEventListener('mouseleave', handleMouseLeave, { passive: true });

                return () => {
                    card.removeEventListener('mouseenter', handleMouseEnter);
                    card.removeEventListener('mouseleave', handleMouseLeave);
                    if (hoverTween) hoverTween.kill();
                    if (imageTween) imageTween.kill();
                };
            });
        };

        requestAnimationFrame(initAnimations);
    }, []);

    return (
        <section
            ref={containerRef}
            className="flex-center relative"
        >

            <GradientSpheres
                sphere1Class={"projects-gradient-sphere projects-sphere-1"}
                sphere2Class={"projects-gradient-sphere projects-sphere-2"}
            />

            <div className="container w-full h-full md:my-40 my-20 relative z-10 md:px-0 px-6">

                <TitleHeader
                    title={"CERTIFICATIONS"}
                    text={"Validated skills through industry-recognized certifications and training."}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mt-20 mt-15">

                    {memoizedCertificates.map((cert, index) => (
                        <CertificateCard
                            key={cert.id}
                            cert={cert}
                            index={index}
                            onCardRef={handleCardRef}
                            onImageRef={handleImageRef}
                        />
                    ))}

                </div>

                <div className="text-center mt-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 animate-pulse">

                        <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M5 16L3 21l5.5-2L12 21l3.5-2L21 21l-2-5m-2-3.5A2.5 2.5 0 0 1 14.5 15A2.5 2.5 0 0 1 12 12.5A2.5 2.5 0 0 1 14.5 10A2.5 2.5 0 0 1 17 12.5M7 12.5A2.5 2.5 0 0 1 9.5 15A2.5 2.5 0 0 1 7 12.5A2.5 2.5 0 0 1 9.5 10A2.5 2.5 0 0 1 12 12.5M12 7a5 5 0 0 1 5 5v1a5 5 0 0 1-10 0v-1a5 5 0 0 1 5-5z" />
                        </svg>

                    </div>
                    <p className="text-slate-400 text-lg">
                        Continuously learning and growing in the world of web development
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CertificateDisplay;