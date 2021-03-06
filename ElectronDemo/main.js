var electron = require('electron')

var app = electron.app // 引用app
var globalShortcut = electron.globalShortcut

var BrowserWindow = electron.BrowserWindow  // 窗口引用

var mainWindow = null // 申明需要打开的窗口

app.on('ready', () => { 
    mainWindow = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: { nodeIntegration: true }  // 使得node在别的代码中可以使用
    })

    globalShortcut.register('ctrl+e', () => { 
        mainWindow.loadURL('http://www.baidu.com')
    })

    let isRegister = globalShortcut.isRegistered('ctrl+e') ? 'Register Success' : 'Register fail'
    console.log(isRegister)

    // mainWindow.webContents.openDevTools()
    require('./main/menu.js')
    // mainWindow.loadFile('demo6.html')
    mainWindow.loadURL('http://www.baidu.com')
    // BrowserView
    // var BrowserView = electron.BrowserView
    // var view = new BrowserView()
    // mainWindow.setBrowserView(view)
    // view.setBounds({
    //     x: 0,
    //     y: 120,
    //     width: 1200,
    //     height:680
    // })
    // view.webContents.loadURL('http://www.baidu.com')

    mainWindow.on('closed', () => { 
        mainWindow = null
    })
})

app.on('will-quit', function () { 
    // 注销全局快捷键
    globalShortcut.unregister('ctrl+e')
    globalShortcut.unregisterAll()
})