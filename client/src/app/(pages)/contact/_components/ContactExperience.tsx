"use client";

import { Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ContactAvatar } from "@/components/models/ContactAvatar";
import { Suspense, useMemo } from "react";

const CanvasLoader = () => (
    <div className="flex items-center justify-center h-full w-full bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
);

const Scene = () => {
    const lights = useMemo(() => (
        <>
            <ambientLight intensity={2} />
            <directionalLight
                position={[-5, 5, 5]}
                intensity={5}
                color={"#1c34ff"}
            />
        </>
    ), []);

    const cameraConfig = useMemo(() => ({
        position: [0, 0, 5] as [number, number, number],
        near: 0.1,
        far: 1000,
    }), []);

    return (
        <Canvas
            camera={cameraConfig}
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
            gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance"
            }}
        >
            <Suspense fallback={null}>
                {lights}

                <group rotation={[0, -0.5, 0]}>
                    <Text3D
                        position={[-4, -3, -2]}
                        curveSegments={32}
                        bevelEnabled
                        bevelSize={0.04}
                        bevelThickness={0.1}
                        height={0.5}
                        lineHeight={0.5}
                        letterSpacing={-0.06}
                        size={1.5}
                        font="/fonts/Inter_Bold.json"
                    >
                        {'hello'}
                        <meshNormalMaterial />
                    </Text3D>

                    <ContactAvatar
                        scale={2.5}
                        position={[-1, -3, 0]}
                    />
                </group>
            </Suspense>

        </Canvas>
    );
};

export const ContactExperience = () => {
    return (
        <div className="w-full h-full">

            <Suspense fallback={<CanvasLoader />}>

                <Scene />

            </Suspense>

        </div>
    );
};