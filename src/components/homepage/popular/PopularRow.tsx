import { useDispatch } from "react-redux";
import PopularBanner from "./PopularBanner";
import { useEffect, useState } from "react";
import {
  fetchSeasonEpisodes,
  fetchShowSeasons,
  fetchSingleMovie,
} from "../../../redux/movies/moviesSlice";
import type { AppDispatch } from "../../../redux/store";
import PopularEpisodes from "./episodes/PopularEpisodes";
import type { BaseMediaShow } from "../../../types/base";

function PopularRow() {
  const dispatch = useDispatch<AppDispatch>();
  const [popularMovie, setPopularMovie] = useState<BaseMediaShow | null>(null);
  const [popularMovieSeasons, setPopularMovieSeasons] = useState<
    BaseMediaShow[]
  >([]);
  const [popularMovieEpisodes, setPopularMovieEpisodes] = useState<
    BaseMediaShow[]
  >([]);

  useEffect(() => {
    const loadMovieAndSeasons = async () => {
      try {
        const movie = await dispatch(fetchSingleMovie("reacher")).unwrap();
        setPopularMovie(movie);

        const seasons = await dispatch(fetchShowSeasons(movie.id)).unwrap();
        setPopularMovieSeasons(seasons);
        console.log(
          "Preparation for authorization, solving error, not final code",
          popularMovieSeasons
        );

        if (seasons.length > 0) {
          const episodes = await dispatch(
            fetchSeasonEpisodes({ seasonId: seasons[0].id })
          ).unwrap();
          setPopularMovieEpisodes(episodes);
        }
      } catch (err) {
        console.error(err);
      }
    };

    loadMovieAndSeasons();
  }, [dispatch]);

  return (
    <div className="popular__row">
      <PopularBanner popularMovie={popularMovie} />
      <PopularEpisodes popularMovieEpisodes={popularMovieEpisodes} />
    </div>
  );
}

export default PopularRow;
