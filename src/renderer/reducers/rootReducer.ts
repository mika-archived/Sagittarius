/// <reference path="../../typings/tsd.d.ts" />

import {combineReducers} from 'redux'
import {fetchMe} from './Chatwork';
import {selectChatRoom} from './UserAction';

const rootReducer = combineReducers({
  fetchMe,
  selectChatRoom
});

export default rootReducer;