"use client";

import { testimonialType } from "@/types";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";

export const TestimonialCard = ({
    testimonial
}: {
    testimonial: testimonialType
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTextTruncated, setIsTextTruncated] = useState(false);
    const [mounted, setMounted] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const checkTextTruncation = useCallback(() => {
        if (textRef.current) {
            const element = textRef.current;
            setIsTextTruncated(element.scrollHeight > element.clientHeight);
        }
    }, []);

    useEffect(() => {
        checkTextTruncation();
        window.addEventListener('resize', checkTextTruncation);

        return () => {
            window.removeEventListener('resize', checkTextTruncation);
        };
    }, [testimonial.review, checkTextTruncation]);

    const handleEscape = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setIsModalOpen(false);
        }
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const openModal = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen, handleEscape]);

    const socialLinks = useMemo(() => {
        const links: React.ReactElement[] = [];
        const socialPlatforms = [
            {
                url: testimonial.facebookUrl,
                icon: '/images/social-icons/fb.svg',
                alt: 'Facebook'
            },
            {
                url: testimonial.linkedinUrl,
                icon: '/images/social-icons/linkedin.svg',
                alt: 'LinkedIn'
            },
            {
                url: testimonial.instagramUrl,
                icon: '/images/social-icons/insta.svg',
                alt: 'Instagram'
            },
            {
                url: testimonial.xUrl,
                icon: '/images/social-icons/x.svg',
                alt: 'X (Twitter)'
            },
            {
                url: testimonial.tiktokUrl,
                icon: '/images/social-icons/tiktok.svg',
                alt: 'TikTok'
            }
        ];

        socialPlatforms.forEach((platform, index) => {
            if (platform.url) {
                links.push(
                    <a
                        key={platform.alt}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${platform.alt} profile`}
                    >
                        <div className="relative md:size-12 size-5 aspect-square">
                            <Image
                                src={platform.icon}
                                alt={platform.alt}
                                fill
                                sizes="(max-width: 768px) 20px, 48px"
                                className="group-hover:mix-blend-luminosity transition-all duration-700"
                            />
                        </div>
                    </a>
                );
            }
        });

        return links;
    }, [testimonial.facebookUrl, testimonial.linkedinUrl, testimonial.instagramUrl, testimonial.xUrl, testimonial.tiktokUrl]);

    const modalSocialLinks = useMemo(() => {
        const links: React.ReactElement[] = [];
        const socialPlatforms = [
            {
                url: testimonial.facebookUrl,
                icon: '/images/social-icons/fb.svg',
                alt: 'Facebook'
            },
            {
                url: testimonial.linkedinUrl,
                icon: '/images/social-icons/linkedin.svg',
                alt: 'LinkedIn'
            },
            {
                url: testimonial.instagramUrl,
                icon: '/images/social-icons/insta.svg',
                alt: 'Instagram'
            },
            {
                url: testimonial.xUrl,
                icon: '/images/social-icons/x.svg',
                alt: 'X (Twitter)'
            },
            {
                url: testimonial.tiktokUrl,
                icon: '/images/social-icons/tiktok.svg',
                alt: 'TikTok'
            }
        ];

        socialPlatforms.forEach((platform, index) => {
            if (platform.url) {
                links.push(
                    <a
                        key={platform.alt}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${platform.alt} profile`}
                    >
                        <div className="relative w-8 h-8 lg:w-10 lg:h-10 aspect-square opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                            <Image
                                src={platform.icon}
                                alt={platform.alt}
                                fill
                                sizes="(max-width: 1024px) 32px, 40px"
                                className="filter invert"
                            />
                        </div>
                    </a>
                );
            }
        });

        return links;
    }, [testimonial.facebookUrl, testimonial.linkedinUrl, testimonial.instagramUrl, testimonial.xUrl, testimonial.tiktokUrl]);

    // Modal component to be rendered via portal
    const Modal = useMemo(() => {
        const ModalComponent = () => (
            <div
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={closeModal}
            >
                <div
                    className="relative bg-gray-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100 border border-gray-700"
                    onClick={(e) => e.stopPropagation()}  // prevents event bubbling upto parent div
                >
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 border border-gray-600 cursor-pointer"
                        aria-label="Close modal"
                    >
                        <Image
                            src="/images/x.png"
                            alt="close"
                            width={20}
                            height={20}
                            className="text-gray-300"
                        />
                    </button>

                    {/* Modal Content */}
                    <div className="p-6 md:p-10">
                        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
                            <div className="flex items-center md:items-start gap-4 md:gap-6 md:flex-col">
                                <div className="relative w-20 h-20 md:w-24 md:h-24 aspect-square flex-shrink-0">
                                    <Image
                                        src={testimonial.imgPath}
                                        alt={`${testimonial.name} profile picture`}
                                        fill
                                        sizes="(max-width: 768px) 80px, 96px"
                                        className="rounded-full border-2 border-blue-400"
                                        priority={isModalOpen}
                                    />
                                </div>
                                <div className="relative w-12 h-12 md:w-16 md:h-16 aspect-square opacity-30 flex-shrink-0">
                                    <Image
                                        src="/images/quote.png"
                                        alt="Quote decoration"
                                        fill
                                        sizes="(max-width: 768px) 48px, 64px"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="mb-6 md:mb-8">
                                    <p className="text-gray-200 text-base md:text-lg xl:text-xl leading-relaxed whitespace-pre-line">
                                        {testimonial.review}
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-700">
                                    <div className="min-w-0">
                                        <h3 className="text-lg md:text-xl xl:text-2xl font-semibold text-blue-400 mb-1 truncate">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-400 opacity-80">
                                            {testimonial.pos}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 flex-shrink-0">
                                        {modalSocialLinks}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return ModalComponent;
    }, [testimonial, closeModal, modalSocialLinks, isModalOpen]);

    return (
        <>
            <div className="col-span-1 bg-black-300 group rounded-xl testimonial-card lg:min-h-[77vh] hover:bg-blue-300 transition-all duration-700">
                <div className="p-10 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div className="relative md:w-36 md:h-36 w-24 h-24 aspect-square">
                            <Image
                                src={testimonial.imgPath}
                                alt={`${testimonial.name} profile picture`}
                                fill
                                sizes="(max-width: 768px) 96px, 144px"
                                className="border border-transparent rounded-full group-hover:border-white group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-700"
                                priority
                            />
                        </div>
                        <div className="relative md:w-28 md:h-28 w-14 h-14 aspect-square">
                            <Image
                                src="/images/quote.png"
                                alt="Quote decoration"
                                fill
                                sizes="(max-width: 768px) 56px, 112px"
                                className="group-hover:mix-blend-screen transition-all duration-700"
                            />
                        </div>
                    </div>
                    <div className="mt-10">
                        <p
                            ref={textRef}
                            className="md:text-2xl font-light group-hover:text-white-50 transition-all duration-700 line-clamp-3 sm:line-clamp-2"
                        >
                            {testimonial.review}
                        </p>
                        {isTextTruncated && (
                            <button
                                onClick={openModal}
                                className="text-blue-50 hover:text-blue-100 transition-colors duration-200 mt-2 text-sm md:text-base font-medium group-hover:text-white cursor-pointer"
                            >
                                See More
                            </button>
                        )}
                    </div>
                    <div className="flex sm:flex-row flex-col md:items-center justify-between md:mt-10 mt-5">
                        <div>
                            <h1 className="text-blue-50 md:text-3xl text-lg font-medium mb-1 group-hover:text-white transition-all duration-700">
                                {testimonial.name}
                            </h1>
                            <p className="md:text-xl text-sm opacity-70 font-light group-hover:text-white-50 transition-all duration-700 line-clamp-1">
                                {testimonial.pos}
                            </p>
                        </div>
                        <div className="flex items-center gap-3 md:mt-0 mt-5">
                            {socialLinks}
                        </div>
                    </div>
                </div>
            </div>

            {/* "createPortal" renders a component outside its normal DOM hierarchy. */}
            {mounted && isModalOpen && createPortal(<Modal />, document.body)}
        </>
    );
};
