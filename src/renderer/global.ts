/// <reference path="../typings/tsd.d.ts" />

import {Account} from './models/account';
import {Chatwork} from './network/chatwork';

export class Global {
  static ChatworkAccount: Account;
  static Chatwork: Chatwork;
}