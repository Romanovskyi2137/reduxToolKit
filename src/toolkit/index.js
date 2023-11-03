import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./toolkitSlice";
import todosReducer from "./todoSlice";



const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todosReducer
});

export const store = configureStore({
    reducer: rootReducer
})