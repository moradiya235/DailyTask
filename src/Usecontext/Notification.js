import React, { useState, useContext } from 'react';


const NotificationContext = React.createContext();

const useNotification = () => useContext(NotificationContext);

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    const id = Date.now();
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { id, message },
    ]);

    setTimeout(() => removeNotification(id), 3000);
  };

  const removeNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      <div className="notification-container">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification">
            {notification.message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

const App = () => {
  const { addNotification } = useNotification();

  const handleAddNotification = () => {
    addNotification('This is a notification!....');
  };

  return (
    <div className="app">
      <h1>Global Notification System</h1>
      <button className="button" onClick={handleAddNotification}>
        Trigger Notification
      </button>
    </div>
  );
};

export default function WrappedApp() {
  return (
    <NotificationProvider>
      <App />
    </NotificationProvider>
  );
}
