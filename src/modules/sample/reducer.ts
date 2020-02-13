import { SampleState, SampleAction } from "./types";

import { createReducer } from "typesafe-actions";
import * as api from '../../lib/api';
import { GET_POST, GET_POST_SUCCESS, GET_USERS, GET_USERS_SUCCESS } from "./actions";
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../lib/createRequestSaga'


const initialState: SampleState = {
    post : null,
    users : null
};

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);

export function * sampleSaga(){    
    yield takeLatest(GET_POST, getPostSaga);
    yield takeLatest(GET_USERS, getUsersSaga);
}

const sample = createReducer<SampleState, SampleAction>(initialState, {
    [GET_POST_SUCCESS] : (state, action) => ({
        ...state,
        post : action.payload
    }),
    [GET_USERS_SUCCESS] : (state, action) => ({
        ...state,
        users : action.payload
    }),
});

export default sample;