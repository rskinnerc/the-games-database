import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';
import gamesReducer from './games/gamesSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    games: gamesReducer,
  },
});

export default store;
