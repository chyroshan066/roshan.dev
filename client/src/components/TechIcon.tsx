import { iconsListType } from "@/types";
import Image from "next/image";

export const TechIcon = ({
    icon
}: {
    icon: iconsListType
}) => {
    return <>
        <div className="md:w-32 md:h-32 w-20 h-20 bg-black-300 flex-center gradient-border hover:-translate-y-3 transition-all duration-700 marquee-item flex-none">
            <div className="relative md:size-16 size-10 aspect-square">
                <Image
                    src={icon.image}
                    alt={icon.name}
                    fill
                />
            </div>
        </div>
    </>;
}