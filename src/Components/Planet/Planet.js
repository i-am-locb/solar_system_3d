import { useFrame, useLoader, addTail } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import { zoomPlanet } from "../../Redux/Planets/planets_AC";
import Ecliptic from "./Ecliptic";

// TODO Разобраться как работают кватернионы у камеры

export default function Planet({
  planet: { englishName, aphelion, perihelion, equaRadius, zoomed, speed, offset, rotationSpeed, axialTilt },
  textures,
  dispatch,
}) {

  // TODO понять ка исправить
  let textureMap;
  textures.forEach((element) => {
    if (element.includes("" + englishName + "")) {
      textureMap = element;
    }
  });

  const planetScale = 100000; // 100000
  const orbitScale = 50000000;
  /////////////////////

  const texture = useLoader(THREE.TextureLoader, textureMap);
  // console.log(texture)

  const planetRef = React.useRef();

  useFrame(({ clock, camera }) => {
    const tPlanet = clock.getElapsedTime() * speed + offset;
    const xPlanet = (aphelion / orbitScale + 0.696342) * Math.sin(tPlanet);
    const zPlanet = (perihelion / orbitScale + 0.696342) * Math.cos(tPlanet);
    planetRef.current.position.x = xPlanet;
    planetRef.current.position.z = zPlanet;
    planetRef.current.rotation.y += rotationSpeed;

    if (zoomed) {
      const xCamera =
        xPlanet +
        equaRadius / planetScale +
        Math.sqrt(equaRadius / planetScale);
      const zCamera =
        zPlanet +
        equaRadius / planetScale +
        Math.sqrt(equaRadius / planetScale);
      camera.position.lerp(new THREE.Vector3(xCamera, 0.1, zCamera), 0.01);
      camera.lookAt(xPlanet, 0, zPlanet);
      // camera.quaternion.set(xPlanet, 0.4, zPlanet, 1)
      // camera.quaternion.slerp(new THREE.Vector3(xPlanet, 1, zPlanet), 0.1);
    }
  });

  return (
    <>
      <mesh ref={planetRef} onClick={() => dispatch(zoomPlanet(englishName))}>
        <sphereGeometry args={[equaRadius / planetScale, 100, 100]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <Ecliptic
        xRadius={aphelion / orbitScale + 0.696342}
        zRadius={perihelion / orbitScale + 0.696342}
      />
    </>
  );
}
