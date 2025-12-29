import HeroIntroduction from "./introduction/HeroIntroduction";
import HeroShows from "./shows/HeroShows";
import "./styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <HeroIntroduction />
        <HeroShows />
      </div>
    </section>
  );
}

export default Hero;
