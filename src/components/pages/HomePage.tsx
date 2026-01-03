import Header from "../homepage/header/Header";
import Hero from "../homepage/hero/Hero";
import Recommended from "../homepage/recommended/Recommended";

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <Recommended />
    </div>
  );
}

export default HomePage;
