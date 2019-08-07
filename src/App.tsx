import React from 'react';
import { Router } from 'components/router';
import logo from 'logo.svg';
import 'App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Router />    
      </main>
    </div>
  );
}

export default App;
