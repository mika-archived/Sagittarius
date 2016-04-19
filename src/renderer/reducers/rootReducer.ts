/// <reference path="../../typings/tsd.d.ts" />

import {combineReducers} from "redux";
import {
  handleError,
  fetchMe,
  fetchRooms,
  fetchRoomMembers,
  fetchRoomMessages
} from "./ChatworkReducer";
import {selectChatRoom} from "./UserActionReducer";

const rootReducer: Redux.Reducer = combineReducers({
  handleError,
  fetchMe,
  fetchRooms,
  fetchRoomMembers,
  fetchRoomMessages,
  selectChatRoom
});

export default rootReducer;
