import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSingleShow, getShows } from "../../services/movies/movies";
import type { Movie, MoviesState } from "../types/moviesTypes";

const initialState: MoviesState = {
    selectedMovie: null,
    loading: {
        fetchSingleMovie: false,
        fetchShows: false,
    },
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

export const fetchShows = createAsyncThunk<
    Movie[],
    string,
    { rejectValue: string }
>(
    "movies/fetchShows",
    async (query, thunkAPI) => {
        try {
            const data = await getShows(query);

            return data.map((item: { show: Movie }) => item.show);
        } catch {
            return thunkAPI.rejectWithValue("Shows not found");
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
                state.loading.fetchSingleMovie = true;
                state.error = null;
            })
            .addCase(fetchSingleMovie.fulfilled, (state, action) => {
                state.loading.fetchSingleMovie = false;
                state.selectedMovie = action.payload;
            })
            .addCase(fetchSingleMovie.rejected, (state, action) => {
                state.loading.fetchSingleMovie = false;
                state.error = action.payload ?? "Error";
            })
            .addCase(fetchShows.pending, state => {
                state.loading.fetchShows = true;
                state.error = null;
            })
            .addCase(fetchShows.fulfilled, (state) => {
                state.loading.fetchShows = false;
            })
            .addCase(fetchShows.rejected, (state, action) => {
                state.loading.fetchShows = false;
                state.error = action.payload ?? "Error";
            });

    },
});

export const { clearMovie } = moviesSlice.actions;
export default moviesSlice.reducer;