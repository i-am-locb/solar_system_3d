import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import confirmReducer from "./confirm_reducer";
import planetsReducer from "./planets_reducer";
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
  planets: planetsReducer,
  confirmed: confirmReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store;
