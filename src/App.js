import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sun from "./Components/Sun";
import Lights from "./Components/Lights";
import Planet from "./Components/Planet";
import planetData from "./PlanetsData";
import StarSky from "./Components/Stars";
import { getPlanets } from "./Redux/planets_reducer";
import Warning from "./Components/Warning";


export default function App(props) {
  let x = props.store.getState()
  console.log(props)
  if (!x.confirmed.isConfirm) {
    return (
      <Warning store={props.store}/>
    )
  } else {
    return (
      <Canvas camera={{ position: [0, 20, 45], fov: 45 }}>
        <Suspense fallback={null}> 
          <Sun />
          <StarSky />
          {planetData.map((planet) => (
            <Planet planet={planet} key={planet.id} />
          ))}
          <Lights />
          <OrbitControls />
        </Suspense>
      </Canvas>
  );}
}
