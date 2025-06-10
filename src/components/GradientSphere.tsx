export const GradientSpheres = ({
    sphere1Class, sphere2Class
}: {
    sphere1Class?: string,
    sphere2Class?: string
}) => {
    return <>
        <div className={sphere1Class}></div>
        <div className={sphere2Class}></div>
    </>;
}