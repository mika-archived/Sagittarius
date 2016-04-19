import {RoomAction} from "../models/actions/RoomAction";
import {ActionTypes} from "./ActionTypes";

export function selectChatRoom(roomId: number): RoomAction {
  return {
    selectedRoomId: roomId,
    type: ActionTypes.SelectRoom
  } as RoomAction;
}
