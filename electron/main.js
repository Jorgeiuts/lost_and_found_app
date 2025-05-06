const { app, BrowserWindow } = require("electron");

app.setName("Lost and Found App");

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 730,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    autoHideMenuBar: true,
    icon: __dirname + "/assets/icons/logo_lnf.icns",
  });

  win.loadURL("http://localhost:5173");
  win.onclose = () => {
    win = null;
  };
}

app.whenReady().then(() => {
    createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
  })
})
