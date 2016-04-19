import {Me} from "../models/Me";
import {Room} from "../models/Room";
import {ErrorAction} from "../models/actions/ErrorAction";
import {MeAction} from "../models/actions/MeAction";
import {MessagesAction} from "../models/actions/MessagesAction";
import {MembersAction} from "../models/actions/MembersAction";
import {RoomsAction} from "../models/actions/RoomsAction";
import {ActionTypes} from "../actions/ActionTypes";

export function handleError(state: any = {}, action: ErrorAction): string {
  switch (action.type) {
    case ActionTypes.ResponseError:
      return action.message;
    default:
      return "";
  }
}

export function fetchMe(state: any = {}, action: MeAction): Me {
  switch (action.type) {
    case ActionTypes.RequestMe:
    case ActionTypes.ResponseMe:
      return action.me;
    default:
      return state;
  }
}

export function fetchRooms(state: any = {}, action: RoomsAction): Room[] {
  switch (action.type) {
    case ActionTypes.RequestRooms:
    case ActionTypes.ResponseRooms:
      return action.rooms;
    default:
      return state;
  }
}

export function fetchRoomMembers(state: any = {}, action: MembersAction): any {
  switch (action.type) {
    case ActionTypes.RequestRoomMembers:
    case ActionTypes.ResponseRoomMembers:
      return Object.assign({}, state, {
        [action.roomId]: {
          members: action.members
        }
      });
    default:
      return state;
  }
}

export function fetchRoomMessages(state: any = {}, action: MessagesAction): any {
  switch (action.type) {
    case ActionTypes.RequestRoomMessages:
    case ActionTypes.ResponseRoomMessages:
      return Object.assign({}, state, {
        [action.roomId]: {
          messages: action.messages
        }
      });
    default:
      return state;
  }
}
