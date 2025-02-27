import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./pages/HOME/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import WomenClothing from "./pages/WomenClothing/WomenClothing";
import Store from "./pages/store/store";
import Electronics from "./pages/electronics/electronics";
import Jewelery from "./pages/Jewelery/Jewelery";
import MensClothing from "./pages/MensClothing/MensClothing";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
