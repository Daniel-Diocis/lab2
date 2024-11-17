import React, { useState } from 'react';
import axios from 'axios'; // Per fare la richiesta HTTP
import UserTable from './components/UserTable';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [idUser, setIdUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      // Chiamata al backend per il login
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        id_user: idUser,
        password: password,
      });

      if (response.status === 200) {
        setIsLoggedIn(true); // Imposta lo stato su true se il login è riuscito
      }
    } catch (error) {
      setErrorMessage('Credenziali non valide'); // Gestione errori
    }
  };

  return (
    <div className="App">
      <h1>Benvenuto nel sistema di gestione</h1>

      {!isLoggedIn ? (
        <div>
          <h2>Login</h2>
          {/* Form di login */}
          <input
            type="text"
            placeholder="ID Utente"
            value={idUser}
            onChange={(e) => setIdUser(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Accedi</button>
          
          {/* Messaggio di errore */}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
      ) : (
        <div>
          <h2>Elenco Utenti</h2>
          <UserTable />
        </div>
      )}
    </div>
  );
}

export default App;