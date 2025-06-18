import { cn } from "@/utils/clsx";
import { memo } from "react";

type TitleHeaderProps = {
    title: string;
    text?: string;
    className?: string;
}

export const TitleHeader = memo<TitleHeaderProps>(({
    title, text, className
}) => {
    const titleClassName = cn(
        "gradient-title font-semibold md:text-6xl text-4xl uppercase",
        className
    );

    return <>
        <div className="flex justify-between items-center">
            <div>
                <h1 className={titleClassName}>{title}</h1>
                {text && (
                    <p className="md:text-3xl md:mt-5">{text}</p>
                )}
            </div>
        </div>
    </>;
});

TitleHeader.displayName = 'TitleHeader';