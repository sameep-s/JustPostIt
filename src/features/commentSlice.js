import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const encodedToken = localStorage.getItem('tokenSocial');



export const getAllComments = createAsyncThunk('/comments', async () => {
    try {
        const { data } = await axios.get(`/api/comments/${postID}`);

        return data;
    } catch (e) {
        console.error(e);
    }
});

export const addComment = createAsyncThunk('/comment/add', async (postId, commentData) => {
    try {

        const { data } = await axios.post(`/api/comments/add/${postId}`,
            {
                commentData
            },
            {
                headers: {
                    authorization: encodedToken
                }
            })

        return data;

    } catch (e) {
        console.error(e);
    }
})


export const editComment = createAsyncThunk('/comment/edit', async (postId, commentId, commentData) => {
    try {

        const { data } = await axios.post(`/api/comments/edit/${postId}/${commentId}`,
            {
                commentData
            },
            {
                headers: {
                    authorization: encodedToken
                }
            })

        return data;

    } catch (e) {
        console.error(e);
    }
})

export const deleteComment = createAsyncThunk('/comment/delete', async (postId, commentId) => {
    try {
        const { data } = await axios.post(`/api/comments/delete/${postId}/${commentId}`,
            {
                headers: {
                    authorization: encodedToken
                }
            })

        return data;

    } catch (e) {
        console.error(e);
    }
});


export const upvoteComment = createAsyncThunk('/comment/upvote', async (postId, commentId) => {
    try {

        const { data } = await axios.post(`/api/comments/upvote/${postId}/${commentId}`,
            {
                headers: {
                    authorization: encodedToken
                }
            })

        return data;

    } catch (e) {
        console.error(e);
    }
});


export const downvoteComment = createAsyncThunk('/comment/downvote', async (postId, commentId) => {
    try {
        const { data } = await axios.post(`/api/comments/downvote/${postId}/${commentId}`,
            {
                headers: {
                    authorization: encodedToken
                }
            })

        return data;

    } catch (e) {
        console.error(e);
    }
});



const initialState = {
    comments: []
}

export const commentSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllComments.fulfilled]: (state, action) => {
            state.comments = action.payload;
        },

        [addComment.fulfilled]: (state, action) => {
            state.comments = action.payload;
        },

        [editComment.fulfilled]: (state, action) => {
            state.comments = action.payload;
        },

        [deleteComment.fulfilled]: (state, action) => {
            state.comments = action.payload;
        }
    }

})


export default commentSlice.reducer;