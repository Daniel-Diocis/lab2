const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');
const dataRouter = require('./routes/data'); // Importa il router dei dati

const app = express(); // Definisci l'applicazione Express

// Middleware
app.use(bodyParser.json());

// Usa il router per le rotte di autenticazione
app.use('/api/auth', authRouter);

// Usa il router per le rotte dei dati
app.use('/api/data', dataRouter);

// Imposta la porta per il server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});