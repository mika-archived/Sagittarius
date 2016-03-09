import {RoomAction} from '../models/RoomAction';
import {ActionTypes} from '../actions/ActionTypes';

export function selectChatRoom(state: number = -1, action: RoomAction): number {
  if(action.type == ActionTypes.SelectRoom) {
    return action.roomId;
  }
  return state;
}