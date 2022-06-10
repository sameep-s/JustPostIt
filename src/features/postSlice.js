import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const encodedToken = localStorage.getItem('tokenSocial');


export const getAllPosts = createAsyncThunk('/post', async () => {
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


export const editPost = createAsyncThunk('/post/edit', async ({ content, username, displayImage, userFirstName, userLastName, postId }) => {
    console.log(userFirstName);
    console.log(postId);

    const postData = {
        "content": content,
        "username": username,
        "displayImage": displayImage,
        "userFirstName": userFirstName,
        "userLastName": userLastName
    }

    try {
        const { data } = await axios.post(`/api/posts/edit/${postId}`,
            {
                postData
            }, {
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


export const likePost = createAsyncThunk('/post/like', async (postId) => {
    try {
        const { data } = await axios.post(`/api/posts/like/${postId}`,
            {}, {
            headers: {
                authorization: encodedToken
            }
        });

        console.log(data);
        return data;

    } catch (e) {
        console.error(e);
    }
});

export const dislikePost = createAsyncThunk('/post/dislike', async (postId) => {
    try {
        const { data } = await axios.post(`/api/posts/dislike/${postId}`,
            {}, {
            headers: {
                authorization: encodedToken
            }
        });

        console.log(data);
        return data;
    }
    catch (e) {
        console.error(e);
    }
})


const initialState = {
    posts: []
}

const postSlice = createSlice({
    name: 'post',
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
        },

        [likePost.fulfilled]: (state, action) => {
            state = action.payload;
            console.log(state);

            return state;
        },

        [dislikePost.fulfilled]: (state, action) => {
            state = action.payload;
            console.log(state);

            return state;
        }
    }

})


export default postSlice.reducer;