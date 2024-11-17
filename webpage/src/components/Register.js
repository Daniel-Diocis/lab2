import React, { useState } from 'react';

function Register({ onRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui gestiresti la logica per la registrazione, come una chiamata API
    if (email && password) {
      onRegister({ email });
    } else {
      alert('Per favore, inserisci email e password.');
    }
  };

  return (
    <div className="register-container">
      <h2>Registrati</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrati</button>
      </form>
    </div>
  );
}

export default Register;