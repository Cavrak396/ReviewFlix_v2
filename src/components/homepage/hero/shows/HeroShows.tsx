import { useEffect, useState } from "react";
import HeroShowsList from "./HeroShowsList";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../../redux/store";
import { fetchShows } from "../../../../redux/movies/moviesSlice";
import type { ScoredShow } from "../types/heroTypes";

function HeroShows() {
  const dispatch = useDispatch<AppDispatch>();
  const [defaultMovies, setDefaultMovies] = useState<ScoredShow[]>([]);
  const loading = useSelector(
    (state: RootState) => state.movies.loading.fetchShows
  );

  useEffect(() => {
    dispatch(fetchShows("fantasy"))
      .unwrap()
      .then((movies) => setDefaultMovies(movies))
      .catch((err) => console.error(err));
  }, [dispatch]);

  return (
    <div className="hero__shows">
      {loading ? <p>Loading...</p> : <HeroShowsList movies={defaultMovies} />}
    </div>
  );
}

export default HeroShows;
