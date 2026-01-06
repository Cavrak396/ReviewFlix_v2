import type { PopularMovieEpisode } from "../types/popularTypes";
import PopularEpisodesText from "./PopularEpisodesText";

function PopularEpisodesItem({ episode }: PopularMovieEpisode) {
  return (
    <li
      className="popular__episodes-episode"
      style={{
        backgroundImage: `url(${episode.image.original})`,
      }}
    >
      <PopularEpisodesText episode={episode} />
    </li>
  );
}

export default PopularEpisodesItem;
