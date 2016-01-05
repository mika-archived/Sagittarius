/// <reference path="../typings/tsd.d.ts" />

import * as electron from 'electron';

import {Account} from './models/account';
import {Chatwork} from './network/chatwork';
import {BrowserWindow} from 'electron';

export class Global {
  static ChatworkAccount: Account = null;
  static Chatwork: Chatwork = null;
  static MainWindow: GitHubElectron.BrowserWindow = null;
}