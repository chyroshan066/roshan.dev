"use client";

import React, { useRef, useState, useCallback, useEffect, useMemo, memo  } from 'react'
import { useFrame, useGraph } from '@react-three/fiber'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib';
import * as THREE from "three";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const HeroAvatar = memo(function HeroAvatar(props) {
  const { scene } = useGLTF('/models/avatar-transformed.glb')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone);

  const mouse = useRef(new THREE.Vector2());
  const group = useRef();
  const headRef = useRef();
  const [isIntroAnimationDone, setIsIntroAnimationDone] = useState(false)
  // Throttled mouse position for better performance
  const mousePosition = useRef(new THREE.Vector2());
  const lastMouseUpdate = useRef(0);

  const {animations } = useFBX("/models/Male_Standing_Pose.fbx");
  animations[0].name = "Dance";
  const { actions } = useAnimations(animations, group);
  
  useEffect(() => {
    if (actions && actions["Dance"]) {
      actions["Dance"].play();
    }
  }, [actions ]);

  // Cache head object reference for better performance
  useEffect(() => {
    if (group.current) {
      headRef.current = group.current.getObjectByName("Head");
    }
  }, [nodes]);

  const handleMouseMove = useCallback((event) => {
    const now = performance.now();
    
    // Throttle mouse updates to 60fps (16.67ms) for better performance
    if (now - lastMouseUpdate.current < 16.67) return;
    
    lastMouseUpdate.current = now;
    const { innerWidth, innerHeight } = window;
    mousePosition.current.x = (event.clientX / innerWidth) * 2 - 1;
    mousePosition.current.y = -(event.clientY / innerHeight) * 2 + 1;
  }, []);

  // useFrame for smooth 60fps updates instead of mouse events
  useFrame(() => {
    if (!group.current || !isIntroAnimationDone) return;
    
    // Smoothly interpolate mouse position for buttery smooth animation
    mouse.current.lerp(mousePosition.current, 0.1);
    const target = new THREE.Vector3(mouse.current.x, mouse.current.y, 1);
    
    // Use cached head reference instead of searching every frame
    if (headRef.current) {
      headRef.current.lookAt(target);
    }
    
    // Smooth rotation interpolation instead of direct assignment
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y, 
      target.x * 0.5, 
      0.1
    );
  });

  useGSAP(() => {
  if (!group.current || isIntroAnimationDone) return;

    const tl = gsap.timeline(); // Use timeline for better performance
    
    tl.fromTo(group.current.rotation, {
      y: Math.PI
    }, {
      y: 0,
      delay: 0.5,
      duration: 1.5,
      ease: "expo.inOut",
      onComplete: () => {
        setIsIntroAnimationDone(true);
      },
    });

    return () => {
      tl.kill(); // Cleanup timeline on unmount to prevent memory leaks
    };
    
  }, [isIntroAnimationDone]);

  // Mouse event setup with passive listeners for better scrolling performance
  useEffect(() => {
    if (!isIntroAnimationDone) return;

    // Passive event listener for better scroll performance
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isIntroAnimationDone, handleMouseMove]);

   // Cleanup materials on unmount for memory management
  useEffect(() => {
    return () => {
      // Dispose materials to prevent memory leaks
      if (materials) {
        Object.values(materials).forEach(material => {
          if (material && typeof material.dispose === 'function') {
            material.dispose();
          }
        });
      }
    };
  }, [materials]);

  // Early return if resources not loaded
  if (!nodes || !materials) {
    return null;
  }

  return (
    <group 
    {...props} 
    dispose={null}
    ref={group}
    >
      <primitive object={nodes.Hips} />
      <skinnedMesh 
      geometry={nodes.Wolf3D_Avatar_Transparent.geometry} 
      material={materials.Wolf3D_Avatar_Transparent} 
      skeleton={nodes.Wolf3D_Avatar_Transparent.skeleton} 
      frustumCulled={false} // Disable frustum culling to prevent avatar disappearing
      />
      <skinnedMesh 
      name="Wolf3D_Avatar" 
      geometry={nodes.Wolf3D_Avatar.geometry} 
      material={materials.Wolf3D_Avatar} 
      skeleton={nodes.Wolf3D_Avatar.skeleton} 
      morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary} 
      morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}
      frustumCulled={false} 
      />
    </group>
  )
})

useGLTF.preload('/models/avatar-transformed.glb')

