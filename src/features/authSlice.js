import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk('auth/login', async ({ email, password }) => {
    try {
        const { data } = await axios.post(`api/auth/login`, {
            email: email,
            password: password
        })

        console.log(`success`, data);

    } catch (e) {
        console.error(e);
    }
})

const initialState = {
    encodedToken: null,
    user: null,
    isLoggedIn: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('tokenSocial');
            state = initialState;

            return state;
        }
    }
})