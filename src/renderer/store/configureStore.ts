/// <reference path="../../typings/tsd.d.ts" />

import {createStore, applyMiddleware} from 'redux'
import * as thunkMiddleware from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

export default function configureStore(initialState = {}) {
  return createStoreWithMiddleware(null, initialState);
}