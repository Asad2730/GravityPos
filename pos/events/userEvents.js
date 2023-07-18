'use strict';
const { ipcMain } = require('electron');
const { login } = require('../db/users');


const modules = {};


modules.loginEvent = () =>{
    
    ipcMain.on('login-request', (event, args) => {
        const { name, password } = args;
        login(name, password)
          .then((rows) => {
            event.reply('login-response', rows);
          })
          .catch((error) => {
            event.reply('login-response', { error: error.message });
          });
      });

 }


 module.exports = modules;

