const { app, BrowserWindow } = require('electron/main')
if (require('electron-squirrel-startup')) app.quit();
const createWindow = () => {
  const win = new BrowserWindow({
    // frame:false,
    autoHideMenuBar:true,
    minimizable:false,
    titleBarStyle: 'customButtonsOnHover',
    titleBarOverlay:true,
    useContentSize:true,
    opacity:1,
    closable:false,
    resizable:false,
    maximizable:false,
    // x:0,
    // y:0,
    
    skipTaskbar:true,
    icon:"./assets/favicon.ico",
    width: 400,
    height: 200
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
   createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }

  })
  app.on('show', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
     createWindow()
    }
    

    
  })
  
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})