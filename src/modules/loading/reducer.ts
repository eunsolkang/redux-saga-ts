import { CounterState, CounterAction } from "./types";

import { createReducer } from "typesafe-actions";

import { START_LOADING, FINISH_LOADING } from "./actions";


const initialState: CounterState = {
    count : 0
};

const counter = createReducer<CounterState, CounterAction>(initialState, {
    [START_LOADING] : (state, action) => ({
        ...state,
        [action.payload] : true
    }),
    [FINISH_LOADING] : (state, action)  => ({
        ...state,
        [action.payload] : false
    }),
});

export default counter;