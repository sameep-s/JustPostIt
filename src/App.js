import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './components';
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

        <Route path='/home' element={<RequireAuth> <HomePage /></RequireAuth>} />
        <Route path='/explore' element={<RequireAuth> <ExplorePage /></RequireAuth>} />
        <Route path='/notificationPage' element={<RequireAuth> <NotificationPage /></RequireAuth>} />
        <Route path='/bookmarksPage' element={<RequireAuth> <BookmarksPage /></RequireAuth>} />
        <Route path='/profile' element={<RequireAuth> <ProfilePage /></RequireAuth>} />
        <Route path='/post' element={<RequireAuth> <Post /></RequireAuth>} />
      </Routes>
    </>
  );
}

export default App;
