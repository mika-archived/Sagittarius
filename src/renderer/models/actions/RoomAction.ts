import {Action} from './Action';

export interface RoomAction extends Action {
  selectedRoomId: number;
}