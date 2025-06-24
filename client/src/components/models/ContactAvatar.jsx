"use client";

import { useEffect, useRef, useMemo, Suspense, useCallback, memo } from 'react'
import { useGraph } from '@react-three/fiber'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib';

useGLTF.preload('/models/avatar-transformed.glb');

const AvatarLoader = () => (
  <mesh>
    <boxGeometry args={[1, 2, 0.5]} />
    <meshStandardMaterial 
    color="#cccccc" 
    opacity={0.5} 
    transparent 
    />
  </mesh>
);

const AvatarError = () => (
  <mesh>
    <boxGeometry args={[1, 2, 0.5]} />
    <meshStandardMaterial color="#ff6b6b" />
  </mesh>
);

const ContactAvatarCore = memo((props) => {
  const groupRef = useRef();

  const { scene } = useGLTF('/models/avatar-transformed.glb');

  const clonedScene = useMemo(() => {
    if (!scene) return null;
    return SkeletonUtils.clone(scene);
  }, [scene]);

  const { nodes, materials } = useGraph(clonedScene || {});

  const { animations } = useFBX("/models/Wave_Hip_Hop_Dance.fbx");

  // Process animations only when they change
  const processedAnimations = useMemo(() => {
    if (animations && animations.length > 0) {
      const animationClone = [...animations];
      animationClone[0].name = "Dance";
      return animationClone;
    }

    return [];
  }, [animations]);

  const { actions } = useAnimations(processedAnimations, groupRef);

  const playAnimation = useCallback(() => {
    if (actions && actions["Dance"]) {
      const danceAction = actions["Dance"];
      danceAction.play();
      return danceAction;
    }

    return null;
  }, [actions]);

  useEffect(() => {
    const danceAction = playAnimation();
    
    // Cleanup function to stop animation when component unmounts
    return () => {
      if (danceAction) {
        danceAction.stop();
      }
    };
  }, [playAnimation]);

  // Cleanup resources on unmount
  useEffect(() => {
    return () => {
      // Dispose of cloned scene resources
      if (clonedScene) {
        clonedScene.traverse((child) => {
          if (child.geometry) {
            child.geometry.dispose();
          }
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(material => material.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      }
    };
  }, [clonedScene]);

  // Return null if essential resources aren't loaded
  if (!nodes || !materials) {
    return <AvatarLoader />;
  }

  return (
    <group 
      {...props} 
      dispose={null}
      ref={groupRef}
    >
      <primitive object={nodes.Hips} />
      <skinnedMesh 
        geometry={nodes.Wolf3D_Avatar_Transparent.geometry} 
        material={materials.Wolf3D_Avatar_Transparent} 
        skeleton={nodes.Wolf3D_Avatar_Transparent.skeleton} 
      />
      <skinnedMesh 
        name="Wolf3D_Avatar" 
        geometry={nodes.Wolf3D_Avatar.geometry} 
        material={materials.Wolf3D_Avatar} 
        skeleton={nodes.Wolf3D_Avatar.skeleton} 
        morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary} 
        morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences} 
      />
    </group>
  );
});

ContactAvatarCore.displayName = 'ContactAvatarCore';

export function ContactAvatar(props) {
  return (
    <Suspense fallback={<AvatarLoader />}>
      <ContactAvatarCore {...props} />
    </Suspense>
  );
};
