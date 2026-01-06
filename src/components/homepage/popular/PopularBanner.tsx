import type { PopularMovieBannerProps } from "./types/popularTypes";

function PopularBanner({ popularMovie }: PopularMovieBannerProps) {
  if (!popularMovie || !popularMovie.image?.original) return null;

  return (
    <div
      className="popular__banner"
      style={{
        backgroundImage: `url(${popularMovie.image.original})`,
      }}
    ></div>
  );
}

export default PopularBanner;
