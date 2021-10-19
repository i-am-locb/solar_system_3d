import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, useProgress } from "@react-three/drei";
import Sun from "./Components/Sun";
import Lights from "./Components/Lights";
import Planet from "./Components/Planet/Planet";
import StarSky from "./Components/Stars";
import Warning from "./Components/Warning/Warning";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./Redux/Store";
import Navigation from "./Components/Navigation/Navigation";
import InfoBar from "./Components/InfoBar/InfoBar";

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
      <>
        <Canvas camera={{ position: [0, 20, 65], fov: 45 }}>
          <Suspense fallback={<Loader />}>
            <Provider store={store}>
            <Sun />
            <StarSky />
              {planets.map((planet) => (
                <Planet
                  dispatch={dispatch}
                  planet={planet}
                  textures={textures}
                  key={planet.id}
                />
              ))}
            <Lights />
            <OrbitControls />
            </Provider>
          </Suspense>
        </Canvas>
        <InfoBar />
        <Navigation />
      </>
    );
  }
}

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  console.log({active, progress, errors, item, loaded, total});
  return <Html center>{progress} % loaded</Html>;
}
