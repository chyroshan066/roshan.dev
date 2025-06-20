"use client";

import React, { useEffect, useMemo } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib';

const ROTATION = [-Math.PI / 2, 0, 0];
const POSITION = [0.218, 0.978, 0];
const MODEL_PATH = '/models/alien-transformed.glb';
const ANIMATION_NAME = "Armature|ArmatureAction";

export default function Alien(props) {
  const group = React.useRef();
  const { scene, animations, error } = useGLTF(MODEL_PATH);

  const clone = useMemo(() => {
    if (!scene) return null;

    return SkeletonUtils.clone(scene);
  }, [scene]);

  const { nodes, materials } = useGraph(clone || { children: [] });

  const { actions } = useAnimations(animations, group);

  // Optimized effect with proper cleanup
  useEffect(() => {
    if (!actions || !actions[ANIMATION_NAME]) return;

    const action = actions[ANIMATION_NAME];
    action.play();

    // Cleanup function to stop animation when component unmounts
    return () => {
      if (action) {
        action.stop();
      }
    };
  }, [actions]);

  if (error) {
    console.error('Failed to load alien model:', error);
    return null;
  }

  if (!clone || !nodes?.Object_9 || !nodes?.Object_10 || !nodes?._rootJoint) {
    return null; // Or a loading placeholder
  }

  return (
    <group 
    ref={group} 
    {...props} 
    dispose={null}
    >
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh 
        name="Object_9" 
        geometry={nodes.Object_9.geometry} 
        material={materials.material} 
        skeleton={nodes.Object_9.skeleton} 
        position={POSITION} 
        rotation={ROTATION} 
        frustumCulled={true} // Enable frustum culling for better performance
        />
        <skinnedMesh 
        name="Object_10" 
        geometry={nodes.Object_10.geometry} 
        material={materials.Outline} 
        skeleton={nodes.Object_10.skeleton} 
        position={POSITION} 
        rotation={ROTATION} 
        frustumCulled={true} 
        />
      </group>
    </group>
  );
};

useGLTF.preload(MODEL_PATH);
