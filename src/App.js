import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import useStorage from './hooks/useStorage';
import { app } from "./firebase/config"
import ClientModal from './comps/ClientModal';
import ClientsGrid from './comps/ClientsGrid';
import "./app.css";

function App() {
  const [selectedImg, setSelectedImg] = useState(null)
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
        {/* <Title/> */}
        {/* <UploadForm /> */}
        {/* <ImageGrid setSelectedImg={setSelectedImg} /> */}
        <ClientsGrid />
        {openClientModal && <ClientModal setOpenClientModal={setOpenClientModal} />}
        {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
