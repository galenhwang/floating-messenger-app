const {app, BrowserWindow} = require('electron');
let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 300,
    height: 350,
    frame: false
  });
  mainWindow.loadFile('index.html');
  mainWindow.setAlwaysOnTop(true);
  // mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
});
