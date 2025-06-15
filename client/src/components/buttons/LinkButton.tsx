import { cn } from "@/utils/clsx";
import Link from "next/link";

export const LinkButton = ({
    btnText, href, className
}: {
    btnText: string, href: string, className?: string
}) => {
    return <>
        <Link
            href={href}
            className={cn("cursor-pointer inline-block w-full sm:w-auto px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-all duration-300 text-center", className)}
        >
            {btnText}
        </Link>
    </>;
}