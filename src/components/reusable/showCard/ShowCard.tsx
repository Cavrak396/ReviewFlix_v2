import type { ShowTypes } from "./types/showTypes";
import ShowCardHidden from "./ShowCardHidden";
import "./style/showCard.css";

function ShowCard({ className, show }: ShowTypes) {
  if (!show || !show.image?.original) return null;

  return (
    <li
      className={`${className}__shows-card showCard`}
      style={{ backgroundImage: `url(${show.image.original})` }}
    >
      <ShowCardHidden className={className} />
    </li>
  );
}

export default ShowCard;
