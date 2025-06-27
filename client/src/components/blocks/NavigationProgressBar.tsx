'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

interface NavigationProgressBarProps {
    height?: number;
    color?: string;
    showSpinner?: boolean;
    delay?: number;
}

const NavigationProgressBar: React.FC<NavigationProgressBarProps> = ({
    height = 3,
    color = 'from-purple-500 via-pink-500 to-purple-600',
    showSpinner = true,
    delay = 300,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const prevPathname = useRef(pathname);
    const prevSearchParams = useRef(searchParams?.toString());

    useEffect(() => {
        let timer: NodeJS.Timeout;
        let progressTimer: NodeJS.Timeout;

        // Check if navigation occurred
        const currentPath = pathname;
        const currentSearch = searchParams?.toString();
        const hasNavigated =
            currentPath !== prevPathname.current ||
            currentSearch !== prevSearchParams.current;

        if (hasNavigated && prevPathname.current !== null) {
            // Start loading
            timer = setTimeout(() => {
                setIsLoading(true);
                setProgress(0);

                // Simulate realistic progress
                let currentProgress = 0;
                const progressIncrement = () => {
                    currentProgress += Math.random() * 15 + 5; // 5-20% increments
                    if (currentProgress >= 90) {
                        setProgress(90);
                        clearInterval(progressTimer);
                        // Complete loading after reaching 90%
                        setTimeout(() => {
                            setProgress(100);
                            setTimeout(() => {
                                setIsLoading(false);
                                setProgress(0);
                            }, 200);
                        }, 100);
                    } else {
                        setProgress(currentProgress);
                    }
                };

                progressTimer = setInterval(progressIncrement, 150);
            }, delay);
        }

        // Update refs
        prevPathname.current = currentPath;
        prevSearchParams.current = currentSearch;

        return () => {
            clearTimeout(timer);
            clearInterval(progressTimer);
        };
    }, [pathname, searchParams, delay]);

    if (!isLoading) return null;

    return (
        <>
            {/* Progress Bar */}
            <div
                className="fixed top-0 left-0 right-0 z-50"
                style={{ height: `${height}px` }}
            >
                <div
                    className={`h-full bg-gradient-to-r ${color} transition-all duration-300 ease-out shadow-lg`}
                    style={{
                        width: `${progress}%`,
                        boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)',
                    }}
                />
            </div>

            {/* Spinner (optional) */}
            {showSpinner && (
                <div className="fixed top-4 right-4 z-50">
                    <div className="relative">
                        <div className="w-5 h-5 border-2 border-purple-200/30 rounded-full animate-spin">
                            <div className="absolute top-0 left-0 w-5 h-5 border-2 border-transparent border-t-purple-400 rounded-full animate-spin"></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

// Alternative version that works with click events for immediate feedback
export const NavigationProgressBarWithEvents: React.FC<NavigationProgressBarProps> = ({
    height = 3,
    color = 'from-purple-500 via-pink-500 to-purple-600',
    showSpinner = true,
    delay = 100,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    useEffect(() => {
        let progressTimer: NodeJS.Timeout;

        const startProgress = () => {
            setIsLoading(true);
            setProgress(0);

            let currentProgress = 0;
            const progressIncrement = () => {
                currentProgress += Math.random() * 20 + 10;
                if (currentProgress >= 90) {
                    setProgress(90);
                    clearInterval(progressTimer);
                    setTimeout(() => {
                        setProgress(100);
                        setTimeout(() => {
                            setIsLoading(false);
                            setProgress(0);
                        }, 200);
                    }, 300);
                } else {
                    setProgress(currentProgress);
                }
            };

            progressTimer = setInterval(progressIncrement, 200);
        };

        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');

            if (link && link.href && !link.href.startsWith('mailto:') && !link.href.startsWith('tel:')) {
                const url = new URL(link.href);  // parses the link URL into components
                // "url.origin === window.location.origin" checks if it's the same website
                // "url.pathname !== window.location.pathname" ensures it's actually navigating somewhere new
                if (url.origin === window.location.origin && url.pathname !== window.location.pathname) {
                    setTimeout(startProgress, delay);
                }
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
            clearInterval(progressTimer);
        };
    }, [delay]);

    if (!isLoading) return null;

    return (
        <>
            <div
                className="fixed top-0 left-0 right-0 z-50"
                style={{ height: `${height}px` }}
            >
                <div
                    className={`h-full bg-gradient-to-r ${color} transition-all duration-300 ease-out shadow-lg`}
                    style={{
                        width: `${progress}%`,
                        boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)',
                    }}
                />
            </div>

            {showSpinner && !isMobile && (
                <div className="fixed top-4 right-4 z-50">
                    <div className="relative">
                        <div className="w-5 h-5 border-2 border-purple-200/30 rounded-full animate-spin">
                            <div className="absolute top-0 left-0 w-5 h-5 border-2 border-transparent border-t-purple-400 rounded-full animate-spin"></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavigationProgressBar;