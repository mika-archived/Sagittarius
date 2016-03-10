/// <reference path="../../typings/tsd.d.ts" />

import {combineReducers} from 'redux'
import {fetchMe} from './ChatworkReducer';
import {selectChatRoom} from './UserActionReducer';

const rootReducer = combineReducers({
  fetchMe,
  selectChatRoom
});

export default rootReducer;