import Header from "../homepage/header/Header";
import Hero from "../homepage/hero/Hero";
import Popular from "../homepage/popular/Popular";
import Recommended from "../homepage/recommended/Recommended";
import Footer from "../homepage/footer/Footer";

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <Recommended />
      <Popular />
      <Footer />
    </div>
  );
}

export default HomePage;
