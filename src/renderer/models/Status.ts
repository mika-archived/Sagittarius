import {Serializable} from './Serializable';

export class Status extends Serializable {
  unreadRoomNum: number;
  mentionRoomNum: number;
  mytaskRoomNum: number;
  unreadNum: number;
  mentionNum: number;
  mytaskNum: number;
  
  constructor(json: any) {
    super();
    this.fromJson(json);
  }
}