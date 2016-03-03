/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../main.ts" />

import * as electron from 'electron';
import {app} from 'electron';
import {BrowserWindow} from 'electron';
import * as Notifier from 'node-notifier';

import {Global} from '../renderer/global';

var ipc = require("electron").ipcMain;

export class Application {
  
  constructor() {
    electron.crashReporter.start();
    
    app.on('window-all-closed', this.onWindowAllClosed); 
    app.on('ready', this.onReady);
    ipc.on('desktop-notification', this.desktopNotification);
  }
  
  private onWindowAllClosed() {
    if (process.platform != 'darwin') {
      app.quit();
    }
  }
  
  private onReady() {
    var window = new BrowserWindow({
      width: 800,
      height: 600,
      minWidth: 500
    });
    window.loadURL('file://' + __dirname + '/../index.html');
    window.on('closed', () => { Global.MainWindow = null; });
    
    Global.MainWindow = window;
  }
  
  private desktopNotification(e, arg) {
    if(!Global.MainWindow.isFocused) {
      Notifier.notify(arg, () => {});
    }
  }
  
}
