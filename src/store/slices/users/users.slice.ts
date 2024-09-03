import {createAsyncThunk, createSlice, SerializedError, SliceSelectors} from "@reduxjs/toolkit";
import {REACT_APP_API_URL} from "../../../components/helpers/api";
import {UserInterface, UsersInterface} from "../../interfaces/users.interface";
import {axiosInstance} from "../../instance/axios.instance";

const initialState: UsersInterface = {
    users: [],
    loading: false,
    error: '',
}

export const getUsers = createAsyncThunk<Array<UserInterface>, void, { rejectValue: SerializedError }>('getUsers', async () => {
    return await axiosInstance.get(`${REACT_APP_API_URL}users`)
})


export const usersSlice = createSlice<UsersInterface, {}, 'users', SliceSelectors<UsersInterface>, string>({
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
                state.users = action.payload
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.loading = false
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error;
                }

            })
    },
})


export default usersSlice.reducer
