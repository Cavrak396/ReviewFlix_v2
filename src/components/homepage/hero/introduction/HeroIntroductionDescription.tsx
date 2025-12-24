import type { MoviePropsType } from "../types/heroTypes";

function HeroIntroductionDescription({ movie }: MoviePropsType) {
  const cleanSummary = movie?.summary?.replace(/<[^>]+>/g, "") || "";
  const shortSummary =
    cleanSummary.length > 300 ? cleanSummary.slice(0, 300) + "…" : cleanSummary;

  return <p className="hero__introduction-description">{shortSummary}</p>;
}

export default HeroIntroductionDescription;
