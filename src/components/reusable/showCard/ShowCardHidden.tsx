import ShowCardHiddenText from "./ShowCardHiddenText";
import type { ShowCardBaseProps } from "./types/showCardTypes";

function ShowCardHidden({ className }: ShowCardBaseProps) {
  return (
    <div className={`${className}__shows-card-hidden showCard-hidden`}>
      <ShowCardHiddenText className={className} />
    </div>
  );
}

export default ShowCardHidden;