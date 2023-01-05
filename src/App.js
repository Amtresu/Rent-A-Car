import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cars from './components/Cars'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Cars />} />
      </Routes>
    
    </div>
  );
}

export default App;
