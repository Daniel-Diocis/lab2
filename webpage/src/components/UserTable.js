import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Errore nel recupero dei dati:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID Utente</th>
          <th>Livello</th>
          <th>Nome</th>
          <th>Indirizzo</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id_user}>
            <td>{user.id_user}</td>
            <td>{user.level}</td>
            <td>{user.name}</td>
            <td>{user.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;