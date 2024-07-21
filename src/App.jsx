import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Exhibit from './components/Exhibit';
import Hero from './components/Hero';

function App() {

  return (
    <div className="App">
      <div className="app_body">
        <Routes>
          <Route path="/" element={<Exhibit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;