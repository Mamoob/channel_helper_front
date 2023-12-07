import './App.css';
import React, { useState, useEffect,fetchJsonData } from 'react';
import { FaTrash, FaSync  } from 'react-icons/fa';
import AddConfigModal from './AddConfigModal'; 
import AddConfigGW from './AddConfigGW';
import AddConfigRoute from './addConfigRoute';
//import TabsComponent from './components/ConfigBottons'


const App = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('appconfigs');
  const [jsonData, setJsonData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ParentComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  }

  const handleRefreshClick = async () => {
    try {
      const response = await fetch('/api/renew', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
        // Add body data if needed: body: JSON.stringify({ /* your data here */ })
      });

      if (response.ok) {
        // Handle successful POST request
        window.location.reload(); // Reload the current page
      } else {
        // Handle error response
        const data = await response.json();
        console.error('Error during refresh:', data.error);
      }
    } catch (error) {
      console.error('Error sending refresh request:', error);
    }
  };
  
  const fetchDataAndJson = (tab) => {
    fetch(`/api/${tab}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        let jsonData;
        if (tab === 'appconfigs' && data.status === 'OK' && Array.isArray(data.app_configs)) {
          jsonData = data.app_configs;
        } else if (tab === 'gwrouteconfigs' && data.status === 'OK' && Array.isArray(data.gateway_route_configs)) {
          jsonData = data.gateway_route_configs;
        } else if (tab === 'routeconfigs' && data.status === 'OK' && Array.isArray(data.route_configs)) {
          jsonData = data.route_configs;
        } else {
          console.error('Invalid data structure for', tab, ':', data);
          return;
        }
        setJsonData(jsonData);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleAddButtonClick = async (jsonData) => {
    let url;
    if (activeTab.endsWith('s')) {
      url = `/api/${activeTab.slice(0, -1)}`; // Удаление последней буквы "s" из activeTab
    } else {
      url = `/api/${activeTab}`;
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
      });
  
      if (response.ok) {
        // Успешно выполнен запрос POST
        // Обновите данные или выполните другие необходимые действия
        window.location.reload(); // Перезагрузить текущую страницу
      } else {
        // Получен ответ с ошибкой
        const data = await response.json(); // прочитайте JSON из тела ответа
        // Обработайте ошибку, например, показав сообщение пользователю
        console.error('Ошибка при добавлении данных:', data.error);
      }
    } catch (error) {
      // Обработка сетевых ошибок или других ошибок
      console.error('Ошибка при отправке запроса:', error);
    }
    setIsModalOpen(false); // Закрывает модальное окно после отправки данных
  };

  const handleDelete = async (code,type) => {
    let url;
    if (activeTab.endsWith('s')) {
      url = `/api/${activeTab.slice(0, -1)}`; // Удаление последней буквы "s" из activeTab
    } else {
      url = `/api/${activeTab}`;
    }
    try {
      let response;
      if (activeTab === 'gwrouteconfigs' && type) {
        response = await fetch(`${url}/${code}/${type}`, {
          method: 'DELETE'
        });
      } else {
        response = await fetch(`${url}/${code}`, {
          method: 'DELETE'
        });

      }
      if (response.ok) {
        window.location.reload(); // Перезагрузить текущую страницу
      } else {
        // Получен ответ с ошибкой
        const data = await response.json(); // прочитайте JSON из тела ответа
        console.error('Ошибка при удалении:', data.error);
      }
    } catch (error) {
      // Обработка сетевых ошибок или других ошибок
      console.error('Ошибка при отправке запроса:', error);
    }
  };
  

  useEffect(() => {
    fetchDataAndJson(activeTab);
  }, [activeTab]);
  return (
    <div>
      <div className="tabs">
        <button className="tab-item" onClick={() => handleTabClick('appconfigs')}>App Configs</button>
        <button className="tab-item" onClick={() => handleTabClick('gwrouteconfigs')}>GW Config</button>
        <button className="tab-item" onClick={() => handleTabClick('routeconfigs')}>Route Config</button>
      </div>
      <div className="refresh-icon" onClick={handleRefreshClick}>
        <FaSync /> 
      </div>
      {isModalOpen && (
  <div className="modal-overlay">
    <div>
      {activeTab === 'appconfigs' ? (
        <AddConfigModal 
          handleAddButtonClick={handleAddButtonClick}
          handleCloseModal={() => setIsModalOpen(false)}
          showModal={isModalOpen}
        />
      ) : activeTab === 'gwrouteconfigs' ? (
        <AddConfigGW 
          handleAddButtonClick={handleAddButtonClick}
          handleCloseModal={() => setIsModalOpen(false)}
          showModal={isModalOpen}
        />
      ): activeTab === 'routeconfigs' ? (
        <AddConfigRoute 
          handleAddButtonClick={handleAddButtonClick}
          handleCloseModal={() => setIsModalOpen(false)}
          showModal={isModalOpen}
        />
      ) : null}
          </div>
        </div>
      )}
      
  
    {/* Conditional rendering based on activeTab */}
    {activeTab === 'gwrouteconfigs' ? (
  <div className="cards-container">
    {Array.isArray(jsonData) ? (
                            [ 
                              <div key="addNew" className="card add-card" onClick={() => setIsModalOpen(true)}>
                                <div className="card-details">
                                  <div className="plus-icon">+</div>
                                  <p>Add New</p>
                                </div>
                              </div>,
      jsonData.map((config, index) => (
        <div key={`${config.code}-${index}`} className="card">
          <div className="card-details">
            <h2 className="card-title">Code: {config.code}</h2>
            <p className="card-type">Type: {config.type}</p>
            <p className="key-display">Key: {config.code}</p>
            {config.route && (
              <React.Fragment>
                <p className="card-url">URL: {config.route.url}</p>
                <p className="card-filters">
                  Filters: {config.route.filters ? config.route.filters.join(', ') : 'N/A'}
                </p>
                <p className="card-predicates">
                  Predicates: {config.route.predicates.join(', ')}
                </p>
                <div className="delete-icon" onClick={() => handleDelete(config.code,config.type)}>
                    <FaTrash />
                  </div>
              </React.Fragment>
              
            )}
          </div>
        </div>
      ))
            ]
    ) : (
      <p>No data available</p>
    )}
  </div>
)  : activeTab === 'routeconfigs' ? (
  <div className="cards-container">
    
  {Array.isArray(jsonData) ? (
                          [ 
                            <div key="addNew" className="card add-card" onClick={() => setIsModalOpen(true)}>
                              <div className="card-details">
                                <div className="plus-icon">+</div>
                                <p>Add New</p>
                              </div>
                            </div>,
    jsonData.map((config, index) => (
      <div key={`${config.code}-${index}`} className="card">
        <div className="card-details">
          <h2 className="card-title">Code: {config.code}</h2>
          <p className="card-title">Title: {config.title || 'No title'}</p>
          <p className="card-type">Options: {config.options?.type || 'No type'}</p>
          <p className="card-type">Icon: {config.icon || 'No icon'}</p>
          <p className="card-description">Description: {config.description || 'No description'}</p>
          <p className="card-group">Is_public: {config.is_public ? 'True' : 'False'}</p>
          <p className="card-url">Path: {config.path}</p>
          <p className="card-enabled">Enabled: {config.enabled ? 'True' : 'False'}</p>
        </div>
        <div className="delete-icon" onClick={() => handleDelete(config.code)}>
                    <FaTrash />
        </div>
      </div>
    ))
                          ]
  ) : (
    <p>No data available</p>
  )}
</div>
) : activeTab === 'appconfigs' ? (
        <div className="cards-container">
          {/* Render cards for "appconfigs" */}
          {Array.isArray(jsonData) ? (
                      [ 
                      <div key="addNew" className="card add-card" onClick={() => setIsModalOpen(true)}>
                        <div className="card-details">
                          <div className="plus-icon">+</div>
                          <p>Add New</p>
                        </div>
                      </div>,
            jsonData.map((config, index) => (
              <div key={`${config.code}-${index}`} className="card">
                {config && (
                  <React.Fragment>
                    <div className="card-details">
                    <h2 className="card-code">Code: {config.code}</h2>
                      <p className="card-title">Title: {config.title}</p>
                      <p className="card-image">Icon: {config.icon}</p>
                      <p className="card-description">Description: {config.description}</p>
                      <p className="card-group">Group: {config.group_title}</p>
                      <p className="card-url">URL: {config.url}</p>
                      <p className="card-favorite">Favorite: {config.favorite ? 'True' : 'False'}</p>
                      <p className="card-enabled">Enabled: {config.enabled ? 'True' : 'False'}</p>
                      {/* Add more fields as needed */}
                    </div>
                    <div className="delete-icon" onClick={() => handleDelete(config.code)}>
                    <FaTrash />
                  </div>
                  </React.Fragment>
                )}
              </div>
            ))
                ]
          ) : (
            <p>No data available</p>
          )}
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );


      }
  export default App;
