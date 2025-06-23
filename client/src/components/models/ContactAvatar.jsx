"use client";

import React, { useEffect, useRef } from 'react'
import { useGraph } from '@react-three/fiber'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function ContactAvatar(props) {
  const group = useRef();
  const { scene } = useGLTF('/models/avatar-transformed.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)

  const {animations } = useFBX("/models/Wave_Hip_Hop_Dance.fbx");
  animations[0].name = "Dance";
  const action = useAnimations(animations, group);

  useEffect(() => {
    action.actions["Dance"].play
    ();
  }, []);

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
