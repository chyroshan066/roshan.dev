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
                    <blockquote className="text-cyan-300 text-lg italic font-medium">
                        "The best way to predict the future is to create it."
                    </blockquote>
                    <cite className="text-gray-400 text-sm block mt-2">— Peter Drucker</cite>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                        View My Work
                    </button>
                    <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                        Let's Connect
                    </button>
                </div>
            </div>
        </div>
    );
};