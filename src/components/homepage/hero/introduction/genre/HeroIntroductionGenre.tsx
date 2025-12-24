import type { MoviePropsType } from "../../types/heroTypes";
import HeroIntroductionGenreImg from "./HeroIntroductionGenreImg";
import HeroIntroductionGenreList from "./HeroIntroductionGenreList";

function HeroIntroductionGenre({ movie }: MoviePropsType) {
  return (
    <div className="hero__introduction-genre">
      <HeroIntroductionGenreImg />
      <HeroIntroductionGenreList movie={movie} />
    </div>
  );
}

export default HeroIntroductionGenre;
