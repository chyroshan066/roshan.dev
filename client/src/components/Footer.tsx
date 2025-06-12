import { footerIconsList } from "@/constants";
import Image from "next/image";

export const Footer = () => {
    return <>
        <div className="w-full flex-center flex-col md:gap-10 gap-7 bg-black-300 py-10">
            <Image
                src="/images/logo.png"
                alt="logo"
                width={28}
                height={28}
                className="object-cover object-center"
            />
            <div className="flex items-center md:gap-16 gap-8">
                {footerIconsList.map((icon, index) => (
                    <div
                        key={index}
                        className="cursor-pointer hover:-translate-y-5 transition-all duration-700"
                    >
                        <div className="relative md:size-10 size-8 aspect-square">
                            <Image
                                src={icon.icon}
                                alt={icon.name}
                                fill
                            />
                        </div>
                    </div>
                ))}
            </div>
            <p className="font-regular md:text-lg text-sm">2025 &#169; All rights reserved.</p>
        </div>
    </>;
}