
import React, { useState } from 'react';
import './AddConfigModal.css';

const AddConfigGW = ({ handleAddButtonClick, handleCloseModal, showModal }) => {
  const [code, setCode] = useState('');
  const [type, setType] = useState('');
  const [url, setUrl] = useState('');
  const [filter, setFilter] = useState('');
  const [predicate, setPredicate] = useState('');

  const handleAddClick = () => {
    const jsonData = {
      code,
      type,
      route: {
        url,
        filters: [filter],
        predicates: [predicate]
      }
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
            <label>Type:</label>
            <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
          </div>
          <div className="column">
            <label>URL:</label>
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
            <label>Filter:</label>
            <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
            <label>Predicate:</label>
            <input type="text" value={predicate} onChange={(e) => setPredicate(e.target.value)} />
          </div>
        </div>
        <button onClick={handleAddClick}>Add</button>
        <button className="close-button" onClick={handleCloseModal}>Close</button>
      </div>
    </div>
  );
};

export default AddConfigGW;