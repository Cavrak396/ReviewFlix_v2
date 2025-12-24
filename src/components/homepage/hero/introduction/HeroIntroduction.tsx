import { useDispatch } from "react-redux";
import { fetchSingleMovie } from "../../../../redux/movies/moviesSlice";
import { useEffect, useState } from "react";
import HeroIntroductionTitle from "./HeroIntroductionTitle";
import HeroIntroductionDescription from "./HeroIntroductionDescription";
import HeroIntroductionGenre from "./genre/HeroIntroductionGenre";
import type { AppDispatch } from "../../../../redux/store";
import type { Movie } from "../../../../redux/types/moviesTypes";
import HeroIntroductionButtons from "./buttons/HeroIntroductionButtons";

function HeroIntroduction() {
  const dispatch = useDispatch<AppDispatch>();
  const [defaultMovie, setDefaultMovie] = useState<Movie | null>(null);

  useEffect(() => {
    dispatch(fetchSingleMovie("witcher"))
      .unwrap()
      .then((movie: Movie) => setDefaultMovie(movie))
      .catch((err) => console.error(err));
  }, [dispatch]);

  return (
    <div className="hero__introduction">
      <HeroIntroductionTitle movie={defaultMovie} />
      <HeroIntroductionGenre movie={defaultMovie} />
      <HeroIntroductionDescription movie={defaultMovie} />
      <HeroIntroductionButtons movie={defaultMovie} />
    </div>
  );
}

export default HeroIntroduction;
