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
            if (!state.history.find(item => item.idDrink === action.payload.id)) {
                state.history = [...state.history, action.payload];
            }
        },
        deleteFromHistory: (state, action) => {
            if (state.history.find(item => item.idDrink === action.payload.id)) {
                state.history = state.history.filter(
                    item => item.idDrink !== action.payload.id,
                );
            }
        },
    },
});