import React, { useState } from 'react';
import { app } from "../../firebase/config"
import ClientModal from '../modals/ClientModal';
import ClientsGrid from '../grids/ClientsGrid';
import "./Dashboard.css";

function Dashboard() {
  const [openClientModal, setOpenClientModal] = useState(false)

  return (
    <div className="App">
      <div className="app-nav">
        <p>
          Your Eye
        </p>
        <button className="log-out-button" onClick={() => app.auth().signOut()}>Sign out</button>
      </div>
      <div className="app-header">
        <button className="add-filter-button">Tu filter</button>
        <button className="add-client-button" onClick={() => setOpenClientModal(true)}>New</button>
      </div>
      <div className="app-filter">
        <input type="text" placeholder="Wyszukaj badanie i pacjenta"></input>
      </div>
        <ClientsGrid />
        {openClientModal && <ClientModal setOpenClientModal={setOpenClientModal} />}
    </div>
  );
}

export default Dashboard;
