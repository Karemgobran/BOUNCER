import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";
import BestSeller from "../components/BestSeller/BestSeller";
import Banner from "../components/Banner/Banner";
import Features from "../components/Features/Features";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Carousel />
      <BestSeller />
      <Banner />
      <Features />
    </>
  );
}

export default Home;
