import db from '../DB/connect';

export const login = (name, password) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM User WHERE name = ? AND password = ?`;
    db.all(query, [name, password], (err, rows) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(rows);
      }
    });
  });
};
