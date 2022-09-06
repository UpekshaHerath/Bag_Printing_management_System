const { app, BrowserWindow } = require('electron');

const createWidow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWidow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWidow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});