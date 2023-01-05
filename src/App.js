import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cars from './components/Cars'
import NavBar from './components/navbar/NavBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Cars />} />
      </Routes>
    
    </div>
  );
}

export default App;
