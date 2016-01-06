/// <reference path="../../typings/tsd.d.ts" />

import {Account} from './account';

export class Message {
  messageId: number;
  account: Account;
  body: string;
  
  constructor(json) {
    this.messageId = json.message_id;
    this.account = new Account(json.account);
    this.body = json.body;
  }
  
  toHtml(): string {
    var html = '';
    html += this.body;
    return html;
  }
}