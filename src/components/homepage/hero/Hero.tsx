import HeroIntroduction from "./introduction/HeroIntroduction";
import "./styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <HeroIntroduction />
      </div>
    </section>
  );
}

export default Hero;
