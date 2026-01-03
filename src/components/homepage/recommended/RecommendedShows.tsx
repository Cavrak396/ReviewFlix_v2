import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchShows } from "../../../redux/movies/moviesSlice";
import type { AppDispatch } from "../../../redux/store";
import RecommendedShowList from "./RecommendedShowList";
import type { BaseMediaShow } from "../../../types/base";

function RecommendedShows() {
  const dispatch = useDispatch<AppDispatch>();
  const [recommendedMovies, setRecommendedMovies] = useState<BaseMediaShow[]>(
    []
  );

  useEffect(() => {
    dispatch(fetchShows("horror"))
      .unwrap()
      .then((movies) => setRecommendedMovies(movies))
      .catch((err) => console.error(err));
  }, [dispatch]);

  return <RecommendedShowList movies={recommendedMovies} />;
}

export default RecommendedShows;
