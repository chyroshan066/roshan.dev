"use client";

import { memo, useEffect, useState } from "react";
import { BugIcon, CheckCircleIcon, InfoIcon, WarningIcon, XIcon } from "@phosphor-icons/react";

type AlertType = "success" | "error" | "warning" | "info";

type AlertProps = {
    type: AlertType;
    title?: string;
    message: string;
    isVisible: boolean;
    onDismiss: () => void;
    autoDismiss?: boolean;
    autoDismissDelay?: number;
    className?: string;
}

const alertIcons = {
    success: CheckCircleIcon,
    error: BugIcon,
    warning: WarningIcon,
    info: InfoIcon,
} as const;

const alertStyles = {
    success: {
        container: "bg-emerald-900/20 border-emerald-500/30 backdrop-blur-sm",
        icon: "text-emerald-400",
        title: "text-emerald-300",
        message: "text-emerald-200",
        closeButton: "text-emerald-300 hover:text-emerald-100 hover:bg-emerald-800/30",
    },
    error: {
        container: "bg-red-900/20 border-red-500/30 backdrop-blur-sm",
        icon: "text-red-400",
        title: "text-red-300",
        message: "text-red-200",
        closeButton: "text-red-300 hover:text-red-100 hover:bg-red-800/30",
    },
    warning: {
        container: "bg-yellow-900/20 border-yellow-500/30 backdrop-blur-sm",
        icon: "text-yellow-400",
        title: "text-yellow-300",
        message: "text-yellow-200",
        closeButton: "text-yellow-300 hover:text-yellow-100 hover:bg-yellow-800/30",
    },
    info: {
        container: "bg-blue-900/20 border-blue-500/30 backdrop-blur-sm",
        icon: "text-blue-400",
        title: "text-blue-300",
        message: "text-blue-200",
        closeButton: "text-blue-300 hover:text-blue-100 hover:bg-blue-800/30",
    },
} as const;

export const Alert = memo(({
    type,
    title,
    message,
    isVisible,
    onDismiss,
    autoDismiss = true,
    autoDismissDelay = 5000,
    className = "",
}: AlertProps) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [shouldRender, setShouldRender] = useState(isVisible);

    const IconComponent = alertIcons[type];
    const styles = alertStyles[type];

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (isVisible && autoDismiss) {
            timeoutId = setTimeout(() => {
                handleDismiss();
            }, autoDismissDelay);
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [isVisible, autoDismiss, autoDismissDelay]);

    useEffect(() => {
        if (isVisible) {
            setShouldRender(true);
            // Small delay to trigger animation
            const timer = setTimeout(() => setIsAnimating(true), 10);
            return () => clearTimeout(timer);
        } else {
            setIsAnimating(false);
            // Wait for animation to complete before unmounting
            const timer = setTimeout(() => setShouldRender(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    const handleDismiss = () => {
        setIsAnimating(false);
        setTimeout(() => {
            onDismiss();
        }, 300);
    };

    if (!shouldRender) return null;

    return (
        <div
            className={`
                fixed top-12 md:top-20 right-4 max-w-sm w-full transform transition-all duration-300 ease-in-out z-70
                ${isAnimating
                    ? 'translate-x-0 opacity-100 scale-100'
                    : 'translate-x-full opacity-0 scale-95'
                }
                ${className}
            `}
            role="alert"
            aria-live="polite"
        >
            <div className={`${styles.container} border rounded-lg p-4 shadow-xl flex items-start gap-3 backdrop-blur-sm`}>

                {/* Alert Icon */}
                <div className={`${styles.icon} flex-shrink-0 mt-0.5`}>
                    <IconComponent size={20} />
                </div>

                <div className="flex-1 min-w-0">
                    {title && (
                        <h4 className={`${styles.title} font-semibold text-sm mb-1`}>
                            {title}
                        </h4>
                    )}
                    <p className={`${styles.message} text-sm leading-relaxed`}>
                        {message}
                    </p>
                </div>

                {/* Close button */}
                <button
                    onClick={handleDismiss}
                    className={`${styles.closeButton} flex-shrink-0 p-1 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-current cursor-pointer`}
                    aria-label="Dismiss alert"
                >

                    <XIcon
                        size={20}
                        className="cursor-pointer"
                    />

                </button>
            </div>

            {/* Auto-dismiss progress bar */}
            {autoDismiss && isVisible && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 rounded-b-lg overflow-hidden">
                    <div
                        className="h-full bg-current opacity-30 origin-left"
                        style={{
                            animation: `shrink ${autoDismissDelay}ms linear forwards`,
                        }}
                    />
                </div>
            )}
        </div>
    );
});

Alert.displayName = "Alert";