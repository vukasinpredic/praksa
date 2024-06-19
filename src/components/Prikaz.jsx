import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Prikaz.css';

const Prikaz = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div id="prikaz">
      <h1 className="header">Prikaz</h1>
      <div className="grid-container">
        {users.map(user => (
          <div key={user.id} className="grid-item">
            <p className="box-text"><strong>Name:</strong> {user.name}</p>
            <p className="box-text"><strong>Username:</strong> {user.username}</p>
            <p className="box-text"><strong>Email:</strong> {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prikaz;
