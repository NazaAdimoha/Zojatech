import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLeft from './components/AuthLeft';
import CheckMail from './pages/auth/checkMail/CheckMail';
import EmailVerified from './pages/auth/EmailVerified';
import Signup from './pages/auth/Signup';


function App() {
  return (
    <Routes>
      <Route path="/authleft" element={<AuthLeft />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/checkmail" element={<CheckMail />} />
      <Route path="/verifiedEmail" element={<EmailVerified />} />
    </Routes>
  );
}

export default App;
