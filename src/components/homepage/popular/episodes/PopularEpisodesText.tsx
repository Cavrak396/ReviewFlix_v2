import type { PopularMovieEpisode } from "../types/popularTypes";
import { useBreakpoint } from "../../../customHook/useBreakpoint";

function PopularEpisodesText({ episode }: PopularMovieEpisode) {
  const width = useBreakpoint();

  const displayName =
    width < 768 && episode.name.length > 10
      ? episode.name.slice(0, 10) + "…"
      : episode.name;

  return (
    <div className="popular__episodes-text">
      <span className="popular__episodes-name">{displayName}</span>
      <span className="popular__episodes-number">Episode {episode.number}</span>
    </div>
  );
}

export default PopularEpisodesText;
