export const TitleHeader = ({
    title, text, className
}: {
    title: string, text?: string, className?: string
}) => {
    return <>
        <div className="flex justify-between items-center">
            <div>
                <h1 className={`gradient-title font-semibold md:text-6xl text-4xl uppercase ${className}`}>{title}</h1>
                {text && (
                    <p className="md:text-3xl md:mt-5">{text}</p>
                )}
            </div>
        </div>
    </>;
}