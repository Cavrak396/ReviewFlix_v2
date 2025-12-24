import type { MovieGenreType } from "../../types/heroTypes";

function HeroIntroductionGenreItem({ item }: MovieGenreType) {
  return <li className="hero__introduction-genre-item">{item}</li>;
}

export default HeroIntroductionGenreItem;
