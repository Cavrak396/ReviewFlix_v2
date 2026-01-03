import { useEffect, useState } from "react";
import HeroShowsList from "./HeroShowsList";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../../redux/store";
import { fetchShows } from "../../../../redux/movies/moviesSlice";
import type { BaseMediaShow } from "../../../../types/base";

function HeroShows() {
  const dispatch = useDispatch<AppDispatch>();
  const [defaultMovies, setDefaultMovies] = useState<BaseMediaShow[]>([]);

  useEffect(() => {
    dispatch(fetchShows("fantasy"))
      .unwrap()
      .then((movies) => setDefaultMovies(movies))
      .catch((err) => console.error(err));
  }, [dispatch]);

  return (
    <div className="hero__shows">
      <HeroShowsList movies={defaultMovies} />
    </div>
  );
}

export default HeroShows;
