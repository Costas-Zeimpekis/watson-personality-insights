import './App.css';

import React from 'react';

import Container from '@material-ui/core/Container';

import ClientForm from './components/ClientForm';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <img src={logo} className="App-logo" alt="logo" />
          Wellaby's Personality Insight
          <ClientForm />
        </Container>
      </header>
    </div>
  );
}

export default App;
