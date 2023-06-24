import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import TabbarReducer from "./reducers/TabbarReducer";
import CityReducer from "./reducers/CityReducer";
import CinemaListReducer from "./reducers/CinemaListReducer";
import reduxThunk from "redux-thunk"
import reduxPromise from "redux-promise"
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "natian",
    storage,
    whitelist: ["CityReducer"]
}

const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemaListReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)


let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(reduxThunk, reduxPromise)));
let persistor = persistStore(store)

export {store, persistor}