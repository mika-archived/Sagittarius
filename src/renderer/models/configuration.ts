/// <reference path="../../typings/tsd.d.ts" />

import {Chatwork} from '../network/chatwork';
import {Global} from '../global';
import {User} from './user';

export class Configuration {
  lang: string;
  
  constructor() {
    if(!localStorage.getItem('chatwork-config')) {
      localStorage.setItem('chatwork-config', 'true');
      localStorage.setItem('chatwork-config.lang', 'ja-jp');
    }
    
    this.lang = localStorage.getItem('chatwork-config.lang');
  }
}