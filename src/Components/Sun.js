import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import React from "react";

import sunMap from '../Textures/Sun.jpg'

// TODO Добавить вращение, вынести радиус в стейт

export default function Sun() {

  const texture = useLoader(THREE.TextureLoader, sunMap);
  
  return (
    <mesh>
      <sphereGeometry args={[0.696342, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )}
