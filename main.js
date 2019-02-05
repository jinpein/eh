const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow


function createWindow() {
    require('electron-reload')(__dirname, {
        electron: require('electron-prebuilt')
    });

    mainWindow = new BrowserWindow({
        width: 1000,
        height: 650,
        resizable: true
    })
    //mainWindow.setFullScreen(true);

    mainWindow.loadURL(`file://${__dirname}/template/index.html`)
    // mainWindow.openDevTools({
    //     mode: 'undocked'
    // })
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}


app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})

