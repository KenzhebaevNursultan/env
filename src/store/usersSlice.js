import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
    },
    reducers: {},
});

export default usersSlice.reducer;
