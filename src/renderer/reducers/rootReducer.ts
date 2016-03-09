/// <reference path="../../typings/tsd.d.ts" />

import {combineReducers} from 'redux'
import {selectChatRoom} from './UserAction';

const rootReducer = combineReducers({
  selectChatRoom
});

export default rootReducer;