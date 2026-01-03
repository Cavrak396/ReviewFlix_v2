import Title from "../../reusable/title/Title";
import RecommendedShows from "./RecommendedShows";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import PageLoadingSpinner from "../../reusable/spinners/PageLoadingSpinner";
import "./styles/recommended.css";

function Recommended() {
  const loading = useSelector(
    (state: RootState) => state.movies.loading.fetchShows
  );

  return (
    <section className="recommended">
      {loading && <PageLoadingSpinner className="recommended" />}
      <div className="wrap">
        <Title className="recommended__title">Recommended:</Title>
        <RecommendedShows />
      </div>
    </section>
  );
}

export default Recommended;
