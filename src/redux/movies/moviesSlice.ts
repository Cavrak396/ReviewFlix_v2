import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSingleShow } from "../../services/movies/movies";
import type { Movie, MoviesState } from "../types/moviesTypes";

const initialState: MoviesState = {
    selectedMovie: null,
    loading: false,
    error: null,
};

export const fetchSingleMovie = createAsyncThunk<
    Movie,
    string,
    { rejectValue: string }
>(
    "movies/fetchSingleMovie",
    async (query, thunkAPI) => {
        try {
            return await getSingleShow(query);
        } catch {
            return thunkAPI.rejectWithValue("Movie not found");
        }
    }
);

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        clearMovie(state) {
            state.selectedMovie = null;
            state.error = null;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchSingleMovie.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSingleMovie.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedMovie = action.payload;
            })
            .addCase(fetchSingleMovie.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ?? "Error";
            });
    },
});

export const { clearMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
