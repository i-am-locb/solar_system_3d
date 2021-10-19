import { planetsInfoAPI } from "../../API/API_Wikipedia";

export const getPlanetsInfo = (name) => {
    return (dispatch) => {
      planetsInfoAPI.getPlanetsInfo(name).then((response) => {
        
        console.log(response)
          let obj = response.data.query.pages
          for (const property in obj ){
            dispatch({
                type: "ADD_PLANET_INFO",
                text: obj[property].extract,
                link: "https://en.wikipedia.org/?curid=" + obj[property].pageid,
                title: obj[property].title
            })
          }
        })
    }
}

export const enableZoom = () => {
  return (dispatch) => {
    dispatch({
      type: "ENABLE_ZOOM"
    })
  }
}
  