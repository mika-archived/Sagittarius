/// <reference path="../../typings/tsd.d.ts" />

export class Account {
  token: string;
  accountId: number;
  name: string;
  avatarImageUrl: string;
  
  constructor(token, json?) {
    this.token = token;
    if(json) {
      this.merge(json);
    }
  }
  
  merge(json) {
    this.accountId = json.account_id;
    this.name = json.name;
    this.avatarImageUrl = json.avatar_image_url;
  }
}