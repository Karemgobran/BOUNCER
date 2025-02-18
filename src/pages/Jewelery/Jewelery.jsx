import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import "./Jewelery.scss";
import Footer from "../../components/Footer/Footer";
import JeweleryProducts from "../../components/JeweleryProducts/JeweleryProducts";
function Jewelery() {
  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div className="FilterSidebar col-lg-3 col-md-4 col-12">
            <FilterSidebar />
          </div>
          <div className="Broducts col-lg-9 col-md-8 col-12">
            <JeweleryProducts />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Jewelery;
