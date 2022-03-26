const { app, BrowserWindow } = require("electron"); //1K (gzipped: 524) 
let win = null;
const createWindow = () => {
 win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win. loadFile("index.html");
};
app.whenReady ().then(createWindow);