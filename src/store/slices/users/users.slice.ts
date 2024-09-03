import {createAsyncThunk, createSlice, PayloadAction, SerializedError, SliceSelectors} from "@reduxjs/toolkit";
import {REACT_APP_API_URL} from "../../../components/helpers/api";
import {UserInterface, UsersInterface,GetUsersResponse} from "../../interfaces/users.interface";
import {axiosInstance} from "../../instance/axios.instance";
import axios from "axios";

const initialState: UsersInterface = {
    users: [],
    loading: false,
    error: null,
}
export const getUsers = createAsyncThunk<Array<UserInterface>, void, { rejectValue: SerializedError }>('getUsers',
    async (_, { rejectWithValue }: any) => {
        try {
            const response = await axiosInstance.get<GetUsersResponse>(`${REACT_APP_API_URL}users`);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const serializedError: SerializedError = {
                    name: error.name,
                    message: error.message,
                    stack: error.stack,
                    code: error.code,
                };
                return rejectWithValue(serializedError);
            }
            return rejectWithValue({
                name: 'UnknownError',
                message: 'An unknown error occurred',
            } as SerializedError);
        }
    }
);
export const usersSlice = createSlice<UsersInterface, {}, 'users', SliceSelectors<UsersInterface>, string>({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.loading = true
                state.error = null;
            })
            .addCase(getUsers.fulfilled, (state, action:PayloadAction<UserInterface[]>) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    state.error = action.payload;
                } else {
                    state.error = action.error || {
                        name: 'UnknownError',
                        message: 'An unknown error occurred',
                    };
                }
            });
    },
});
export default usersSlice.reducer
