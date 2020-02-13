import {
    createAction,
    ActionType,
    createReducer,
} from 'typesafe-actions';

export const ADD_TODO = 'todo/ADD_TODO';
export const TOGGLE_TODO = 'todo/TOGGLE_TODO';
export const REMOVE_TODO = 'todo/REMOVE_TODO';

export const addTodo = createAction(ADD_TODO)<string>();
export const toggleTodo = createAction(TOGGLE_TODO)<number>();
export const removeTodo = createAction(REMOVE_TODO)<number>();