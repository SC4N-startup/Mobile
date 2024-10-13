import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
    history: any[];
}

const initialState: CounterState = {
    history: [],
};

export const historySlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToHistory: (state, action) => {
            if (!state.history.find(item => item.id === action.payload.id)) {
                state.history = [...state.history, action.payload];
            } else {
                state.history = state.history.filter(
                    item => item.id !== action.payload.id,
                );
            }
        },
        deleteFromHistory: (state, action) => {
            if (state.history.find(item => item.id === action.payload.id)) {
                state.history = state.history.filter(
                    item => item.id !== action.payload.id,
                );
            }
        },
    },
});