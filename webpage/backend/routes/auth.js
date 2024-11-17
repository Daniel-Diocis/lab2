const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../database'); // Connessione al database SQLite

const router = express.Router();

// Endpoint di registrazione
router.post('/register', async (req, res) => {
  const { id_user, name, address, password } = req.body;

  if (!id_user || !name || !address || !password) {
    return res.status(400).json({ message: 'Tutti i campi sono obbligatori.' });
  }

  try {
    // Crittografa la password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Inserisci l'utente nel database
    db.run(
      `INSERT INTO user (id_user, level, name, address, password) VALUES (?, 0, ?, ?, ?)`,  // Tabella 'user'
      [id_user, name, address, hashedPassword],
      (err) => {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ message: 'Errore nella registrazione dell\'utente.' });
        }

        res.status(201).json({ message: 'Utente registrato con successo.' });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Errore interno del server.' });
  }
});

// Endpoint di login
router.post('/login', (req, res) => {
  const { id_user, password } = req.body;

  if (!id_user || !password) {
    return res.status(400).json({ message: 'ID utente e password sono obbligatori.' });
  }

  // Cerca l'utente nel database
  db.get(
    `SELECT * FROM user WHERE id_user = ?`,  // Tabella 'user'
    [id_user],
    async (err, user) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ message: 'Errore interno del server.' });
      }

      if (!user) {
        return res.status(401).json({ message: 'Credenziali non valide.' });
      }

      // Verifica la password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Credenziali non valide.' });
      }

      res.json({ message: 'Login riuscito!', id_user: user.id_user, name: user.name });
    }
  );
});

module.exports = router;