import { LinkButton } from '@/components/buttons/LinkButton';
import { TitleHeader } from '@/components/TitleHeader';
import React from 'react';

export const CallToAction = () => {
    return (
        <div className="relative md:mt-35 sm:mt-25 mt-22 sm:mb-0 px-6 overflow-hidden">

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <div className="mb-8">

                    <TitleHeader
                        title={"Ready to Build Something Exceptional 🚀"}
                        text={"Got a bold idea or a project that needs a touch of magic? Whether it's web, app, or something in between—I'm all in. Open to freelance work, collaborations, or full-time roles. Let's bring something extraordinary to life."}
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