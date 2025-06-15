import { cn } from "@/utils/clsx";

export const SubmitButton = ({
    btnText, className
}: {
    btnText: string, className?: string
}) => {
    return <>
        <button
            type="submit"
            className={cn("cursor-pointer w-full py-4 bg-blue-50 text-white-50 font-semibold rounded-md hover:bg-blue-600 transition-all duration-300", className)}
        >
            {btnText}
        </button>
    </>;
}