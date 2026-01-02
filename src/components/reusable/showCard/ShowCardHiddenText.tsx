import magnifier from "../../../assets/images/hero/search.svg";
import type { ShowCardBaseProps } from "./types/showCardTypes";

function ShowCardHiddenText({ className }: ShowCardBaseProps) {
  return (
    <div
      className={`${className}__shows-card-hidden-holder showCard-hidden-holder`}
    >
      <p
        className={`${className}__shows-card-hidden-text showsCard-hidden-text`}
      >
        View More
      </p>
      <img
        src={magnifier}
        className={`${className}__shows-card-hidden-img showCard-hidden-img `}
        alt="search icon"
      />
    </div>
  );
}

export default ShowCardHiddenText;