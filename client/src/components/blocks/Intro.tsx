'use client';

import { useState, useEffect, useRef } from 'react';

const Intro: React.FC = () => {
    const greetings: string[] = [
        'Hello',
        'नमस्ते',
        'Bonjour',
        'स्वागत है',
        'Hola',
        'Hallo',
        'Ciao',
        'こんにちは'
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [animationClass, setAnimationClass] = useState<string>('');
    const [currentGreeting, setCurrentGreeting] = useState<string>(greetings[0]);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const showNextGreeting = (index: number = currentIndex): void => {
        // Exit current greeting
        setAnimationClass('exit');

        timeoutRef.current = setTimeout(() => {
            const nextIndex = index + 1;

            if (nextIndex < greetings.length) {
                // Show next greeting
                setCurrentGreeting(greetings[nextIndex]);
                setCurrentIndex(nextIndex);
                setAnimationClass('active');

                timeoutRef.current = setTimeout(() => {
                    setAnimationClass('');
                    showNextGreeting(nextIndex);
                }, 150);
            } else {
                // Emit custom event to notify parent component
                const event = new CustomEvent('introComplete');
                window.dispatchEvent(event);
            }
        }, 120);
    };

    useEffect(() => {
        // Start the animation sequence
        timeoutRef.current = setTimeout(() => {
            setAnimationClass('active');

            timeoutRef.current = setTimeout(() => {
                setAnimationClass('');
                showNextGreeting();
            }, 150);
        }, 60);

        // Cleanup timeouts on unmount
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <>
            <style jsx>{`
                .intro-screen {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    overflow: hidden;
                    background-color: var(--color-black-100);
                }             
                .greeting-text {
                    /* If 12vw is smaller than 4rem → Use 4rem
                    If 12vw is between 4rem and 8rem → Use 12vw
                    If 12vw is larger than 8rem → Use 8rem */
                    font-size: clamp(4rem, 12vw, 8rem);
                    font-weight: 700;
                    color: white;
                    white-space: nowrap;
                    text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    transform-origin: center;
                }
                .greeting-text.entering {
                    opacity: 0;
                    transform: translateY(60px) scale(0.7); /* Starts below and smaller */
                }
                .greeting-text.visible {
                    opacity: 1;
                    transform: translateY(0) scale(1); /* Normal position and size */
                }
                     .greeting-text.active {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
                .greeting-text.exit {
                    opacity: 0;
                    transform: translateY(-60px) scale(1.15); /* Moves up and grows slightly */
                }
                @media (max-width: 768px) {
                    .greeting-text {
                        font-size: clamp(2.5rem, 15vw, 5rem);
                    }
                }
      `}</style>

            <section className="w-screen h-dvh intro-screen z-100">
                <div className="text-center relative w-full md:h-50 h-[150px] flex items-center justify-center ">
                    <div className={`greeting-text ${animationClass}`}>
                        {currentGreeting}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Intro;
