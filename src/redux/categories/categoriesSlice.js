import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  count: 0,
  genresOverview: {},
  loadingGenres: false,
  loadingGenre: false,
};

export const fetchAllGenres = createAsyncThunk(
  'categories/FetchAllGenres',
  async () => {
    const res = await fetch('https://api.rawg.io/api/genres?key=f701489903124362ba098939ed7babd7');
    return res.json();
  },
  {
    condition: (_, { getState }) => {
      const { categories } = getState().categories;
      return categories.length === 0;
    },
  },
);

export const fetchGenreBySlug = createAsyncThunk(
  'categories/FetchGenreBySlug',
  async (slug) => {
    const res = await fetch(`https://api.rawg.io/api/genres/${slug}?key=f701489903124362ba098939ed7babd7`);
    return res.json();
  },
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    /* eslint-disable no-param-reassign */
    builder.addCase(fetchAllGenres.fulfilled, (state, action) => {
      state.count = action.payload.count;
      state.categories = action.payload.results;
      state.loadingGenres = false;
    });

    builder.addCase(fetchGenreBySlug.fulfilled, (state, action) => {
      state.genresOverview[action.meta.arg] = action.payload;
      state.loadingGenre = false;
    });

    builder.addCase(fetchAllGenres.pending, (state) => {
      state.loadingGenres = true;
    });

    builder.addCase(fetchGenreBySlug.pending, (state) => {
      state.loadingGenre = true;
    });
  },
});

export default categoriesSlice.reducer;
