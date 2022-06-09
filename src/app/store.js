import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import bookmarkReducer from '../features/bookmarkSlice';
import postReducer from '../features/postSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        bookmark: bookmarkReducer,
        post: postReducer
    }
});