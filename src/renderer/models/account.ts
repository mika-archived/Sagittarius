/// <reference path="../../typings/tsd.d.ts" />

import {Chatwork} from '../network/chatwork';
import {Global} from '../global';
import {User} from './user';

export class Account extends User{
  token: string;
  
  constructor(token, json?) {
    super(json);
    this.token = token;
    if(!localStorage.getItem('chatwork-token')) {
      localStorage.setItem('chatwork-token', this.token);
    }
  }
  
  merge(json) {
    this.userId = json.account_id;
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