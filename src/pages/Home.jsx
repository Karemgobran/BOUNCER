import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";
import BestSeller from "../components/BestSeller/BestSeller";
import Banner from "../components/Banner/Banner";
import Features from "../components/Features/Features";
import LatestNews from "../components/LatestNews/LatestNews";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import SearchButton from "../components/Search Button/SearchButton";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Carousel />
      <BestSeller />
      <Banner />
      <Features />
      <LatestNews />
      <FeaturedProducts />
      <SearchButton />
      <Footer />
    </>
  );
}

export default Home;
