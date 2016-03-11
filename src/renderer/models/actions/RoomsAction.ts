import {AsyncAction} from './AsyncAction';
import {Room} from '../Room';

export interface RoomsAction extends AsyncAction {
  rooms: Room[];
}