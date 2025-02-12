import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";
import BestSeller from "../components/BestSeller/BestSeller";
import Banner from "../components/Banner/Banner";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Carousel />
      <BestSeller />
      <Banner />
    </>
  );
}

export default Home;
