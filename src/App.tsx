import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLeft from './components/AuthLeft';
import Signup from './pages/auth/Signup';


function App() {
  return (
    <Routes>
      <Route path="/authleft" element={<AuthLeft />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
