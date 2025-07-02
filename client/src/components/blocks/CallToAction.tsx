import { TitleHeader } from '@/components/blocks/TitleHeader';
import { memo, useMemo } from 'react';
import { LinkButton } from './buttons/LinkButton';

const CallToAction = memo(() => {
    const titleProps = useMemo(() => ({
        title: "Let's Build Something Extraordinary Together",
        text: "Every extraordinary project starts with a shared vision. I bring full-stack expertise and creative problem-solving to teams ready to push boundaries. Whether you're launching something new or reimagining what's possible—let's combine our talents and create magic.",
        className: "md:mb-0 mb-4"
    }), []);

    return (
        <div className="relative md:mt-35 sm:mt-25 mt-22 sm:mb-0 px-5 overflow-hidden">

            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <div className="mb-8">

                    <TitleHeader {...titleProps} />

                </div>

                <LinkButton
                    btnText={"Lets Build Together"}
                    href={"/contact"}
                />

            </div>
        </div>
    );
});

CallToAction.displayName = "CallToAction";

export default CallToAction;