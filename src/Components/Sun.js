import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import React from "react";

import sunMap from '../Textures/sun.jpg'

export default function Sun() {

  const texture = useLoader(THREE.TextureLoader, sunMap);
  
  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )}
