import type { ScoredShowProps } from "../types/heroTypes";
import ShowCardList from "../../../reusable/showCard/ShowCardList.tsx";
import useVisibleMovies from "../../../customHook/useVisibleMovies.tsx";

function HeroShowsList({ movies }: ScoredShowProps) {
  const visibleMovies = useVisibleMovies(movies);

  return <ShowCardList movies={visibleMovies} className="hero" />;
}

export default HeroShowsList;
