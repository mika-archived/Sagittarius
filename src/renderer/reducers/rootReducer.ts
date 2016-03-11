/// <reference path="../../typings/tsd.d.ts" />

import {combineReducers} from 'redux'
import {fetchMe, fetchRooms} from './ChatworkReducer';
import {selectChatRoom} from './UserActionReducer';

const rootReducer = combineReducers({
  fetchMe,
  fetchRooms,
  selectChatRoom
});

export default rootReducer;