import ShowCard from "./ShowCard";
import type { ShowCardListTypes } from "./types/showCardTypes";

function ShowCardList({ className, movies }: ShowCardListTypes) {
  return (
    <ul className={`${className}__shows-list`}>
      {movies.map((item, index) => (
        <ShowCard key={index} show={item} className={className} />
      ))}
    </ul>
  );
}

export default ShowCardList;
