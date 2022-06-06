import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, LandingPage } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
