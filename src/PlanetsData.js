import MercuryMap from "./Textures/mercury.jpg";
import VenusMap from "./Textures/venus_surface.jpg";
import EarthMap from "./Textures/Earth.jpg";
import EarthCloudsMap from "./Textures/EarthClouds.jpg";
import MarsMap from "./Textures/mars.jpg";
import JupiterMap from "./Textures/jupiter.jpg";
import SaturnMap from "./Textures/saturn.jpg";
import UranusMap from "./Textures/uranus.jpg";
import NeptuneMap from "./Textures/neptune.jpg";

const random = (a, b) => a + Math.random() * b;

const textures = [
  MercuryMap,
  VenusMap,
  EarthMap,
  MarsMap,
  JupiterMap,
  SaturnMap,
  UranusMap,
  NeptuneMap,
];

const planetData = [];
const totalPlanets = 8;
for (let index = 0; index < totalPlanets; index++) {
  planetData.push({
    id: index,
    xRadius: (index + 1.5) * 4,
    zRadius: (index + 1.5) * 2,
    size: random(0.5, 1),
    speed: random(0.5, 0.2),
    offset: random(0, Math.PI * 2),
    rotationSpeed: random(0.01, 0.03),
    textureMap: textures[index],
  });
}

export default planetData;
