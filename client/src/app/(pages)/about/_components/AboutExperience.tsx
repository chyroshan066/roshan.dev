"use client";

import { AboutAvatar } from "@/components/models/AboutAvatar";
import { Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";

const LoadingFallback = () => (
    <div className="flex items-center justify-center w-full h-full bg-gray-900">
        <div className="text-white">Loading 3D scene...</div>
    </div>
);

export const AboutExperience = () => {
    const cameraConfig = useMemo(() => ({
        position: [0, 0, 5] as [number, number, number],
        fov: 75,  // Defines how wide can the camera see (like zoom level)
        near: 0.1,  // Objects closer than 0.1 units won't be rendered
        far: 1000,  // Objects farther than 1000 units won't be rendered
    }), []);


    const groupRotation = useMemo(() => [0, 0.5, 0] as [number, number, number], []);

    const text3DProps = useMemo(() => ({
        position: [1, -3, -2] as [number, number, number],
        curveSegments: 20, // Controls how smooth curved parts of letters look
        bevelEnabled: true, // A bevel is a slanted or angled edge
        bevelSize: 0.04, // How far inward the bevel goes 
        bevelThickness: 0.1, // How deep the bevel cut is
        height: 0.5,
        lineHeight: 0.5,
        letterSpacing: -0.06,
        size: 1.5,
        font: "/fonts/Inter_Bold.json"
    }), []);

    return <>
        <Suspense fallback={<LoadingFallback />}>
            <Canvas
                camera={cameraConfig}
                dpr={[1, 2]} // Limit pixel ratio for performance
                performance={{ min: 0.5 }} // Performance scaling
                gl={{
                    antialias: false, // Disable for better performance
                    alpha: true,
                    powerPreference: "high-performance"
                }}
            >
                <ambientLight intensity={2} />
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={5}
                    color="#1c34ff"
                    castShadow={false} // Disable shadows if not needed
                />
                <group rotation={groupRotation}>

                    <Suspense fallback={null}>

                        <Text3D {...text3DProps}>
                            ROSHAN
                            <meshNormalMaterial />
                        </Text3D>

                    </Suspense>

                    <Suspense fallback={null}>
                        <AboutAvatar
                            scale={3.1}
                            position={[2, -2.4, 0]}
                        />
                    </Suspense>

                </group>
            </Canvas>
        </Suspense>
    </>;
};
