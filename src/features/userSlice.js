import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const encodedToken = localStorage.getItem('tokenSocial');

export const getAllUsers = createAsyncThunk('/users', async () => {
    try {
        const { data } = await axios.get('/api/users');

        return data;

    }
    catch (e) {
        console.error(e);
    }
});


export const getUserPosts = createAsyncThunk('/user/posts', async ({ username }) => {
    try {
        const { data } = await axios.get(`/api/posts/user/${username}`);

        return data;

    }
    catch (e) {
        console.error(e);
    }
});


export const followUser = createAsyncThunk('/user/follow', async ({ followUserId }) => {
    try {
        const { data } = await axios.post(`/api/users/follow/${followUserId}`,
            {}, {
            headers: {
                authorization: encodedToken
            }
        })
        return data;
    } catch (e) {
        console.error(e);
    }
})

export const unFollowUser = createAsyncThunk('/user/unfollow', async ({ followUserId }) => {
    try {
        const { data } = await axios.post(`/api/users/unfollow/${followUserId}`,
            {}, {
            headers: {
                authorization: encodedToken
            }
        })
        return data;
    } catch (e) {
        console.error(e);
    }
})

// ---------------------------------------------------------------
const initialState = {
    users: [],
    user: [],
    following: [],
    followers: [],
    posts: []
}



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
        },

        [followUser.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.following = action?.payload?.user?.following;
            state.followers = action?.payload?.user?.followers;
        },

        [unFollowUser.fulfilled]: (state, action) => {
            state.user = action.payload?.user;
            state.following = action?.payload?.user?.following;
            state.followers = action?.payload?.user?.followers;
        },

        [getUserPosts.fulfilled]: (state, action) => {
            state.posts = action.payload.posts;
        }
    }
})

export default userSlice.reducer;