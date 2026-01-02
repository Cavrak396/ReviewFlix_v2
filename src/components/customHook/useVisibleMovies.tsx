import type { VisibleMoviesTypes } from "./types/customHook";
import { useBreakpoint } from "./useBreakpoint";
import { useMemo } from "react";

function useVisibleMovies(movies: VisibleMoviesTypes[]) {
  const width = useBreakpoint();

  return useMemo(() => {
    if (width < 768) return movies.slice(0, 4);
    if (width <= 975) return movies.slice(0, 5);
    return movies;
  }, [width, movies]);
}

export default useVisibleMovies;
