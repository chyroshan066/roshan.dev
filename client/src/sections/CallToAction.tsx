import { LinkButton } from '@/components/buttons/LinkButton';
import { TitleHeader } from '@/components/TitleHeader';
import React from 'react';

export const CallToAction = () => {
    return (
        <div className="relative md:mt-35 sm:mt-25 mt-22 sm:mb-0 px-6 overflow-hidden">

            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <div className="mb-8">

                    <TitleHeader
                        title={"Let's Build Something Extraordinary Together 🚀"}
                        text={"Every extraordinary project starts with a shared vision. I bring full-stack expertise and creative problem-solving to teams ready to push boundaries. Whether you're launching something new or reimagining what's possible—let's combine our talents and create magic."}
                        className={"md:mb-0 mb-4"}
                    />

                </div>

                <LinkButton
                    btnText={"Lets Build Together"}
                    href={"/contact"}
                />

            </div>
        </div>
    );
};