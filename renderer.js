// include the Node.js 'path' module at the top of your file
const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          preload: path.join(__dirname, 'preload.js')
        }
      });
    mainWindow.loadFile('index.html')
});