/// <reference path="../../typings/tsd.d.ts" />

import {combineReducers} from 'redux'
import {
  fetchMe, 
  fetchRooms,
  fetchRoomMembers
} from './ChatworkReducer';
import {selectChatRoom} from './UserActionReducer';

const rootReducer = combineReducers({
  fetchMe,
  fetchRooms,
  fetchRoomMembers,
  selectChatRoom
});

export default rootReducer;