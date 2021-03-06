import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk('auth/login', async ({ username, password }) => {
    try {
        const { data } = await axios.post(`api/auth/login`, {
            username: username,
            password: password
        });

        return data;

    } catch (e) {
        console.error(e);
    }
});

export const signupUser = createAsyncThunk('auth/signup', async ({ email, username, password, confirmPassword, firstName, lastName, age }) => {
    try {
        const { data } = await axios.post('/api/auth/signup', {
            email: email,
            username: username,
            password: password,
            confirmPassword: confirmPassword,
            firstName: firstName,
            lastName: lastName,
            age: age
        });

        return data;

    } catch (e) {
        console.error(e);
    }
})


const initialState = {
    encodedToken: localStorage.getItem('tokenSocial'),
    user: localStorage.getItem("userSocial"),
    isLoggedIn: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('tokenSocial');
            localStorage.removeItem('userSocial');
            state = {
                encodedToken: null,
                user: null,
                isLoggedIn: false,
            };

            return state;
        }
    },
    extraReducers: {
        [loginUser.fulfilled]: (state, action) => {
            localStorage.setItem('tokenSocial', action.payload.encodedToken);
            localStorage.setItem('userSocial', JSON.stringify(action.payload.foundUser));
            state.encodedToken = localStorage.getItem('tokenSocial')
            state.user = localStorage.getItem("userSocial");
            state.isLoggedIn = true;
        },

        [signupUser.fulfilled]: (state, action) => {

            localStorage.setItem('tokenSocial', action.payload.encodedToken);
            localStorage.setItem('userSocial', JSON.stringify(action.payload.createdUser));
            state.encodedToken = localStorage.getItem('tokenSocial')
            state.user = localStorage.getItem("userSocial");
            state.isLoggedIn = true;
        }
    }
})



export const { logout } = authSlice.actions;
export default authSlice.reducer;
