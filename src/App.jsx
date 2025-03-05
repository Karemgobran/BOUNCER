import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./pages/HOME/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import WomenClothing from "./pages/WomenClothing/WomenClothing";
import Store from "./pages/Store/Store";
import Electronics from "./pages/Electronics/Electronics";
import Jewelery from "./pages/Jewelery/Jewelery";
import MensClothing from "./pages/MensClothing/MensClothing";
import Footer from "./components/Footer/Footer";
import ProductCard from "./components/ProductCard/ProductCard";
import Cart from "./pages/Cart/Cart";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<WomenClothing />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/:category" element={<Electronics />} />
          <Route path="/:category" element={<Jewelery />} />
          <Route path="/:category" element={<MensClothing />} />
          <Route path="/ProductCard/:productId" element={<ProductCard />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
