import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <TextField color='warning' id="outlined-basic" label="CheckBox Color" variant="outlined" sx={{'& .MuiInputBase-input': {
          color: 'white', 
        },}}
  />        </p>
      </header>
    </div>
  );
}

export default App;
