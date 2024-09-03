import {configureStore} from "@reduxjs/toolkit";
import usersSlice from "./slices/users/users.slice";


export const store = configureStore({
    reducer: {
        users: usersSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['getUsers/fulfilled'],
            },
        }),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch