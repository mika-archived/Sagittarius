/// <reference path="../../typings/tsd.d.ts" />

import {combineReducers} from 'redux'
import {
  fetchMe, 
  fetchRooms,
  fetchRoomMembers,
  fetchRoomMessages
} from './ChatworkReducer';
import {selectChatRoom} from './UserActionReducer';

const rootReducer = combineReducers({
  fetchMe,
  fetchRooms,
  fetchRoomMembers,
  fetchRoomMessages,
  selectChatRoom
});

export default rootReducer;