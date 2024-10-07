import React, { useState, useReducer, createContext, useContext, useEffect } from 'react';


const ChatContext = createContext();

const initialState = {
  messages: [],
};

const chatReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case 'RECEIVE_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};


const useChat = () => useContext(ChatContext);


const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  const [currentUser, setCurrentUser] = useState('User1'); 

  const addMessage = (message) => dispatch({ type: 'ADD_MESSAGE', payload: message });

  
  const receiveMessage = (message) => dispatch({ type: 'RECEIVE_MESSAGE', payload: message });

  return (
    <ChatContext.Provider value={{ ...state, currentUser, setCurrentUser, addMessage, receiveMessage }}>
      {children}
    </ChatContext.Provider>
  );
};


const ChatApp = () => {
  const { messages, addMessage, receiveMessage, currentUser, setCurrentUser } = useChat();
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: Date.now(),
        text: inputValue,
        sender: currentUser,
        timestamp: new Date().toLocaleTimeString(),
      };
      addMessage(newMessage);
      setInputValue(''); 
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const simulatedMessage = {
        id: Date.now(),
        text: 'Hello React Js',
        sender: 'User2',
        timestamp: new Date().toLocaleTimeString(),
      };
      receiveMessage(simulatedMessage);
    }, 5000);

    return () => clearInterval(interval);
  }, [receiveMessage]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Real-Time Chat Application</h1>
      <div style={{ marginBottom: '10px' }}>
        <strong>Logged in as: </strong>
        <select value={currentUser} onChange={(e) => setCurrentUser(e.target.value)}>
          <option value="User1">User1</option>
          <option value="User2">User2</option>
        </select>
      </div>

      <div
        className="chat-box"
        style={{ border: '1px solid #ccc', padding: '10px', height: '300px', overflowY: 'scroll' }}
      >
        {messages.length > 0 ? (
          messages.map((message) => (
            <div key={message.id} style={{ marginBottom: '10px' }}>
              <strong>{message.sender}</strong>: {message.text}{' '}
              <span style={{ fontSize: '0.8rem' }}>({message.timestamp})</span>
            </div>
          ))
        ) : (
          <p>No messages yet.</p>
        )}
      </div>

      <div style={{ marginTop: '10px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
          style={{ padding: '5px', width: '200px' }}
        />
        <button onClick={handleSendMessage} style={{ marginLeft: '10px', padding: '5px 10px' }}>
          Send
        </button>
      </div>
    </div>
  );
};

const App = () => (
  <ChatProvider>
    <ChatApp />
  </ChatProvider>
);

export default App;
