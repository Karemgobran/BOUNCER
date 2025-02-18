import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import "./Store.scss";
import Footer from "../../components/Footer/Footer";
import AllProducts from "../../components/AllProducts/AllProducts";
function Store() {
  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div className="FilterSidebar col-lg-3 col-md-4 col-12">
            <FilterSidebar />
          </div>
          <div className="Broducts col-lg-9 col-md-8 col-12">
            <AllProducts />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Store;
