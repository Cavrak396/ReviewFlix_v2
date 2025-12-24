import type { MoviePropsType } from "../../types/heroTypes";
import HeroIntroductionGenreItem from "./HeroIntroductionGenreItem";

function HeroIntroductionGenreList({ movie }: MoviePropsType) {
  return (
    <ul className="hero__introduction-genre-list">
      {movie?.genres.map((item, index) => {
        return <HeroIntroductionGenreItem key={index} item={item} />;
      })}
    </ul>
  );
}

export default HeroIntroductionGenreList;
