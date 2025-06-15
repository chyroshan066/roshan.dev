"use client";

import { navItems } from "@/constants";
import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
    const [activeItem, setActiveItem] = useState("Home");
    const pathname = usePathname();

    useEffect(() => {
        const currentNavItem = navItems.find(item => item.href === pathname);
        if (currentNavItem) {
            setActiveItem(currentNavItem.name);
        } else if (pathname === "/") {
            setActiveItem("Home");
        }
    }, [pathname]);

    return (
        <div className="w-full flex-center fixed z-50 top-0 left-0 md:p-0 px-5">
            <div className="container md:my-10 my-5 flex items-center justify-between">

                <Logo
                    size={"3xl"}
                    variant={"default"}
                />

                <div className="md:flex items-center gap-7 hidden">
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className={`relative after:absolute after:bottom-0 after:left-0 after:h-[2px]
               after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left
                hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 ${activeItem === item.name
                                    ? 'after:bg-blue-400 after:scale-x-100 after:origin-bottom-left'
                                    : 'after:bg-gray-200'
                                }`}
                        >
                            <Link
                                className={`text-lg font-bold transition-colors duration-300 ${activeItem === item.name
                                    ? 'text-blue-400'
                                    : 'gradient-title hover:text-blue-300'
                                    }`}
                                href={item.href}
                                onClick={() => setActiveItem(item.name)}
                            >
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};