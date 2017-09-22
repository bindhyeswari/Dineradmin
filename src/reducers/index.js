
import { combineReducers } from 'redux';

import {ActionTypes} from '../actions/ActionTypes';
import {yelp} from './yelp';

function data(initialState = {
    info: 'Hello World',
    name: 'Jyotika'
}, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_NAME:
            return {
                ...initialState,
                name: action.name
            };
        case ActionTypes.FETCH_USER_NAME_SUCCESS:
            return {
                ...initialState,
                name: action.results.name
            };
        default:
            return initialState;
    }
}

const reducers = combineReducers({
    data,
    yelp
});

export default function rootReducer(state = {}, action) {
    const reducedState = reducers(state, action);
    let newState = null;

    switch (action.type) {
        default:
            return reducedState;
    }
}
