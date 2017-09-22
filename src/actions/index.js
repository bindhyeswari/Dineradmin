import {ActionTypes} from './ActionTypes';
import * as API from '../API';

export function updateName (name) {
    return {
        type: ActionTypes.UPDATE_NAME,
        name
    };
}

export function fetchUser() {
    return (dispatch, getState) => {
        dispatch({
            type: ActionTypes.FETCH_USER_NAME
        });

        API.getUsers().then((results) => {
            dispatch({
                type: ActionTypes.FETCH_USER_NAME_SUCCESS,
                results
            });
        }, (err) => {
            dispatch({
                type: ActionTypes.FETCH_USER_NAME_FAILURE,
                err
            });
        })
    }
}