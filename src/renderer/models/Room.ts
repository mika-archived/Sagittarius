import {Serializable} from './Serializable';

export class Room extends Serializable {
  roomId: number;
  name: string;
  type: string;
  role: string;
  sticky: boolean;
  unreadNum: number;
  mentionNum: number;
  mytaskNum: number;
  messageNum: number;
  fileNum: number;
  taskNum: number;
  iconPath: string;
  lastUpdateTime: number;
  description: string;
  
  constructor(json: any) {
    super();
    this.fromJson(json);
  }
}