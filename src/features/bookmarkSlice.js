import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getBookmarks = createAsyncThunk('/bookmark', async ({ encodedToken }) => {
    try {
        const { data: { bookmarks } } = await axios.get('/api/users/bookmark/', {
            headers: {
                authorization: encodedToken
            }
        });

        console.log(`data`, bookmarks);
        return bookmarks;
    }
    catch (e) {
        console.error(e);
    }
})

export const addBookmark = createAsyncThunk('/bookmark/add', async ({ encodedToken, postId }) => {
    try {
        const { data: { bookmarks } } = await axios.post(`/api/users/bookmark/${postId}`, {
            headers: {
                authorization: encodedToken,
            }
        })
        console.log(`data`, bookmarks);
        return bookmarks;
    }
    catch (e) {
        console.error(e);
    }
})


export const removeBookmark = createAsyncThunk('/bookmark/remove', async ({ encodedToken, postId }) => {
    try {
        const { data: { bookmarks } } = await axios.post(`/api/users/remove-bookmark/${postId}`, {
            headers: {
                authorization: encodedToken,
            }
        })
        console.log(`data`, bookmarks);
        return bookmarks;
    }
    catch (e) {
        console.error(e);
    }
})

const initialState = {
    bookmarks: []
}

const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers: {},

    extraReducers: {

        [getBookmarks.fulfilled]: (state, action) => {
            state.bookmarks = action.payload;
        },

        [addBookmark.fulfilled]: (state, action) => {
            state.bookmarks = action.payload;
        },

        [removeBookmark.fulfilled]: (state, action) => {
            state.bookmarks = action.payload;
        }
    }

})


export default bookmarkSlice.reducer;