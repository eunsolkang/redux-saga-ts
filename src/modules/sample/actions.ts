import {
    createAction,
} from 'typesafe-actions';

export const GET_POST = 'sample/GET_POST';
export const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

export const GET_USERS = 'sample/GET_USER';
export const GET_USERS_SUCCESS = 'sample/GET_USER_SUCCESS';

// Create Action!

export const getPost = createAction(GET_POST, id => id)();
export const getUsers = createAction(GET_USERS)();
export const TypeActionsPost = createAction(GET_POST_SUCCESS, d => d)();
export const TypeActionsUser = createAction(GET_USERS_SUCCESS, d => d)();