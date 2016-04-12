import {AsyncAction} from '../models/actions/AsyncAction';
import {ErrorAction} from '../models/actions/ErrorAction';
import {MeAction} from '../models/actions/MeAction';
import {MessagesAction} from '../models/actions/MessagesAction';
import {MembersAction} from '../models/actions/MembersAction';
import {RoomsAction} from '../models/actions/RoomsAction';
import {DummyMe} from '../models/DummyMe';
import {ActionTypes} from '../actions/ActionTypes';

export function handleError(state: any = {}, action: ErrorAction) {
  switch (action.type) {
    case ActionTypes.ResponseError:
      return action.message;
    default:
      return state;
  }
}

export function fetchMe(state: any = {}, action: MeAction) {
  switch (action.type) {
    case ActionTypes.RequestMe:
    case ActionTypes.ResponseMe:
      return action.me
    default:
      return state;
  }
}

export function fetchRooms(state: any = {}, action: RoomsAction) {
  switch (action.type) {
    case ActionTypes.RequestRooms:
    case ActionTypes.ResponseRooms:
      return action.rooms;
    default:
      return state;
  }
}

export function fetchRoomMembers(state: any = {}, action: MembersAction) {
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

export function fetchRoomMessages(state: any = {}, action: MessagesAction) {
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