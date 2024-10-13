import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {favoritesSlice} from './favourites';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import { authenticationSlice } from './authentication';
import { historySlice } from './history';

const favoritesConfig = {
  key: 'favorites',
  storage: AsyncStorage,
};

const authenticationConfig = {
  key: 'authentication',
  storage: AsyncStorage,
};

const historyConfig = {
  key: 'history',
  storage: AsyncStorage,
};

const reducer = combineReducers({
  favorites: persistReducer(favoritesConfig, favoritesSlice.reducer),
  authentication: persistReducer(authenticationConfig, authenticationSlice.reducer),
  history: persistReducer(historyConfig, historySlice.reducer),
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;