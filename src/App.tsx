import React from 'react';
import logo from './logo.svg';
import './App.css';
import Terminal from './components/terminal';
import StateView from 'components/stateView';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Terminal />
        <StateView />
      </header>
    </div>
  );
}

export default App;
