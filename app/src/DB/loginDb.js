// import { ipcRenderer } from 'electron-react-ipc';
import { ipcRenderer } from 'electron';


export const login = (name, password) => {

  return new Promise((resolve, reject) => {
    ipcRenderer.once('login-response', (event, response) => {
      ipcRenderer.removeAllListeners('login-response');
      console.log('okkkk',response)
      if (response.error) {
        reject(new Error(response.error));
      } else {
        resolve(response);
      }
    });

    ipcRenderer.send('login-request', { name, password });
  });
};
