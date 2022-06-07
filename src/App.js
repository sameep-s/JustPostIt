import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  BookmarksPage,
  ExplorePage,
  HomePage,
  LandingPage,
  NotificationPage
} from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/notificationPage' element={<NotificationPage />} />
        <Route path='/bookmarksPage' element={<BookmarksPage />} />
      </Routes>
    </>
  );
}

export default App;
