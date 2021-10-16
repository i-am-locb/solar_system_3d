import Mercury from "../../Textures/Mercury.jpg";
import Venus from "../../Textures/Venus.jpg";
import Earth from "../../Textures/Earth.jpg";
// import EarthCloudsMap from "../../Textures/EarthClouds.jpg";
import Mars from "../../Textures/Mars.jpg";
import Jupiter from "../../Textures/Jupiter.jpg";
import Saturn from "../../Textures/Saturn.jpg";
import Uranus from "../../Textures/Uranus.jpg";
import Neptune from "../../Textures/Neptune.jpg";

const initialState = {
  planets: [],
  textures: [Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune],
};

const solarSystemDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PLANETS": {
      return {
        ...state,
        planets: [
          ...action.planets.map((p) => {
            return {
              ...p,
              zoomed: false,
            };
          }),
        ],
      };
    }
    case "OFF_ZOOM": {
      return {
        ...state,
        planets: [
          ...state.planets.map((p) => {
            return {
              ...p,
              zoomed: false,
            };
          }),
        ],
      };
    }
    case "ZOOM": {
      return {
        ...state,
        planets: [
          ...state.planets.map((p) => {
            if ((p.englishName == action.name)) {
              return {
                ...p,
                zoomed: true,
              };
            }
            return p;
          }),
        ],
      };
    }
    default:
      return state;
  }
};

export default solarSystemDataReducer;
