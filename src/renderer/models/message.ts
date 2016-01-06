/// <reference path="../../typings/tsd.d.ts" />

import {User} from './user';

export class Message {
  messageId: number;
  account: User;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  
  constructor(json) {
    this.messageId = json.message_id;
    this.account = new User(json.account);
    this.body = json.body;
    this.createdAt = new Date(+json.send_time * 1000);
    this.updatedAt = new Date(+json.update_time * 1000);
  }
  
  toHtml(): string {
    var html = '';
    html += this.body;
    return html;
  }
}