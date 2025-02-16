import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./pages/HOME/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ACCESORIES from "./pages/ACCESORIES/ACCESORIES";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ACCESORIES" element={<ACCESORIES />} />
          <Route path="/Store" element={<ProductCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
