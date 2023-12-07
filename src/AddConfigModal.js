import React, { useState } from 'react';
import './AddConfigModal.css'

const AddConfigModal =  ({ activeTab, handleAddButtonClick, handleCloseModal, showModal })  => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [groupTitle, setGroupTitle] = useState('');
  const [icon, setIcon] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [code, setCode] = useState('');

  const handleAddClick = () => {
    const jsonData = {
      url,
      title,
      description,
      group_title: groupTitle,
      icon,
      favorite,
      enabled,
      code
    };
    handleAddButtonClick(jsonData);
  };


  return (
    <div className={showModal ? "modal-overlay" : "modal-hidden"}>
    <div className="modal">
              
      <h2>Add New Config</h2>
      <div className="modal-content">
      <div className="column">
          <label>URL:</label>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          <label>GroupTitle:</label>
          <input type="text" value={groupTitle} onChange={(e) => setGroupTitle(e.target.value)} />    
      </div>
      <div className="column">
          <label>icon:</label>
          <input type="text" value={icon} onChange={(e) => setIcon(e.target.value)} />
          <label>favorite:</label>
          <input type="checkbox" checked={favorite} onChange={(e) => setFavorite(e.target.checked)} />
          <label>enabled:</label>
          <input type="checkbox" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
          <label>Code:</label>
          <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />  
      </div>
      </div>
      <button onClick={handleAddClick}>Add</button>
      <button className="close-button" onClick={handleCloseModal}>Close</button>
    </div>
    </div>
  );
};

export default AddConfigModal;