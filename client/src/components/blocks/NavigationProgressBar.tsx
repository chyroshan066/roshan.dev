'use client';

import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

interface NavigationProgressBarProps {
    height?: number;
    color?: string;
    showSpinner?: boolean;
    delay?: number;
}

const useScreenSize = (breakpoint: number = 768) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= breakpoint);
            setIsInitialized(true);
        };

        let timeoutId: NodeJS.Timeout;
        const debouncedResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkScreenSize, 150);
        };

        checkScreenSize(); // Initial check
        window.addEventListener('resize', debouncedResize, { passive: true });

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', debouncedResize);
        };
    }, [breakpoint]);

    return { isMobile, isInitialized };
};

const useProgressSimulation = (isActive: boolean, delay: number) => {
    const [progress, setProgress] = useState(0);
    const timersRef = useRef<{
        startTimer?: NodeJS.Timeout;
        progressTimer?: NodeJS.Timeout;
    }>({});

    const clearAllTimers = useCallback(() => {
        Object.values(timersRef.current).forEach(timer => {
            if (timer) clearTimeout(timer);
        });
        timersRef.current = {};
    }, []);

    const startProgress = useCallback(() => {
        clearAllTimers();
        setProgress(0);

        timersRef.current.startTimer = setTimeout(() => {
            let currentProgress = 0;

            const progressIncrement = () => {
                currentProgress += Math.random() * 12 + 8;

                if (currentProgress >= 90) {
                    setProgress(90);
                    timersRef.current.progressTimer = setTimeout(() => {
                        setProgress(100);
                        setTimeout(() => setProgress(0), 150);
                    }, 200);
                } else {
                    setProgress(currentProgress);
                    timersRef.current.progressTimer = setTimeout(progressIncrement, 120);
                }
            };

            progressIncrement();
        }, delay);
    }, [delay, clearAllTimers]);

    useEffect(() => {
        if (isActive) {
            startProgress();
        } else {
            clearAllTimers();
            setProgress(0);
        }

        return clearAllTimers;
    }, [isActive, startProgress, clearAllTimers]);

    return progress;
};

const NavigationProgressBar: React.FC<NavigationProgressBarProps> = ({
    height = 3,
    color = 'from-purple-500 via-pink-500 to-purple-600',
    showSpinner = true,
    delay = 300,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname();
    const searchParams = useSearchParams();
    // const prevPathname = useRef(pathname);
    const { isMobile, isInitialized } = useScreenSize();

    const prevValues = useRef({
        pathname,
        searchParams: searchParams?.toString()
    });

    const progress = useProgressSimulation(isLoading, delay);

    const hasNavigated = useMemo(() => {
        const currentPath = pathname;
        const currentSearch = searchParams?.toString();

        return (
            currentPath !== prevValues.current.pathname ||
            currentSearch !== prevValues.current.searchParams
        ) && prevValues.current.pathname !== null;
    }, [pathname, searchParams]);

    useEffect(() => {
        if (hasNavigated) {
            setIsLoading(true);

            const autoCompleteTimer = setTimeout(() => {
                setIsLoading(false);
            }, 3000);

            // Update refs after starting loading
            prevValues.current = {
                pathname,
                searchParams: searchParams?.toString()
            };

            return () => clearTimeout(autoCompleteTimer);
        }
    }, [hasNavigated, pathname, searchParams]);

    const progressBarStyle = useMemo(() => ({
        width: `${progress}%`,
        boxShadow: '0 0 8px rgba(168, 85, 247, 0.4)',
    }), [progress]);

    if (!isInitialized || !isLoading) return null;

    return (
        <>
            {/* Progress Bar */}
            <div
                className="fixed top-0 left-0 right-0 z-50"
                style={{ height: `${height}px` }}
            >
                <div
                    className={`h-full bg-gradient-to-r ${color} transition-all duration-200 ease-out shadow-lg`}
                    style={progressBarStyle}
                />
            </div>

            {/* Spinner */}
            {showSpinner && !isMobile && (
                <div className="fixed top-4 right-4 z-50">
                    <div className="relative w-5 h-5">
                        <div className="absolute inset-0 border-2 border-purple-200/20 rounded-full" />
                        <div className="absolute inset-0 border-2 border-transparent border-t-purple-400 rounded-full animate-spin" />
                    </div>
                </div>
            )}
        </>
    );
};

// Alternative version 
export const NavigationProgressBarWithEvents: React.FC<NavigationProgressBarProps> = ({
    height = 3,
    color = 'from-purple-500 via-pink-500 to-purple-600',
    showSpinner = true,
    delay = 100,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const { isMobile, isInitialized } = useScreenSize();
    const progress = useProgressSimulation(isLoading, delay);

    const handleClick = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const link = target.closest('a');

        if (!link?.href ||
            link.href.startsWith('mailto:') ||
            link.href.startsWith('tel:') ||
            link.href.startsWith('#')) {
            return;
        }

        try {
            const url = new URL(link.href);
            const isSameOrigin = url.origin === window.location.origin;
            const isDifferentPath = url.pathname !== window.location.pathname;

            if (isSameOrigin && isDifferentPath) {
                setIsLoading(true);
                setTimeout(() => setIsLoading(false), 2500);
            }
        } catch {
            // Invalid URL, ignore
        }
    }, []);

    useEffect(() => {
        document.addEventListener('click', handleClick, {
            passive: true,
            capture: true
        });

        return () => document.removeEventListener('click', handleClick, { capture: true });
    }, [handleClick]);

    const progressBarStyle = useMemo(() => ({
        width: `${progress}%`,
        boxShadow: '0 0 10px rgba(168, 85, 247, 0.4)',
    }), [progress]);

    if (!isInitialized || !isLoading) return null;

    return (
        <>
            {/* Progress Bar */}
            <div
                className="fixed top-0 left-0 right-0 z-50"
                style={{ height: `${height}px` }}
            >
                <div
                    className={`h-full bg-gradient-to-r ${color} transition-all duration-300 ease-out shadow-lg`}
                    style={progressBarStyle}
                />
            </div>

            {/* Spinner */}
            {showSpinner && !isMobile && (
                <div className="fixed top-4 right-4 z-50">
                    <div className="relative w-5 h-5">
                        <div className="absolute inset-0 border-2 border-purple-200/20 rounded-full" />
                        <div className="absolute inset-0 border-2 border-transparent border-t-purple-400 rounded-full animate-spin" />
                    </div>
                </div>
            )}
        </>
    );
};

export default NavigationProgressBar;