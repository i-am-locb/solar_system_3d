import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import Sun from "./Components/Sun";
import Lights from "./Components/Lights";
import Planet from "./Components/Planet";
import planetData from "./PlanetsData";



export default function App() {
  return (
    <Canvas camera={{ position: [0, 20, 45], fov: 45 }}>
      <Sun />
      {planetData.map((planet) => (
        <Planet planet={planet} key={planet.id} />
      ))}
      <Lights />
      <OrbitControls />
    </Canvas>
  );
}
