import sqlite3 from 'sqlite3';
const DB_PATH = './posDb.db';

const db = new sqlite3.Database(DB_PATH, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.log('Connection Error',err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

export default db;
