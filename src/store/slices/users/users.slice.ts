import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {REACT_APP_API_URL} from "../../../components/helpers/api";
import {UsersInterface} from "../../interfaces/users.interface";

const initialState: UsersInterface = {
    users: [],
    loading: false,
    error: null,
}

export const getUsers = createAsyncThunk('getUsers', async () => {
    return await axios.get(`${REACT_APP_API_URL}users/`)
})


export const usersSlice = createSlice<UsersInterface>({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.loading = true
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.loading = false
                state.status = action.payload
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.loading = false
                state.error = action.error
            })
    },
})


export default usersSlice.reducer
export const usersActions = usersSlice.actions