let initialState = {
  isConfirm: false,
};

const confirmReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_CONFIRM": {
        return {
            ...state,
            isConfirm: action.isConfirm
        }
    }
    default: {
      return state;
    }
  }
};

export default confirmReducer

