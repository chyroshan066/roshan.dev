"use client"

import Image from "next/image";
import { Logo } from "./Logo";
import { memo } from "react";
import { FacebookLogoIcon, LinkedinLogoIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import { FooterIconList } from "@/types";

const footerIconsList: FooterIconList[] = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/chyroshan066/",
        icon: <FacebookLogoIcon className="md:size-10 size-8" color="#598eff" weight="bold" />,
    },
    {
        name: "Github",
        href: "https://github.com/chyroshan066",
        icon: "/images/footer-icons/b-github.svg"
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/chyroshan066/",
        icon: <LinkedinLogoIcon className="md:size-10 size-8" color="#598eff" weight="bold" />
    },
    {
        name: "WhatsApp",
        href: "https://web.whatsapp.com/",
        icon: <WhatsappLogoIcon className="md:size-10 size-8" color="#598eff" weight="bold" />
    },
];

const Footer = memo(() => {
    return (
        <footer className="w-full flex-center flex-col md:gap-10 gap-7 bg-black-300 py-10">

            <Logo
                size={"sm"}
                variant={"footer"}
            />

            <nav
                className="flex items-center md:gap-16 gap-8"
                role="navigation"
                aria-label="Social media links"
            >
                {footerIconsList.map(iconData => (
                    <div
                        key={iconData.name}
                        className="cursor-pointer hover:-translate-y-5 transition-all duration-700 hover:will-change-transform"
                    >
                        <div className="relative md:size-10 size-8 aspect-square">
                            <a
                                href={iconData.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                {typeof iconData.icon === "string" ? (
                                    <Image
                                        src={iconData.icon}
                                        alt={`${iconData.name} icon`}
                                        fill
                                        loading="lazy"
                                        sizes="(max-width: 768px) 32px, 40px"
                                    />
                                ) : (
                                    iconData.icon
                                )}
                            </a>
                        </div>
                    </div>
                ))}
            </nav>
            <p className="font-regular md:text-lg text-sm text-center">
                2025 &copy; All rights reserved.
            </p>
        </footer>
    );
});

Footer.displayName = "Footer";

export default Footer;