const sqlite3 = require('sqlite3').verbose();

// Connessione al database SQLite
const db = new sqlite3.Database('./user.db', (err) => {
  if (err) {
    console.error('Errore di connessione al database:', err.message);
  } else {
    console.log('Connessione al database SQLite riuscita.');
  }
});

module.exports = db;