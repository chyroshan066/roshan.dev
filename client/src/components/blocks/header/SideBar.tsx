"use client";

import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";

export const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const sideBarRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<HTMLDivElement[]>([]);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    // Initialize activeStates with false values to ensure consistent SSR
    const [activeStates, setActiveStates] = useState(navLinks.map(() => false));

    useEffect(() => {
        // Update active states after hydration
        setActiveStates(
            navLinks.map(link =>
                pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/")
            )
        );
    }, [pathname]);

    //explain
    const toggleSideBar = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    // Optimized nav click handler with useCallback
    const handleNavClick = useCallback((itemName: string) => {
        setTimeout(toggleSideBar, 300);
    }, [toggleSideBar]);

    // const activeStates = useMemo(() => {
    //     return navLinks.map(link =>
    //         pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/")
    //     );
    // }, [pathname]);

    useGSAP(() => {
        if (!sideBarRef.current) return;

        // Reuse timeline instead of creating new one
        if (!timelineRef.current) {
            timelineRef.current = gsap.timeline({ paused: true });

            // Set up animations once
            timelineRef.current
                .set(sideBarRef.current, { x: "100%", opacity: 0 })
                .to(sideBarRef.current, {
                    x: 0,
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.inOut",
                })
                .to(
                    itemsRef.current,
                    {
                        opacity: 1,
                        duration: 0.3,
                        stagger: 0.05,
                        ease: "power2.inOut",
                    },
                    "<0.1"
                );
        }

        // Control playback direction instead of recreating animations
        if (isOpen) {
            timelineRef.current.play();
        } else {
            timelineRef.current.reverse();
        }

        // Cleanup function
        return () => {
            timelineRef.current?.kill();
            timelineRef.current = null;
        };
    }, [isOpen]);

    // Ref callback for nav items
    const setItemRef = useCallback((el: HTMLDivElement | null, index: number) => {
        if (el) {
            itemsRef.current[index] = el;
        }
    }, []);

    const baseLinkClass = "relative inline-block text-lg font-bold transition-colors duration-300";
    const activeLinkClass = "text-blue-400 after:bg-blue-400 after:w-full after:scale-x-100";
    const inactiveLinkClass = "text-white after:bg-gray-200 after:w-full after:scale-x-0 after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left";

    return (
        <div className="md:hidden block">
            <button
                className="fixed top-0 right-0 z-50 p-4 text-white text-2xl cursor-pointer"
                onClick={toggleSideBar}
                aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
                aria-expanded={isOpen}
            >
                {isOpen ? "✕" : "☰"}
            </button>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-30 bg-black transition-opacity duration-300 ${isOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={toggleSideBar}
                aria-hidden={!isOpen}
            />

            {/* Sidebar */}
            <div
                ref={sideBarRef}
                className="side-bar-bg fixed top-0 right-0 h-full w-80 z-40 transform translate-x-full opacity-0"
                role="navigation"
                aria-label="Mobile navigation"
            >
                <div className="p-6 pt-16">
                    <nav className="flex flex-col space-y-6">
                        {navLinks.map((link, index) => (
                            <div
                                key={link.href}
                                ref={(el) => setItemRef(el, index)}
                                className="side-bar-item opacity-0 cursor-pointer"
                            >
                                <a
                                    className={`${baseLinkClass} 
                                        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:ease-in-out after:duration-300
                                        ${activeStates[index]
                                            ? activeLinkClass : inactiveLinkClass
                                        }`}
                                    href={link.href}
                                    onClick={() => handleNavClick(link.name)}
                                    aria-current={activeStates[index] ? "page" : undefined}
                                >
                                    {link.name}
                                </a>
                            </div>
                        ))}
                    </nav>
                </div>
            </div>
        </div >
    );
};