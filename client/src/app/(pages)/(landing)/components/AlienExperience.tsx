"use client";

import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";

// dynamic loading is just like the lazy loading but with additional parameters
const Alien = dynamic(() => import("@/components/models/Alien"), {
    ssr: false, // Disable SSR for 3D components
});

const LoadingFallback: React.FC = () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
    </div>
);

export const AlienExperience: React.FC = () => {
    const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setScreenSize('mobile');
            } else if (width < 1024) {
                setScreenSize('tablet');
            } else {
                setScreenSize('desktop');
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const canvasConfig = useMemo(() => ({
        gl: {
            antialias: true,
            preserveDrawingBuffer: false, // Disable to improve performance
            powerPreference: "high-performance" as const,
            alpha: true, // Disable alpha for better performance, makes background opaque
            depth: true, // Enable depth buffer. Setting "true" allows object to be behind or infront of each other i.e; allows 3D layering
            stencil: false, // Disable stencil buffer for performance. "Stencil" defines area where you can/cannot paint
            premultipliedAlpha: false, // Disable for better performance. Setting "premultipliedAlpha" to faslse allows you to mix color during painting and setting it to "true" allows you to pre-mix color with transparency.
        },
        dpr: [1, 2] as [number, number],
        flat: true, // Disable tone mapping for better performance. Enhance colors if set to "false" and gives natural or unprocessed colors if set to "true"
    }), []);

    const lightingSetup = useMemo(() => (
        <>
            <ambientLight
                intensity={0.4}
                color="#ffffff"
            />
            <directionalLight
                position={[10, 10, 5]}
                intensity={0.8}
                castShadow={false}
                color="#ffffff"
            />
            {/* hemisphereLight creates environmental lighting */}
            <hemisphereLight
                args={["#ffffff", "#444444", 0.3]}
            />
        </>
    ), []);

    const orbitControlsConfig = useMemo(() => ({
        enableZoom: false,
        enablePan: false,
        dampingFactor: 0.05,
        enableDamping: true,
        enableRotate: true,
        autoRotate: false,
        maxPolarAngle: Math.PI / 2, // Limit vertical rotation
        minPolarAngle: Math.PI / 4, // Limit vertical rotation
        rotateSpeed: screenSize === 'mobile' ? 0.3 : 0.5, // Slower rotation for better UX
    }), []);

    const alienConfig = useMemo(() => {
        switch (screenSize) {
            case 'mobile':
                return {
                    scale: 2, // Smaller scale for mobile
                    position: [0, -5.5, 0] as [number, number, number], // Adjusted position
                    rotation: [0, -0.5, 0] as [number, number, number], // Slight rotation adjustment
                };
            case 'tablet':
                return {
                    scale: 1.6, // Medium scale for tablets
                    position: [0, -4.5, 0] as [number, number, number], // Adjusted position
                    rotation: [0, -0.4, 0] as [number, number, number], // Slight rotation adjustment
                };
            default: // desktop
                return {
                    scale: 2,
                    position: [0, -5.5, 0] as [number, number, number],
                    rotation: [0, -0.5, 0] as [number, number, number],
                };
        }
    }, [screenSize]);

    return (
        <div className="w-full h-full relative">
            <Canvas {...canvasConfig}>
                <Suspense fallback={<LoadingFallback />}>
                    {lightingSetup}

                    <OrbitControls {...orbitControlsConfig} />

                    <Alien {...alienConfig} />
                </Suspense>
            </Canvas>
        </div>
    );
};
