/// <reference path="../../typings/tsd.d.ts" />

var request = require('request');
var querystring = require('querystring');

import {Account} from '../models/account';
import {Message} from '../models/message';
import {Room} from '../models/room';
import {User} from '../models/user';

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
    return new Promise<Room[]>((resolve, reject) => {
      if(json == '') {
        reject('Response does not json format.');
      } else {
        resolve(json.map((element) => {
          return new Room(element);
        }));
      }
    });
  }
  
  /**
   * チャットの名前、アイコン、種類(my/direct/group)を取得
   */
  async roomInfo(id: number): Promise<Room> {
    var json = await this.get('/rooms/' + id);
    return new Promise<Room>((resolve) => resolve(new Room(json)));
  }
  
  /**
   * チャットのメンバー一覧を取得
   */
  async roomMembers(id: number): Promise<User[]> {
    var json = await this.get('/rooms/' + id + '/members');
    return new Promise<User[]>((resolve, reject) => {
      if(json == '') {
        reject('Response does not json format.');
      } else {
        resolve(json.map((element) => {
          return new User(element);
        }));
      }
    });
  }
  
  /**
   * チャットのメッセージ一覧を取得。パラメータ未指定だと前回取得分からの差分のみを返します。(最大100件まで取得)
   */
  async roomMessages(id: number, isForce: boolean): Promise<Message[]> {
    var json = await this.get('/rooms/' + id + '/messages', { force: isForce ? 1 : 0});
    return new Promise<Message[]>((resolve, reject) => {
      if(json == '') {
        reject('Response does not json format.');
      } else {
        resolve(json.map((element) => {
          return new Message(element);
        }))
      }
    });
  }
  
  /**
   * チャットに新しいメッセージを追加
   */
  async newRoomMessage(id: number, text: string): Promise<void> {
    var json = await this.post('/rooms/' + id + '/messages', {body: text});
    return new Promise<void>((resolve, reject) => {
      if(json == '') {
        reject('Response does not json format.');
      } else {
        resolve();
      }
    });
  }
  
  private post(endpoint: string, params: any = null): Promise<any> {
    var options = {
      url: 'https://api.chatwork.com/v1' + endpoint,
      headers: {
        'X-ChatWorkToken': this.token
      },
      json: true,
      form: params != null ? querystring.stringify(params) : ''
    };
    return new Promise((resolve, reject) => {
      request.post(options, (error, response, body) => {
        console.log('X-RateLimit-Remaining: ' + response.headers['x-ratelimit-remaining']);
        console.log('X-ReteLimit-Reset: ' + new Date(+response.headers['x-ratelimit-reset'] * 1000).toLocaleString());
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
        console.log('X-RateLimit-Remaining: ' + response.headers['x-ratelimit-remaining']);
        console.log('X-ReteLimit-Reset: ' + new Date(+response.headers['x-ratelimit-reset'] * 1000).toLocaleString());
        if (!error && response.statusCode == 200) {
          resolve(body);
        } else {
          reject();
        }
      });
    });
  }
}