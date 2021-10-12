import { useFrame, useLoader } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

export default function Planet({
  planet: {
    xRadius,
    zRadius,
    size,
    speed,
    offset,
    rotationSpeed,
    textureMap,
    zoomed,
    toggleZoom,
  },
}) {
  const planetRef = React.useRef();

  const texture = useLoader(THREE.TextureLoader, textureMap);

  useFrame(({ clock, camera }) => {
    // debugger
    const tPlanet = clock.getElapsedTime() * speed + offset;
    const xPlanet = xRadius * Math.sin(tPlanet);
    const zPlanet = zRadius * Math.cos(tPlanet);
    planetRef.current.position.x = xPlanet;
    planetRef.current.position.z = zPlanet;
    planetRef.current.rotation.y += rotationSpeed;

    if (zoomed) {
      const xCamera = xPlanet - 2;
      const zCamera = zPlanet - 2;
      camera.position.set(xCamera, 0, zCamera);
      camera.lookAt(xPlanet, 0, zPlanet);
    }
  });

  function onClick() {
    if (zoomed) {
      zoomed = false;
    } else {
      zoomed = true;
    }
  }

  return (
    <>
      <mesh ref={planetRef} onClick={onClick}>
        <sphereGeometry args={[size, 100, 100]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </>
  );
}

function Ecliptic({ xRadius = 1, zRadius = 1 }) {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }
  points.push(points[0]);
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#454545" linewidth={0.5} />
    </line>
  );
}
