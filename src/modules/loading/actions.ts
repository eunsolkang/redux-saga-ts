import {
    createAction,
} from 'typesafe-actions';

export const START_LOADING = 'loading/START_LOADING';
export const FINISH_LOADING = 'loading/FINISH_LOADING';

// Create Action!

export const startLoading = createAction(START_LOADING, requestType => requestType)();
export const finishLoading = createAction(FINISH_LOADING, requestType => requestType)();



