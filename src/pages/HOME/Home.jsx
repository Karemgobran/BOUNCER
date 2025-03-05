import { useState, useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";
import BestSeller from "../../components/BestSeller/BestSeller";
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import LatestNews from "../../components/LatestNews/LatestNews";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import SearchButton from "../../components/Search Button/SearchButton";
import PopupDialog from "../../components/Dialog/PopupDialog";

function Home() {
  localStorage.setItem("userId", "1");
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const isDialogClosed = localStorage.getItem("dialogClosed");
    if (!isDialogClosed) {
      setShowDialog(true);
    }
  }, []);

  const closeDialog = () => {
    setShowDialog(false);
    localStorage.setItem("dialogClosed", "true");
  };

  return (
    <>
      <PopupDialog showDialog={showDialog} closeDialog={closeDialog} />
      <Carousel />
      <BestSeller />
      <Banner />
      <Features />
      <LatestNews />
      <FeaturedProducts />
      <SearchButton />
    </>
  );
}

export default Home;
