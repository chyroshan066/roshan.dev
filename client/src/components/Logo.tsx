export const Logo = ({
    size = "2xl",
    variant = "default"
}: {
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
    variant?: "default" | "footer" | "minimal";
}) => {
    const sizeClasses = {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
        "4xl": "text-4xl"
    };

    if (variant === "minimal") {
        return (
            <div className="flex items-center space-x-1">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">R</span>
                </div>
                <h1 className={`text-white font-bold ${sizeClasses[size]}`}>
                    <span className="text-blue-400">ROSHAN</span>
                </h1>
            </div>
        );
    }

    if (variant === "footer") {
        return (
            <div className="flex items-center space-x-3">
                <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">R</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full opacity-80"></div>
                </div>
                <div>
                    <h1 className={`text-white font-bold ${sizeClasses[size]} leading-tight`}>
                        <span className="text-blue-300">RO</span>SHAN
                    </h1>
                    <p className="text-gray-400 text-xs mt-0.5">Web Developer</p>
                </div>
            </div>
        );
    }

    // Default variant
    return (
        <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative transition-transform duration-300 group-hover:scale-110">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">R</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-500 rounded-xl opacity-20 blur-sm"></div>
            </div>
            <h1 className={`text-white font-bold ${sizeClasses[size]} transition-colors duration-300 group-hover:text-blue-200`}>
                <span className="text-blue-300 group-hover:text-blue-400 transition-colors duration-300">RO</span>SHAN
            </h1>
        </div>
    );
};