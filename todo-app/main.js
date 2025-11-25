const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // ブラウザウィンドウを作成します。
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js') // セキュリティのため、将来的にはpreloadスクリプトを使うのが推奨されますが、今回はシンプルに
    }
  });

  // そしてアプリの index.html を読み込みます。
  mainWindow.loadFile('index.html');

  // デベロッパー ツールを開きます。
  // mainWindow.webContents.openDevTools();
}

// このメソッドは、Electron の初期化が完了し、
// ブラウザウィンドウの作成準備ができたときに呼び出されます。
app.whenReady().then(() => {
  createWindow();
});