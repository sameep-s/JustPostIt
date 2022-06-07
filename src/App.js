import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  ExplorePage,
  HomePage,
  LandingPage
} from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/explore' element={<ExplorePage />} />
      </Routes>
    </>
  );
}

export default App;
