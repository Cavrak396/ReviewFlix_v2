import type { BaseMediaShow } from "../../../../types/base";

export interface PopularMovieEpisodesProps {
    popularMovieEpisodes: BaseMediaShow[];
}

export interface PopularMovieEpisode {
    episode: BaseMediaShow;
}

export interface PopularMovieBannerProps {
    popularMovie: BaseMediaShow | null;
}