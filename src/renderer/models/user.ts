/// <reference path="../../typings/tsd.d.ts" />

export class User {
  userId: number;
  name: string;
  avatarImageUrl: string;
  
  constructor(json) {
    if(!json) {
      return;
    }
    this.userId = json.account_id;
    this.name = json.name;
    this.avatarImageUrl = json.avatar_image_url;
  }
}