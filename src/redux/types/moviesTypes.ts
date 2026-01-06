export interface Movie {
    id: number;
    name: string;
    genres: string[];
    image: {
        medium: string;
        original: string;
    };
    summary?: string;
}

export interface MoviesState {
    selectedMovie: Movie | null;
    seasons: Movie[];
    episodes: Movie[];
    loading: {
        fetchSingleMovie: boolean;
        fetchShows: boolean;
        fetchSeasons: boolean;
        fetchEpisodes: boolean

    };
    error: string | null;
}