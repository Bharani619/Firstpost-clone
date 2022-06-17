import {legacy_createStore,combineReducers, applyMiddleware, compose}  from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

const rootReducer = combineReducers({NewsData:reducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_COMPOSE__ || compose;

export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);