import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
    token: string;
}

const initialState: CounterState = {
    token: '',
};

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        setToken: (state, action) => {
            if (!action.payload) {
                return;
            } else {
                state.token = action.payload;
            }
        },
    },
});