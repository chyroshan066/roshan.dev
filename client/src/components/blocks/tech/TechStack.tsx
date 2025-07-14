"use client";

import { TechIcon } from "./TechIcon";
import { TitleHeader } from "../TitleHeader";
import { memo, useMemo } from 'react';
import { FigmaLogoIcon } from "@phosphor-icons/react";
import { IconsList } from "@/types";

export const iconsList: IconsList[] = [
    {
        name: "HTML",
        image: "/images/tech-icons/html.svg",
    },
    {
        name: "CSS",
        image: "/images/tech-icons/css.svg",
    },
    {
        name: "JavaScript",
        image: "/images/tech-icons/js.svg",
    },
    {
        name: "VS Code",
        image: "/images/tech-icons/vs-code.svg",
    },
    {
        name: "TypeScript",
        image: "/images/tech-icons/ts.svg",
    },
    {
        name: "Git",
        image: "/images/tech-icons/git.svg",
    },
    {
        name: "Github",
        image: "/images/tech-icons/github.svg",
    },
    {
        name: "Figma",
        image: <FigmaLogoIcon className="md:size-16 size-10" color="#a7a7a7" weight="bold" />,
    },
    {
        name: "React",
        image: "/images/tech-icons/react.svg",
    },
    // {
    //   name: "next",
    //   image: "",
    // },
    {
        name: "Redux Toolkit",
        image: "/images/tech-icons/redux.svg",
    },
    {
        name: "GSAP",
        image: "/images/tech-icons/gsap.svg",
    },
    {
        name: "Node.js",
        image: "/images/tech-icons/node.svg",
    },
    {
        name: "Express.js",
        image: "/images/tech-icons/express.svg",
    },
    {
        name: "PostgreSQL",
        image: "/images/tech-icons/postgresql.svg",
    },
    {
        name: "Prisma ORM",
        image: "/images/tech-icons/prisma.svg",
    },
    // {
    //   name: "aws",
    //   image: "/images/tech-icons/aws.svg",
    // },
];

const TechStack = memo(() => {
    const duplicatedIcons = useMemo(() => {
        return [...iconsList, ...iconsList, ...iconsList];
    }, []);

    const iconComponents = useMemo(() => {
        return duplicatedIcons.map((icon, index) => (
            <TechIcon
                key={`tech-icon-${index}`}
                icon={icon}
            />
        ));
    }, [duplicatedIcons]);

    return <>
        <div className="w-full h-full">
            <div className="mx-auto px-5">

                <TitleHeader
                    title={"TECH STACK"}
                    text={"My Go-To Tools for Crafting Solutions"}
                />

            </div>

            {/* Tech Icons Display */}
            <div className="md:mt-20 mt-10 relative">
                <div className="marquee-container overflow-hidden">
                    <div className="marquee-content flex md:gap-12 gap-5 animate-marquee">

                        {iconComponents}

                    </div>
                </div>
            </div>
        </div>
    </>;
});

TechStack.displayName = 'TechStack';

export default TechStack;