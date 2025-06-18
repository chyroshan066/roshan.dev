"use client";

import { Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { memo, Suspense, useMemo } from "react";
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

    const AvatarLoadingFallback = () => (
        <mesh position={[0, -15, 0]}>
            {/* Simple placeholder geometry while avatar loads */}
            <boxGeometry args={[2, 4, 1]} />
            <meshBasicMaterial color="#444" opacity={0.3} transparent />
        </mesh>
    );

    const PriorityContent = memo(() => (
        <>
            {lightingSetup}

            {/* PRIORITY 1: Avatar loads first with Suspense boundary */}
            <Suspense fallback={<AvatarLoadingFallback />}>
                <group>
                    <HeroAvatar {...avatarProps} />
                </group>
            </Suspense>

            {/* PRIORITY 2: Sparkles load after avatar is ready */}
            <Sparkles {...sparklesConfig} />
        </>
    ));

    return <>
        <Canvas {...canvasConfig}>
            <PriorityContent />
        </Canvas>
    </>;
});

HeroExperience.displayName = "HeroExperience";