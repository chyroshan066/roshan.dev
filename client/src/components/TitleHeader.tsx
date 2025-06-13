export const TitleHeader = ({
    title, text
}: {
    title: string, text: string
}) => {
    return <>
        <div className="flex justify-between items-center">
            <div>
                <h1 className="gradient-title font-semibold md:text-6xl text-4xl uppercase">{title}</h1>
                <p className="md:text-3xl md:mt-5">{text}</p>
            </div>
        </div>
    </>;
}