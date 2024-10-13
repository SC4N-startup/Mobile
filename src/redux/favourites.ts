import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  products: any[];
}

const initialState: CounterState = {
  products: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      if (!state.products.find(item => item.id === action.payload.id)) {
        state.products = [...state.products, action.payload];
      } else {
        state.products = state.products.filter(
          item => item.id !== action.payload.id,
        );
      }
    },
    deleteFavorites: (state, action) => {
      if (state.products.find(item => item.id === action.payload.id)) {
        state.products = state.products.filter(
          item => item.id !== action.payload.id,
        );
      }
    },
  },
});