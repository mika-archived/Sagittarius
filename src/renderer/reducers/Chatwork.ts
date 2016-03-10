import {AsyncAction} from '../models/AsyncAction';
import {MeAction} from '../models/MeAction';
import {ActionTypes} from '../actions/ActionTypes';

export function fetchMe(state: any = {}, action: MeAction) {
  switch (action.type) {
    case ActionTypes.RequestMe:
    case ActionTypes.ResponseMe:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
        me: action.me
      });
    default:
      return state;
  }
}