"use client";

import { AboutAvatar } from "@/components/models/AboutAvatar";
import { Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const AboutExperience = () => {
    return <>
        <Canvas
            camera={{
                position: [0, 0, 5],
            }}
        >
            <ambientLight intensity={2} />
            <directionalLight
                position={[5, 5, 5]}
                intensity={5}
                color={"#1c34ff"}
            />
            <group rotation={[0, 0.5, 0]}>

                <Text3D
                    position={[1, -3, -2]}
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
                    {'ROSHAN'}
                    <meshNormalMaterial />
                </Text3D>

                <AboutAvatar
                    scale={3.1}
                    position={[2, -2.4, 0]}
                />

            </group>
        </Canvas>
    </>;
};

