import { createAction, createReducer } from "@reduxjs/toolkit";

const defaultState = {
    counter: 0
};

export const toolkitIncr = createAction("INCREMENT");
export const toolkitDecr = createAction("DECREMENT");

export const reducer = createReducer(defaultState, {
    [toolkitIncr]: function (state) {
        state.counter = state.counter + 1
    },
    [toolkitDecr]: function (state) {
        state.counter = state.counter - 1
    }
})