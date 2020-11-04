import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import useStorage from './hooks/useStorage';
import { app } from "./firebase/config"
import ClientModal from './comps/ClientModal';
import ClientsGrid from './comps/ClientsGrid';

function App() {
  const [selectedImg, setSelectedImg] = useState(null)
  const [openClientModal, setOpenClientModal] = useState(false)

  return (
    <div className="App">
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      <button onClick={() => setOpenClientModal(true)}>Add client</button>
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      <ClientsGrid />
      {openClientModal && <ClientModal setOpenClientModal={setOpenClientModal} />}
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
