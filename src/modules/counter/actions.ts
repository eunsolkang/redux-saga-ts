import {
    createAction,
    ActionType,
    createReducer,
} from 'typesafe-actions';

export const INCREASE = 'counter/INCREASE';
export const DECREASE = 'counter/DECREASE';
export const INCREASE_BY = 'counter/INCREASE_BY' ;

export const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
export const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

// export const increase = () => ( { type : INCREASE} );
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();

export const increase_async = createAction(INCREASE_ASYNC, ()=> undefined)();
export const decrease_async = createAction(DECREASE_ASYNC, ()=> undefined)();

