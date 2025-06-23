"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/blocks/Logo";
import { memo, useMemo } from "react";

const NavItem = memo(({
    link, isActive
}: {
    link: { name: string; href: string },
    isActive: boolean
}) => {
    const containerClasses = useMemo(() =>
        `relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 ${isActive
            ? 'after:bg-blue-400 after:scale-x-100 after:origin-bottom-left'
            : 'after:bg-gray-200'
        }`, [isActive]
    );

    const linkClasses = useMemo(() =>
        `text-lg font-bold transition-colors duration-300 ${isActive
            ? 'text-blue-400'
            : 'gradient-title hover:text-blue-300'
        }`, [isActive]
    );

    return (
        <div className={containerClasses}>
            <Link
                className={linkClasses}
                href={link.href}
            >
                {link.name}
            </Link>
        </div>
    );
});

NavItem.displayName = 'NavItem';

export const NavBar: React.FC = () => {
    const pathname = usePathname();

    const navItemsWithActiveState = useMemo(() =>
        navLinks.map(link => ({
            ...link,
            isActive: pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/")
        })), [pathname]
    );

    return (
        <div className="w-full flex-center fixed z-50 top-0 left-0 md:p-0 px-5">
            <div className="container md:my-10 my-5 flex items-center justify-between">

                <Logo size={"3xl"} />

                <nav
                    className="md:flex items-center gap-7 hidden"
                    role="navigation"
                    aria-label="Main navigation"
                >
                    {navItemsWithActiveState.map(link => (
                        <NavItem
                            key={link.href} // Use href as key for better stability
                            link={link}
                            isActive={link.isActive}
                        />
                    ))}
                </nav>
            </div>
        </div>
    );
};

NavBar.displayName = 'NavBar';