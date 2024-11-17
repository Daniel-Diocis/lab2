import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PeopleList() {
  const [people, setPeople] = useState([]);

  // Carica i dati delle persone quando il componente è montato
  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/people');
        setPeople(response.data); // Imposta i dati delle persone nello stato
      } catch (error) {
        console.error('Errore nel recupero dei dati:', error);
      }
    };
    fetchPeople();
  }, []); // Esegui solo una volta quando il componente è montato

  return (
    <div>
      <h2>Elenco delle Persone</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Prezzo</th>
            <th>Indirizzo</th>
          </tr>
        </thead>
        <tbody>
          {people.map(person => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.price}</td>
              <td>{person.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeopleList;