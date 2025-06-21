import { cn } from "@/utils/clsx";
import Link from "next/link";
import { memo } from "react";

type LinkButtonProps = {
    btnText: string;
    href: string;
    className?: string;
}

const DEFAULT_STYLES = "cursor-pointer inline-block w-full sm:w-auto px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-all duration-300 text-center";

export const LinkButton = memo(({
    btnText, href, className
}: LinkButtonProps) => {
    return (
        <Link
            href={href}
            prefetch={false}
            className={cn(DEFAULT_STYLES, className)}
        >
            {btnText}
        </Link>
    );
});

LinkButton.displayName = "LinkButton";