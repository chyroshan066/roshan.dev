import { footerIconsList } from "@/constants";
import Image from "next/image";
import { Logo } from "./Logo";

export const Footer = () => {
    return <>
        <div className="w-full flex-center flex-col md:gap-10 gap-7 bg-black-300 py-10">

            <Logo
                size={"sm"}
                variant={"footer"}
            />

            <div className="flex items-center md:gap-16 gap-8">
                {footerIconsList.map((icon, index) => (
                    <div
                        key={index}
                        className="cursor-pointer hover:-translate-y-5 transition-all duration-700"
                    >
                        <div className="relative md:size-10 size-8 aspect-square">
                            <a
                                href={icon.href}
                                target="_blank"
                            >
                                <Image
                                    src={icon.icon}
                                    alt={icon.name}
                                    fill
                                />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <p className="font-regular md:text-lg text-sm">2025 &#169; All rights reserved.</p>
        </div>
    </>;
}