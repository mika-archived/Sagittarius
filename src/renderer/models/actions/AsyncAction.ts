import {Action} from "./Action";

export interface AsyncAction extends Action {
  isFetching: boolean;
}
