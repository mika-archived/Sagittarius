import {AsyncAction} from './AsyncAction';

export interface ErrorAction extends AsyncAction {
  message: string;
}