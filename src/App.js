import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sun from "./Components/Sun";
import Lights from "./Components/Lights";
import Planet from "./Components/Planet/Planet";
import StarSky from "./Components/Stars";
import Warning from "./Components/Warning";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./Redux/Store";

export default function App(props) {
  const isConfirm = useSelector((state) => state.confirmed.isConfirm);
  const planets = useSelector((state) => state.solarSystemData.planets);
  const textures = useSelector((state) => state.solarSystemData.textures);

  const dispatch = useDispatch();

  if (!isConfirm) {
    return <Warning />;
  }
  if (isConfirm) {
    return (
      <Canvas camera={{ position: [0, 20, 45], fov: 45 }}>
        <Suspense fallback={null}>
          <Sun />
          <StarSky />
          <Provider store={store}>
            {planets.map((planet) => (
              <Planet dispatch={dispatch} planet={planet} textures={textures} />
            ))}
          </Provider>
          <Lights />
          <OrbitControls />
        </Suspense>
      </Canvas>
    );
  }
}
