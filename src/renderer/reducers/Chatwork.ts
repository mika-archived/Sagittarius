import {AsyncAction} from '../models/actions/AsyncAction';
import {MeAction} from '../models/actions/MeAction';
import {DummyMe} from '../models/DummyMe';
import {ActionTypes} from '../actions/ActionTypes';

const initializeState = {
  me: new DummyMe()
};

export function fetchMe(state: any = initializeState, action: MeAction) {
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