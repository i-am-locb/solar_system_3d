import { planetsAPI } from "../../API/API_SolarSystem";

export const getPlanets = () => {
  return (dispatch) => {
    planetsAPI.getPlanets().then((response) => {
      console.log(response)
      dispatch({
        type: "SET_PLANETS",
        planets: response.data.bodies,
      });
    });
  };
};

export const zoomPlanet = (name) => {
  return (dispatch) => {
    dispatch({type: 'OFF_ZOOM'})
    dispatch({type: 'ZOOM', name: name})
  }
}


