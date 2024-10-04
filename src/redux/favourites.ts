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
      if (!state.products.find(item => item.idProduct === action.payload.idProduct)) {
        state.products = [...state.products, action.payload];
      } else {
        state.products = state.products.filter(
          item => item.idProduct !== action.payload.idProduct,
        );
      }
    },
    deleteFavorites: (state, action) => {
      if (state.products.find(item => item.idProduct === action.payload.idProduct)) {
        state.products = state.products.filter(
          item => item.idProduct !== action.payload.idProduct,
        );
      }
    },
  },
});