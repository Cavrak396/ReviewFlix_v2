import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getSingleShow,
    getShows,
    getShowSeasons,
    getSeasonEpisodes,
} from "../../services/movies/movies";
import type { Movie, MoviesState } from "../types/moviesTypes";

const initialState: MoviesState = {
    selectedMovie: null,
    seasons: [],
    episodes: [],
    loading: {
        fetchSingleMovie: false,
        fetchShows: false,
        fetchSeasons: false,
        fetchEpisodes: false,
    },
    error: null,
};

export const fetchSingleMovie = createAsyncThunk<
    Movie,
    string,
    { rejectValue: string }
>("movies/fetchSingleMovie", async (query, thunkAPI) => {
    try {
        return await getSingleShow(query);
    } catch {
        return thunkAPI.rejectWithValue("Movie not found");
    }
});

export const fetchShows = createAsyncThunk<
    Movie[],
    string,
    { rejectValue: string }
>("movies/fetchShows", async (query, thunkAPI) => {
    try {
        const data = await getShows(query);
        return data.map((item: { show: Movie }) => item.show);
    } catch {
        return thunkAPI.rejectWithValue("Shows not found");
    }
});

export const fetchShowSeasons = createAsyncThunk<
    Movie[],
    number,
    { rejectValue: string }
>("movies/fetchShowSeasons", async (showId, thunkAPI) => {
    try {
        return await getShowSeasons(showId);
    } catch {
        return thunkAPI.rejectWithValue("Seasons not found");
    }
});

export const fetchSeasonEpisodes = createAsyncThunk<
    Movie[],
    { seasonId: number; embed?: "guestcast" },
    { rejectValue: string }
>(
    "movies/fetchSeasonEpisodes",
    async ({ seasonId, embed }, thunkAPI) => {
        try {
            return await getSeasonEpisodes(seasonId, embed);
        } catch {
            return thunkAPI.rejectWithValue("Episodes not found");
        }
    }
);

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        clearMovie(state) {
            state.selectedMovie = null;
            state.seasons = [];
            state.episodes = [];
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
            .addCase(fetchShows.fulfilled, state => {
                state.loading.fetchShows = false;
            })
            .addCase(fetchShows.rejected, (state, action) => {
                state.loading.fetchShows = false;
                state.error = action.payload ?? "Error";
            })

            .addCase(fetchShowSeasons.pending, state => {
                state.loading.fetchSeasons = true;
                state.error = null;
            })
            .addCase(fetchShowSeasons.fulfilled, (state, action) => {
                state.loading.fetchSeasons = false;
                state.seasons = action.payload;
            })
            .addCase(fetchShowSeasons.rejected, (state, action) => {
                state.loading.fetchSeasons = false;
                state.error = action.payload ?? "Error";
            })

            .addCase(fetchSeasonEpisodes.pending, state => {
                state.loading.fetchEpisodes = true;
                state.error = null;
            })
            .addCase(fetchSeasonEpisodes.fulfilled, (state, action) => {
                state.loading.fetchEpisodes = false;
                state.episodes = action.payload;
            })
            .addCase(fetchSeasonEpisodes.rejected, (state, action) => {
                state.loading.fetchEpisodes = false;
                state.error = action.payload ?? "Error";
            });
    },
});

export const { clearMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
