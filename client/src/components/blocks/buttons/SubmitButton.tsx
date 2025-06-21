import { cn } from "@/utils/clsx";
import { memo } from "react";

type SubmitButtonProps = {
    btnText: string;
    className?: string;
    disabled?: boolean;
}

const DEFAULT_STYLES = "cursor-pointer w-full py-4 bg-blue-50 text-white-50 font-semibold rounded-md hover:bg-blue-600 transition-all duration-300";

export const SubmitButton = memo(({
    btnText, className, disabled
}: SubmitButtonProps) => {
    return (
        <button
            type="submit"
            disabled={disabled}
            className={cn(
                DEFAULT_STYLES,
                disabled && "opacity-50 cursor-not-allowed", className)}
        >
            {btnText}
        </button>
    );
});

SubmitButton.displayName = "SubmitButton";