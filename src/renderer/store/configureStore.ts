/// <reference path="../../typings/tsd.d.ts" />

import {createStore, applyMiddleware} from 'redux'
import * as thunkMiddleware from 'redux-thunk';
import * as createLogger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);

export default function configureStore(initialState = {}) {
  return createStoreWithMiddleware(rootReducer, initialState);
}