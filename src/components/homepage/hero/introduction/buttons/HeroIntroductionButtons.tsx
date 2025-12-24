import type { MoviePropsType } from "../../types/heroTypes";
import { heroButtons } from "../../utils/heroUtils";
import HeroIntroductionButton from "./HeroIntroductionButton";

function HeroIntroductionButtons({ movie }: MoviePropsType) {
  return (
    <div className="hero__introduction-buttons">
      {heroButtons.map((item) => {
        return (
          <HeroIntroductionButton item={item} movie={movie} key={item.id} />
        );
      })}
    </div>
  );
}

export default HeroIntroductionButtons;
