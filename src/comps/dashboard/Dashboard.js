import React, { useState } from 'react';
import { app } from "../../firebase/config"
import ClientModal from '../modals/ClientModal';
import ClientsGrid from '../grids/ClientsGrid';
import { ReactComponent as Eye } from '../../assets/eye.svg'
import { ReactComponent as Eye6 } from '../../assets/eye5.svg'
import { ReactComponent as Eye8 } from '../../assets/eye45.svg'
import "./Dashboard.css";
import useFirestore from '../../hooks/useFirestore';

function Dashboard() {
  const [openClientModal, setOpenClientModal] = useState(false)
  const [filterName, setFilterName] = useState('')
  const { docs } = useFirestore('clients')
  const clients = docs.filter(client =>
    client.lastName.toLowerCase().includes(filterName) 
    || client.firstName.toLowerCase().includes(filterName)
    || (client.firstName.toLowerCase() + " " + client.lastName.toLowerCase()).includes(filterName))
  const countClients = clients.length
  

  return (
    <div className="App">
      <div className="app-nav">
        <p style={{ display: 'flex', alignItems: 'center'}}>
          <span style={{ width: '40px', marginRight: '10px'}}>
            {/* <Eye6 /> */}
            <Eye />
            {/* <Eye8 /> */}
          </span>
          <span>
            Your Eye
          </span>
        </p>
        <button className="log-out-button" onClick={() => app.auth().signOut()}>Sign out</button>
      </div>
      <div className="app-header">
        <button className="add-filter-button">Tu filter</button>
        <button className="add-client-button" onClick={() => setOpenClientModal(true)}>New</button>
      </div>
      <div className="app-filter">
        <input type="text" onChange={e => setFilterName(e.target.value.toLowerCase())} placeholder="Wyszukaj badanie i pacjenta"></input>
      </div>
        <div style={{ marginLeft: '300px', marginBottom: '10px'}}>
          Found clients: {countClients}
        </div>
        <ClientsGrid clients={clients} />
        {openClientModal && <ClientModal setOpenClientModal={setOpenClientModal} />}
    </div>
  );
}

export default Dashboard;
