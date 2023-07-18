'use strict';
const { app, BrowserWindow } = require('electron')

const {loginEvent} = require('./events/userEvents')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
      }
    })

    // win.loadFile('')
    win.loadURL('http://localhost:3000/')
}

app.whenReady().then(() => {
    createWindow(); 
    loginEvent();
  })
