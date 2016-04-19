/// <reference path="../typings/tsd.d.ts" />

import * as electron from "electron";
import {app} from "electron";

export default class Application {

  private mainWindow: Electron.BrowserWindow;

  constructor() {
    app.on("window-all-closed", this.onWindowAllClosed);
    app.on("ready", this.onReady);
  }

  private onWindowAllClosed(): void {
    if (process.platform !== "darwin") {
      app.quit();
    }
  }

  private onReady(): void {
    this.mainWindow = new electron.BrowserWindow({
      height: 600,
      minWidth: 500,
      width: 1000
    });
    this.mainWindow.loadURL("file://" + __dirname + "/../index.html");
    this.mainWindow.on("closed", () => this.mainWindow = null);
  }
}
