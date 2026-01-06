import type { PopularMovieEpisodesProps } from "../types/popularTypes";
import PopularEpisodesItem from "./PopularEpisodesItem";

function PopularEpisodesList({
  popularMovieEpisodes,
}: PopularMovieEpisodesProps) {
  const episodeLimit = popularMovieEpisodes.slice(0, 9);

  return (
    <ul className="popular__episodes-list">
      {episodeLimit.map((episode) => (
        <PopularEpisodesItem key={episode.id} episode={episode} />
      ))}
    </ul>
  );
}

export default PopularEpisodesList;
