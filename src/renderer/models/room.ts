/// <reference path="../../typings/tsd.d.ts" />

export class Room {
  roomId: number;
  name: string;
  iconPath: string;
  
  constructor(json) {
    this.roomId = json.room_id;
    this.name = json.name;
    this.iconPath = json.icon_path;
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