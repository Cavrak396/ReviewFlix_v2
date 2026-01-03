import useVisibleMovies from "../../customHook/useVisibleMovies";
import ShowCardList from "../../reusable/showCard/ShowCardList";
import type { BaseMediaShowProps } from "../../../types/base";

function RecommendedShowList({ movies }: BaseMediaShowProps) {
  const visibleMovies = useVisibleMovies(movies);

  return <ShowCardList className="recommended" movies={visibleMovies} />;
}

export default RecommendedShowList;