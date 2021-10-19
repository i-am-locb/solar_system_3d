import { planetsAPI } from "../../API/API_SolarSystem";

const random = (a, b) => a + Math.random() * b;

// export const getPlanets = () => {
//   return (dispatch) => {
//     planetsAPI.getPlanets().then((response) => {
//       dispatch({
//         type: "SET_PLANETS",
//         planets: response.data.bodies,
//       });
//     });
//   };
// };

export const getPlanets = () => {
  return (dispatch) => {
    planetsAPI.getPlanets().then((response) => {
      let arr = response.data.bodies
      arr.sort((prev, next) => prev.aphelion - next.aphelion)
      for (let i = 0; i < arr.length; i++) {
        dispatch({
          type: "ADD_PLANET",
          planet: response.data.bodies[i],
          speed: random(0.005, 0.015),
          offset: random(0, Math.PI * 2),
          rotationSpeed: random(0.001, 0.003),
        })
      }

    });
  };
};

export const zoomPlanet = (name) => {
  return (dispatch) => {
    dispatch({type: 'OFF_ZOOM'})
    dispatch({type: 'ZOOM', name: name})
  }
}



const speed = random(0.005, 0.015);
const offset = random(0, Math.PI * 2);
const rotationSpeed = random(0.001, 0.003);