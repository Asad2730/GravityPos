'use strict';
const { app, BrowserWindow } = require('electron')
const {loginEvent} = require('./events/userEvents')
const path = require('path');




const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
      }
    })

     
  win.loadFile(path.join(__dirname, './build/index.html'));
  //  win.loadURL('http://localhost:3000/')
  win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow(); 
   // loginEvent();
  })
