import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import bookmarkReducer from '../features/bookmarkSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        bookmark: bookmarkReducer
    }
})