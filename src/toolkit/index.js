import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer } from "./toolkitReducer";


const rootReducer = combineReducers({
    counter: reducer
});

export const store = configureStore({
    reducer: rootReducer
})