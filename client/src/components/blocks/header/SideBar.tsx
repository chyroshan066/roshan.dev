"use client";

import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";

export const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("Home");
    const pathname = usePathname();

    const toggleSideBar = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = (itemName: string) => {
        setActiveItem(itemName);
        setTimeout(() => toggleSideBar(), 300);
    };

    useGSAP(() => {
        const tl = gsap.timeline();

        if (isOpen) {
            tl.to(".side-bar-bg", {
                x: 0,
                opacity: 1,
                ease: "power2.inOut",
            });
            tl.to(
                ".side-bar-item",
                {
                    opacity: 1,
                    stagger: 0.05,
                    ease: "power2.inOut",
                },
                "<"
            );
        } else {
            tl.to(".side-bar-bg", {
                x: "100%",
                opacity: 0,
                ease: "power2.inOut",
            });
            tl.to(".side-bar-item", {
                opacity: 0,
            });
        }
    }, [isOpen]);

    useEffect(() => {
        const currentNavItem = navLinks.find(item => item.href === pathname);
        if (currentNavItem) {
            setActiveItem(currentNavItem.name);
        } else if (pathname === "/") {
            setActiveItem("Home");
        }
    }, [pathname]);

    return (
        <div className="md:hidden block">
            <div
                className="fixed top-0 right-0 z-50 p-4"
                onClick={toggleSideBar}
            >
                <button className="text-white text-2xl">
                    ☰
                </button>
            </div>
            {/* Overlay - closes sidebar when clicked */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30"
                    onClick={toggleSideBar}
                />
            )}
            <div className="side-bar-bg fixed top-0 right-0 h-full w-80 z-40 transform translate-x-full opacity-0">
                <div className="p-6 pt-16">
                    <div className="flex flex-col space-y-6">
                        {navLinks.map((item, index) => (
                            <div
                                key={index}
                                className="side-bar-item opacity-0 cursor-pointer"
                            >
                                <a
                                    className={`relative text-lg font-bold transition-colors duration-300 
                                    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full 
                                    after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left
                                    hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300
                                    ${activeItem === item.name
                                            ? 'text-blue-400 after:bg-blue-400 after:scale-x-100 after:origin-bottom-left'
                                            : 'text-white after:bg-gray-200'
                                        }`}
                                    href={item.href}
                                    onClick={() => handleNavClick(item.name)}
                                >
                                    {item.name}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};