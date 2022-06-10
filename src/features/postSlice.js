import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const encodedToken = localStorage.getItem('tokenSocial');


export const getAllPosts = createAsyncThunk('/posts', async () => {
    try {
        const { data } = await axios.get('/api/posts');

        return data;
    }
    catch (e) {
        console.error(e);
    }
});

export const getUserPost = createAsyncThunk('/post/user', async (userName) => {
    try {
        const { data } = await axios.get(`/api/posts/user/${userName}`);

        return data;
    }
    catch (e) {
        console.error(e);
    }
})


export const createPost = createAsyncThunk('/post/create', async (post) => {
    try {
        console.log(post);
        const { data } = await axios.post('/api/posts',
            {
                ...post
            },
            {
                headers: {
                    authorization: encodedToken
                }
            });

        return data;

    } catch (e) {
        console.error(e)
    }
})


export const deletePost = createAsyncThunk('/post/delete', async (postId) => {
    try {
        const { data } = await axios.delete(`/api/posts/${postId}`, {
            headers: {
                authorization: encodedToken
            }
        });

        return data;

    } catch (e) {
        console.error(e)
    }
})


export const editPost = createAsyncThunk('/post/edit', async (postId) => {
    try {
        const { data } = await axios.delete(`/api/posts/edit/${postId}`, {
            headers: {
                authorization: encodedToken
            }
        });

        console.log(`edit`, data);
        return data;

    } catch (e) {
        console.error(e)
    }
})


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
        },

        [createPost.fulfilled]: (state, action) => {
            state = action.payload;

            return state;
        },

        [deletePost.fulfilled]: (state, action) => {
            state = action.payload;

            return state;
        },

        [editPost.fulfilled]: (state, action) => {
            state = action.payload;

            return state;
        }
    }

})


export default postSlice.reducer;