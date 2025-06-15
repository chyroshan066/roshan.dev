import React from 'react';

export const CallToAction = () => {
    return (
        <section className="relative md:mt-35 sm:mt-25 mt-22 sm:mb-0 mb-5 px-6 overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <div className="mb-8">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Ready to Build Something{' '}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            Exceptional?
                        </span>
                        <span className="ml-2 text-4xl">🚀</span>
                    </h2>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Got a bold idea or a project that needs a touch of magic? Whether it's web, app, or something in between—I'm all in.
                        Open to freelance work, collaborations, or full-time roles. Let's bring something extraordinary to life.
                    </p>
                </div>
                <div className="flex justify-center">
                    <a
                        href="/contact"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-blue-500 hover:to-purple-500"
                    >
                        <span className="relative z-10 flex items-center">
                            Let's Build Together
                            <svg
                                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                    </a>
                </div>
                <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 text-gray-400">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Available for projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span>Quick response time</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span>Tailored solutions</span>
                    </div>
                </div>
            </div>
        </section>
    );
};