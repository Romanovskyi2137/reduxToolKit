import { combineReducers, createStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    vanillaCounter: reducer
})

export const store = createStore(rootReducer, composeWithDevTools());

