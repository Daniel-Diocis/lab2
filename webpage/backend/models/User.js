const db = require('../database'); // Connessione al database

// Funzione per registrare un utente
const registerUser = (email, password, callback) => {
  const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.run(query, [email, password], function(err) {
    if (err) {
      return callback(err);
    }
    callback(null, { id: this.lastID, email });
  });
};

// Funzione per trovare un utente per email
const findUserByEmail = (email, callback) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  db.get(query, [email], (err, row) => {
    if (err) {
      return callback(err);
    }
    callback(null, row);
  });
};

// Funzione per comparare la password
const comparePassword = (inputPassword, storedPassword) => {
  // Usare bcrypt per la comparazione
  return inputPassword === storedPassword;
};

module.exports = { registerUser, findUserByEmail, comparePassword };