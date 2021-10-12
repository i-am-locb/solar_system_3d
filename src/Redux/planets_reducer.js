import MercuryMap from "../Textures/Mercury.jpg";
import VenusMap from "../Textures/Venus.jpg";
import EarthMap from "../Textures/Earth.jpg";
import EarthCloudsMap from "../Textures/EarthClouds.jpg";
import MarsMap from "../Textures/Mars.jpg";
import JupiterMap from "../Textures/Jupiter.jpg";
import SaturnMap from "../Textures/Saturn.jpg";
import UranusMap from "../Textures/Uranus.jpg";
import NeptuneMap from "../Textures/Neptune.jpg";
import { planetsAPI } from "../API/API_SolarSystem";

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

const initialState = [];
const totalPlanets = 8;
for (let index = 0; index < totalPlanets; index++) {
  initialState.push({
    id: index,
    xRadius: (index + 1) * 12,
    zRadius: (index + 1) * 6,
    size: random(0.5, 1),
    speed: random(0.1, 0.04),
    offset: (index + 1.5) * 8,
    rotationSpeed: random(0.005, 0.015),
    textureMap: textures[index],
    zoomed: false,
    toggleZoom() {
      if (!this.data.zoomed) {
        this.zoomed = true;
      } else {
        this.zoomed = false;
      }
    },
  });
}

const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default planetsReducer;
export const getPlanets = () => (dispatch) => {
  planetsAPI.getPlanets().then((response) => {
    //   if (response.status === 200) {
    console.log(response);
    //   }
  });
};
