import { CounterState, CounterAction } from "./types";

import { createReducer } from "typesafe-actions";

import { INCREASE, DECREASE, INCREASE_BY, increase, decrease, INCREASE_ASYNC, DECREASE_ASYNC } from "./actions";

import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects'


const initialState: CounterState = {
    count : 0
};

function * increaseSaga(){
    yield delay(1000);
    yield put(increase());
}

function * decreaseSaga(){
    yield delay(1000);
    yield put(decrease());
}

export function * counterSaga(){    
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}
const counter = createReducer<CounterState, CounterAction>(initialState, {
    [INCREASE] : state => ({count : state.count + 1}),
    [DECREASE] : state => ({count : state.count - 1}),
    [INCREASE_BY] : (state, action) => ({count : state.count + action.payload}),
});

export default counter;