import {AsyncAction} from '../models/actions/AsyncAction';
import {MeAction} from '../models/actions/MeAction';
import {MembersAction} from '../models/actions/MembersAction';
import {RoomsAction} from '../models/actions/RoomsAction';
import {DummyMe} from '../models/DummyMe';
import {ActionTypes} from '../actions/ActionTypes';

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