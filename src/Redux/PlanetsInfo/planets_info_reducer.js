const initialState = {
  planetsInfo: null,
  zoomed: false,
  link: null,
  title: null,
};

const planetInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PLANET_INFO": {
      return { 
        ...state,
        text: action.text,
        link: action.link,
        title: action.title
      };
    }
    case 'ENABLE_ZOOM': {
      return { 
        ...state,
        zoomed: true 
      }
    }
    default:
      return state;
  }
};

export default planetInfoReducer;
