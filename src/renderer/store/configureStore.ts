/// <reference path="../../typings/tsd.d.ts" />

import {createStore, applyMiddleware} from "redux";
import * as thunkMiddleware from "redux-thunk";
import * as createLogger from "redux-logger";
import rootReducer from "../reducers/rootReducer";

const loggerMiddleware: Redux.Middleware = createLogger();
const createStoreWithMiddleware: Function = applyMiddleware(
  thunkMiddleware.default,
  loggerMiddleware
)(createStore);

export default function configureStore(initialState: any = {}): Function {
  return createStoreWithMiddleware(rootReducer, initialState);
}
