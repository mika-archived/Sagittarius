/// <reference path="../../typings/tsd.d.ts" />

import {Global} from '../global';
import {User} from './user';

export class Room {
  roomId: number;
  name: string;
  iconPath: string;
  members: User[];
  
  constructor(json) {
    this.roomId = json.room_id;
    this.name = json.name;
    this.iconPath = json.icon_path;
    
    if(this.roomId == 0) {
      return;
    }
    Global.Chatwork.roomMembers(this.roomId).then((u) => {
      this.members = u;
    });
  }
}

export class DummyRoom extends Room {
  constructor() {
    super({
      room_id: 0,
      name: '',
      icon_path: ''
    });
  }
}