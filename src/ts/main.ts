import * as electron from 'electron';
import {app} from 'electron';
import {BrowserWindow} from 'electron';

electron.crashReporter.start();

var mainWindow: GitHubElectron.BrowserWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL('file://' + __dirname + '/../index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
