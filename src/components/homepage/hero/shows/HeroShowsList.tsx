import type { BaseMediaShowProps } from "../../../../types/base.ts";
import ShowCardList from "../../../reusable/showCard/ShowCardList.tsx";
import useVisibleMovies from "../../../customHook/useVisibleMovies.tsx";

function HeroShowsList({ movies }: BaseMediaShowProps) {
  const visibleMovies = useVisibleMovies(movies);

  return <ShowCardList movies={visibleMovies} className="hero" />;
}

export default HeroShowsList;
