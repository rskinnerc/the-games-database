import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  games: {},
};

export const fetchGamesByGenre = createAsyncThunk(
  'games/fetchGamesByGenre',
  async (genreSlug) => {
    const res = await fetch(`https://api.rawg.io/api/games?key=f701489903124362ba098939ed7babd7&page_size=40&genres=${genreSlug}`);
    return res.json();
  },
  {
    condition: (genreSlug, { getState }) => {
      const { games } = getState().games;
      return games[genreSlug] === undefined;
    },
  },
);

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    /* eslint-disable no-param-reassign */
    builder.addCase(fetchGamesByGenre.fulfilled, (state, action) => {
      state.games[action.meta.arg] = action.payload.results;
    });
  },
});

export default gamesSlice.reducer;
