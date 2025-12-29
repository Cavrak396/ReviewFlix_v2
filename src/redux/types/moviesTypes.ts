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
    loading: {
        fetchSingleMovie: boolean;
        fetchShows: boolean;

    };
    error: string | null;
}