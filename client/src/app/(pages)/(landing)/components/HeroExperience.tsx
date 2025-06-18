"use client";

import { Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { memo, useMemo } from "react";
import { HeroAvatar } from "@/components/models/HeroAvatar";

export const HeroExperience = memo(() => {
    const lightingSetup = useMemo(() => (
        <>
            <ambientLight />
            <directionalLight
                position={[-2, 0, 3]}
                intensity={3}
                color="#ff28d5"
            />
            <directionalLight
                position={[-2, 0, 3]}
                intensity={3}
                color="#1c34ff"
            />
        </>
    ), []);

    const sparklesConfig = useMemo(() => ({
        count: 100,
        size: 2,
        speed: 0.5,
        color: "pink",
        scale: [10, 10, 2] as [number, number, number],
    }), []);

    const avatarProps = useMemo(() => ({
        scale: 9,
        position: [0, -15, 0] as [number, number, number],
    }), []);

    const canvasConfig = useMemo(() => ({
        gl: {
            antialias: true, // Better visual quality
            alpha: true, // Transparency support
            powerPreference: "high-performance" as const // Performance hint
        },
        dpr: [1, 2] as [number, number], // Limit device pixel ratio for performance on high-DPI displays
    }), []);

    return <>
        <Canvas {...canvasConfig}>
            {lightingSetup}

            <Sparkles {...sparklesConfig} />

            <group>
                <HeroAvatar {...avatarProps} />
            </group>
        </Canvas>
    </>;
});

HeroExperience.displayName = "HeroExperience";