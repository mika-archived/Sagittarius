import {AsyncAction} from './AsyncAction';
import {Contact} from '../Contact';

export interface MembersAction extends AsyncAction {
  roomId: number;
  members: Contact[];
}