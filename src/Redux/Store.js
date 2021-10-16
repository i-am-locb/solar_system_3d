import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import confirmReducer from "./Confirm/confirm_reducer";
import thunkMiddleware from 'redux-thunk'
import solarSystemDataReducer from "./Planets/planets_reducer";


let reducers = combineReducers({
  solarSystemData: solarSystemDataReducer,
  confirmed: confirmReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store;
