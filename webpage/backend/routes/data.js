const express = require('express');
const db = require('../database');

const router = express.Router();

// Endpoint per ottenere tutti i dati dalla tabella user
router.get('/users', (req, res) => {
  db.all(`SELECT id_user, level, name, address FROM user`, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ message: 'Errore nel recupero dei dati.' });
    }

    res.json(rows);
  });
});

module.exports = router;