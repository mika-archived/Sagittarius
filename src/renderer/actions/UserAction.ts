import {Action} from '../models/actions/Action';
import {RoomAction} from '../models/actions/RoomAction';
import {ActionTypes} from './ActionTypes';

function selectChatRoom(roomId: number): RoomAction {
  return {
    type: ActionTypes.SelectRoom,
    selectedRoomId: roomId
  } as RoomAction;
}