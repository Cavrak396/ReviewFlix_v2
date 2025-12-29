import ShowCard from "../../../reusable/showCard/ShowCard";
import type { ScoredShowProps } from "../types/heroTypes";
import { useBreakpoint } from "../../../customHook/useIsTablet";

function HeroShowsList({ movies }: ScoredShowProps) {
  const width = useBreakpoint();
  let visibleMovies = movies;

  if (width < 768) {
    visibleMovies = movies.slice(0, 4);
  } else if (width <= 975) {
    visibleMovies = movies.slice(0, 5);
  }

  return (
    <ul className="hero__shows-list">
      {visibleMovies.map((item, index) => (
        <ShowCard key={index} show={item} className="hero" />
      ))}
    </ul>
  );
}

export default HeroShowsList;
