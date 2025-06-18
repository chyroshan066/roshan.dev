import { memo } from 'react';

type GradientSpheresProps = {
    sphere1Class?: string;
    sphere2Class?: string;
}

export const GradientSpheres = memo<GradientSpheresProps>(({
    sphere1Class = "",
    sphere2Class = ""
}) => {
    return <>
        <div className={sphere1Class}></div>
        <div className={sphere2Class}></div>
    </>;
});

GradientSpheres.displayName = 'GradientSpheres';