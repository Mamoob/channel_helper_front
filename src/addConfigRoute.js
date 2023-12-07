import React, { useState } from 'react';
import './AddConfigModal.css';

const AddConfigRoute = ({ handleAddButtonClick, handleCloseModal, showModal }) => {
  const [code, setCode] = useState('');
  const [title, setTitle] = useState('');
  const [is_public, setIsPublic] = useState(false);
  const [type, setType] = useState('');
  const [remoteName, setRemoteName] = useState('');
  const [remoteEntry, setRemoteEntry] = useState('');
  const [exposedModule, setExposedModule] = useState('');
  const [icon, setIcon] = useState('');
  const [path, setPath] = useState('');
  const [internal, setInternal] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const handleAddClick = () => {
    const jsonData = {
      code,
      title,
      is_public,
      options: {
        type,
        remoteName,
        remoteEntry,
        exposedModule
      },
      icon,
      path,
      internal,
      enabled
    };
    handleAddButtonClick(jsonData);
  };

  return (
    <div className={showModal ? "modal-overlay" : "modal-hidden"}>
      <div className="modal">
        <h2>Add New Config</h2>
        <div className="modal-content">
          <div className="column">
            <label>Code:</label>
            <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Icon:</label>
            <input type="text" value={icon} onChange={(e) => setIcon(e.target.value)} />
            <label>Path:</label>
            <input type="text" value={path} onChange={(e) => setPath(e.target.value)} />
            <label>Is Public:</label>
            <input type="checkbox" checked={is_public} onChange={(e) => setIsPublic(e.target.checked)} />
          </div>
          <div className="column">
            <label>Type:</label>
            <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
            <label>Remote Name:</label>
            <input type="text" value={remoteName} onChange={(e) => setRemoteName(e.target.value)} />
            <label>Remote Entry:</label>
            <input type="text" value={remoteEntry} onChange={(e) => setRemoteEntry(e.target.value)} />
            <label>Exposed Module:</label>
            <input type="text" value={exposedModule} onChange={(e) => setExposedModule(e.target.value)} />

            <label>Internal:</label>
            <input type="checkbox" checked={internal} onChange={(e) => setInternal(e.target.checked)} />
            <label>Enabled:</label>
            <input type="checkbox" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
          </div>
        </div>
        <button onClick={handleAddClick}>Add</button>
        <button className="close-button" onClick={handleCloseModal}>Close</button>
      </div>
    </div>
  );
};

export default AddConfigRoute;