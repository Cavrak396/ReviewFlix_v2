import type { PopularMovieEpisodesProps } from "../types/popularTypes";
import PopularEpisodesList from "./PopularEpisodesList";

function PopularEpisodes({ popularMovieEpisodes }: PopularMovieEpisodesProps) {
  return (
    <div className="popular__episodes">
      <PopularEpisodesList popularMovieEpisodes={popularMovieEpisodes} />
    </div>
  );
}

export default PopularEpisodes;
