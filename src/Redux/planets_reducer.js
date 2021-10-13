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

const initialState = [];

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

let planetScale = 100000; // 100000
let orbitScale = 50000000;

function planet(planet) {
  this.id = planet.name;
  this.zRadius = (planet.perihelion / orbitScale) + 0.696342;
  this.xRadius = (planet.aphelion / orbitScale) + 0.696342;
  this.size = planet.equaRadius / planetScale;
  this.rotationSpeed = random(0.005, 0.015) // planet.sideralRotation / 5000;
  this.speed = random(0.1, 0.04);
  this.zoomed = false;
  this.offset = random(0.005, 0.015);
  this.axialTilt = planet.axialTilt; // Угол наклона оси
}

const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default planetsReducer;

// => (dispatch)


export const getPlanets = () => {
  planetsAPI.getPlanets().then((response) => {
    for (let i = 0; i < response.data.bodies.length; i++) {
      let x = new planet(response.data.bodies[i]);
      initialState.push(x);
    }
    initialState.sort((prev, next) => prev.zRadius - next.zRadius);
    for (let i = 0; i < initialState.length; i++) {
      initialState[i].textureMap = textures[i];
    }
  });
};

getPlanets();

