const { Menu, BrowserWindow } = require('electron')

var template = [
    {
        label: '文件',
        // 子菜单
        submenu: [
            {
                label: 'SPA',
                accelerator: `ctrl+n`,
                click: () => { 
                    var win = new BrowserWindow({
                        width: 500,
                        height: 500,
                        webPreferences: { nodeIntegration: true }
                    })
                    win.loadFile('yellow.html')
                    win.on('closed', () => { 
                        win = null
                    })
                }
            },
            {
                label: 'SPA-'
            },
        ]
    }, {
        label: '菜单',
        submenu: [
            {
                label: 'SPB'
            },
            {
                label: 'SPB-'
            },
        ]
    }
]

var m = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(m)