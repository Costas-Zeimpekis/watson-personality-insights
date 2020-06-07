import './App.css';

import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import ClientForm from './components/ClientForm';
import logo from './logo.svg';

function App() {
  return (
    <Container maxWidth="md">
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <img
          alt="logo"
          className="App-logo"
          src={logo}
          style={{ margin: "auto" }}
        />
      </Box>
      <Box mb={5}>
        <Typography align="center" component="h1" style={{ fontSize: 30 }}>
          {" "}
          Wellaby's Personality Insight
        </Typography>
      </Box>

      <ClientForm />
    </Container>
  );
}

export default App;
