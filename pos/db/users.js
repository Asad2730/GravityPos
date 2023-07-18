const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./posDb.db');

const modules = {};

 modules.insertUser = (name, password) => {
 
  
    const query = `INSERT INTO UserTable (name, password) VALUES (?, ?)`;
    db.run(query, [name, password], function (err) {
      if (err) {
        console.error('err',err.message);
      } else {
        console.log(`User ${name} inserted with ID ${this.lastID}`);
      }
    });
  };


  modules.login = (name, password) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM UserTable WHERE name = ? AND password = ?`;
      db.all(query, [name, password], (err, rows) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(rows);
        }
      });
    });
  };
  



  module.exports = modules;