import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import combinedReducers from './reducers';

const loggerMiddleware = createLogger({});

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore);
export default function configureStore(initialState) {
    return createStoreWithMiddleware(combinedReducers, initialState);
}