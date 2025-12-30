import HeroIntroduction from "./introduction/HeroIntroduction";
import HeroShows from "./shows/HeroShows";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import PageLoadingSpinner from "../../reusable/spinners/PageLoadingSpinner";
import "./styles/hero.css";

function Hero() {
  const loading = useSelector(
    (state: RootState) => state.movies.loading.fetchShows
  );
  return (
    <section className="hero">
      {loading && <PageLoadingSpinner className="hero" />}
      <div className="wrap">
        <HeroIntroduction />
        <HeroShows />
      </div>
    </section>
  );
}

export default Hero;
