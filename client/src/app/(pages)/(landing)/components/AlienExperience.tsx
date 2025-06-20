"use client";

import Alien from "@/components/models/Alien"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"

export const AlienExperience: React.FC = () => {
    const [canvasKey, setCanvasKey] = useState(0)
    const mountedRef = useRef(true)

    useEffect(() => {
        // Force single render in strict mode
        if (mountedRef.current) {
            mountedRef.current = false
            return
        }

        // Reset canvas on unmount/remount
        setCanvasKey(prev => prev + 1)
    }, [])

    return (
        <Canvas
            key={canvasKey} // Force new Canvas instance
            gl={{
                antialias: false,
                preserveDrawingBuffer: true, // Prevent context loss
                powerPreference: "high-performance"
            }}
            dpr={[1, 2]}
        >
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[10, 10, 5]}
                intensity={1}
            />

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                dampingFactor={0.05}
                enableDamping
            />
            <Alien
                scale={2}
                position={[0, -5.5, 0]}
                rotation={[0, -0.5, 0]}
            />
        </Canvas>
    )
}