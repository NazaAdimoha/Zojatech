import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLeft from './components/AuthLeft';


function App() {
  return (
    <Routes>
      <Route path="/authleft" element={<AuthLeft />} />
    </Routes>
  );
}

export default App;
