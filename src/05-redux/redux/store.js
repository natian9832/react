import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import TabbarReducer from "./reducers/TabbarReducer";
import CityReducer from "./reducers/CityReducer";
import CinemaListReducer from "./reducers/CinemaListReducer";
import reduxThunk from "redux-thunk"
import reduxPromise from "redux-promise"
import {composeWithDevTools} from 'redux-devtools-extension';

const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemaListReducer
})
let store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxThunk, reduxPromise)));
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose
// const store = createStore(reducer,
//     composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)))

// const store = createStore(reducer, applyMiddleware(reduxThunk, reduxPromise))

export default store