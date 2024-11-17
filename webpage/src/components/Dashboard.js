import React from 'react';

function Dashboard({ user, onLogout }) {
  return (
    <div className="dashboard">
      <h2>Benvenuto, {user.email}</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;