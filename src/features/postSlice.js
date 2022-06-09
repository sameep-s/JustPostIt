import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getAllPosts = createAsyncThunk('/posts', async () => {
    try {
        const { data } = await axios.get('/api/posts');

        console.log(`data`, data);
        return data;
    }
    catch (e) {
        console.error(e);
    }
});

export const gp = createAsyncThunk


const initialState = {
    posts: []
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllPosts.fulfilled]: (state, action) => {
            state = action.payload;

            return state;
        }
    }

})


export default postSlice.reducer;