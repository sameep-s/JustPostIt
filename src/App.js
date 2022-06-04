import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages';

function App() {
  return (
    <>
      <HomePage />
      <Routes>
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
