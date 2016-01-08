/// <reference path="../../typings/tsd.d.ts" />

export class Status {
  unreadRoomNum: number;
  unreadNum: number;
  
  constructor(json) {
    this.unreadRoomNum = json.unread_room_num;
    this.unreadNum = json.unread_num;
  }
}