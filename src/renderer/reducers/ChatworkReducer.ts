import {AsyncAction} from '../models/actions/AsyncAction';
import {MeAction} from '../models/actions/MeAction';
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