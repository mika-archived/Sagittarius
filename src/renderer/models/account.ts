/// <reference path="../../typings/tsd.d.ts" />

import {Chatwork} from '../network/chatwork';
import {Global} from '../global';

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
    if(!localStorage.getItem('chatwork-token')) {
      localStorage.setItem('chatwork-token', this.token);
    }
  }
  
  merge(json) {
    this.accountId = json.account_id;
    this.name = json.name;
    this.avatarImageUrl = json.avatar_image_url;
  }
  
  static async load(): Promise<void> {
    if(!localStorage.getItem('chatwork-token')) {
      return null;
    }
    var chatwork = new Chatwork(localStorage.getItem('chatwork-token'));
    var account = await chatwork.me();
    if(account == null) {
      return null;
    }
    Global.Chatwork = chatwork;
    Global.ChatworkAccount = account;
  }
}