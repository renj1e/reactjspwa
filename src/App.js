import React from 'react';
import logo from './logo.svg';
import './App.css';

Notification.requestPermission(result => {
  if (result === 'granted') {

    if ('Notification' in window) {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification('Vibration Sample', {
          body: 'Buzz! Buzz!',
          tag: 'vibration-sample'
        })
      })
    }

  }
})
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
