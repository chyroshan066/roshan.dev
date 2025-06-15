"use client";

import React, { useRef, useState } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib';
import * as THREE from "three";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function HeroAvatar(props) {
  const { scene } = useGLTF('/models/avatar-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone);

  const mouse = useRef(new THREE.Vector2());
  const group = useRef();
  const [isIntroAnimationDone, setIsIntroAnimationDone] = useState(false)

  useGSAP(() => {
    if(!isIntroAnimationDone) {
      gsap.fromTo(group.current.rotation, {
    y: Math.PI
  }, {
    y: 0,
    delay: 0.5,
    duration: 1.5,
    ease: "expo.inOut",
    onComplete: () => {setIsIntroAnimationDone(true);},
  })
    }

  if(isIntroAnimationDone) {
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      mouse.current.x = (event.clientX / innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / innerHeight) * 2 + 1;
      const target = new THREE.Vector3(mouse.current.x, mouse.current.y, 1);
      group.current.getObjectByName("Head")?.lookAt(target);
      group.current.rotation.y = target.x * 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }
    
  }, [isIntroAnimationDone]);

  return (
    <group 
    {...props} 
    dispose={null}
    ref={group}
    >
      <primitive object={nodes.Hips} />
      <skinnedMesh geometry={nodes.Wolf3D_Avatar_Transparent.geometry} material={materials.Wolf3D_Avatar_Transparent} skeleton={nodes.Wolf3D_Avatar_Transparent.skeleton} />
      <skinnedMesh name="Wolf3D_Avatar" geometry={nodes.Wolf3D_Avatar.geometry} material={materials.Wolf3D_Avatar} skeleton={nodes.Wolf3D_Avatar.skeleton} morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences} />
    </group>
  )
}

useGLTF.preload('/models/avatar-transformed.glb')

