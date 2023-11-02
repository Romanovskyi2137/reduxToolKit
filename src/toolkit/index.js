import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { reducer } from "./toolkitReducer";
import reducer from "./toolkitSlice";


const rootReducer = combineReducers({
    counter: reducer
});

export const store = configureStore({
    reducer: rootReducer
})