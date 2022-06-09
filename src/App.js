import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  BookmarksPage,
  ExplorePage,
  HomePage,
  LandingPage,
  Login,
  NotificationPage,
  Post,
  ProfilePage,
  Signup
} from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='/home' element={<HomePage />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/notificationPage' element={<NotificationPage />} />
        <Route path='/bookmarksPage' element={<BookmarksPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/post' element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
