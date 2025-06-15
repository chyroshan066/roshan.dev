import { LinkButton } from "@/components/buttons/LinkButton";
import { TitleHeader } from "@/components/TitleHeader";

export const MoreInfo = () => {
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8 items-center p-8">
            <div className="col-span-12 text-white space-y-6">

                <TitleHeader
                    title={"Web Developer"}
                />

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    I specialize in full-stack web development, transforming ideas into useful solutions
                    using cutting-edge technology to build projects with pixel-perfect design. 🚀
                </p>

                <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                    I have delivered various projects to clients, combining innovative approaches with
                    robust functionality to create solutions that make a real impact.
                </p>

                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl py-4 px-6 mt-8">
                    <blockquote className="text-pink-100 text-lg italic font-medium">
                        "First, solve the problem. Then, write the code."
                    </blockquote>
                    <cite className="text-gray-400 text-sm block mt-2">— John Johnson</cite>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">

                    <LinkButton
                        btnText={"View My Work"}
                        href={"/projects"}
                    />

                    <LinkButton
                        btnText={"Let's Connect"}
                        href={"/contact"}
                        className={"border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white backdrop-blur-sm bg-transparent hover:bg-transparent"}
                    />

                </div>
            </div>
        </div>
    );
};