/// <reference path="../../typings/tsd.d.ts" />

var request = require('request');
var querystring = require('querystring');

import {Account} from '../models/account';
import {Message} from '../models/message';
import {Room} from '../models/room';

// とりあえず使うものだけピックアップ
export class Chatwork {
  
  constructor(public token: string) {
  }
  
  /**
   * 自分自身の情報にアクセスできます。
   */
  async me(): Promise<Account> {
    var json = await this.get('/me');
    return new Promise<Account>((resolve, reject) => {
      if(json == '') {
        reject('Response does not json format.');
      } else {
        resolve(new Account(this.token, json));
      }
    });
  }
  
  /**
   * 自分のチャット一覧の取得
   */
  async rooms(): Promise<Room[]> {
    var json = await this.get('/rooms');
    return new Promise<Room[]>((resolve) => {
      json.map((element) => {
        return new Room(json);
      });
    });
  }
  
  /**
   * チャットの名前、アイコン、種類(my/direct/group)を取得
   */
  async roomInfo(id: number): Promise<Room> {
    var json = await this.get('/rooms/' + id);
    return new Promise<Room>((resolve) => resolve(new Room(json)));
  }
  
  async roomMessages(id: number, isForce: boolean): Promise<Message> {
    var json = await this.get('/rooms/' + id + '/messages', { force: isForce ? 1 : 0});
    return new Promise<Message>((resolve) => resolve(json));
  }
  
  private post(endpoint: string, params: any = null): Promise<any> {
    var options = {
      url: 'https://api.chatwork.com/v1' + endpoint,
      headers: {
        'X-ChatWorkToken': this.token
      },
      json: true,
      body: params != null ? JSON.stringify(params) : ''
    };
    return new Promise((resolve, reject) => {
      request.post(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          resolve(body);
        } else {
          reject();
        }
      });
    });
  }
  
  private get(endpoint: string, params: any = null) : Promise<any> {
    var options = {
      url: 'https://api.chatwork.com/v1' + endpoint + (params != null ? '?' + querystring.stringify(params) : ''),
      headers: {
        'X-ChatWorkToken': this.token
      },
      json: true
    };
    return new Promise((resolve, reject) => {
      request.get(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
          resolve(body);
        } else {
          reject();
        }
      });
    });
  }
}