import type { MoviePropsType } from "../types/heroTypes";

function HeroIntroductionTitle({ movie }: MoviePropsType) {
  return <h1 className="hero__introduction-title">{movie?.name}</h1>;
}

export default HeroIntroductionTitle;
