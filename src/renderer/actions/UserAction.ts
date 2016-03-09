import {Action} from '../models/Action';
import {RoomAction} from '../models/RoomAction';
import {ActionTypes} from './ActionTypes';

function selectChatRoom(roomId: number): RoomAction {
  return {
    type: ActionTypes.SelectRoom,
    roomId: roomId
  } as RoomAction;
}