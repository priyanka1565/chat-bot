import React from 'react';
import ContactList from './components/ContactList'; // Make sure these components exist
import ChatWindow from './components/ChatWindow'; // Make sure these components exist
import './App.css'; // Import CSS file if you have styles

const App = () => {
  return (
    <div className="app-container">
      <ContactList />
      <ChatWindow />
    </div>
  );
};

export default App;
