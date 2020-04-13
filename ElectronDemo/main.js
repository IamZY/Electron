var electron = require('electron')

var app = electron.app // 引用app

var BrowserWindow = electron.BrowserWindow  // 窗口引用

var mainWindow = null // 申明需要打开的窗口

app.on('ready', () => { 
    mainWindow = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: { nodeIntegration: true }
    })
    mainWindow.webContents.openDevTools()
    require('./main/menu.js')
    mainWindow.loadFile('demo3.html')

    // BrowserView
    var BrowserView = electron.BrowserView
    var view = new BrowserView()
    mainWindow.setBrowserView(view)
    view.setBounds({
        x: 0,
        y: 120,
        width: 1200,
        height:680
    })
    view.webContents.loadURL('http://www.baidu.com')

    mainWindow.on('closed', () => { 
        mainWindow = null
    })
})