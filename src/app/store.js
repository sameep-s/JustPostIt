import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import bookmarkReducer from '../features/bookmarkSlice';
import postReducer from '../features/postSlice';
import commentReducer from '../features/commentSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        bookmarks: bookmarkReducer,
        post: postReducer,
        comments: commentReducer,
        user: userReducer
    }
});