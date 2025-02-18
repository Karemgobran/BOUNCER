import React from "react";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import ElectronicsProducts from "../../components/ElectronicsProducts/ElectronicsProducts";
import "./Electronics.scss";
import Footer from "../../components/Footer/Footer";
function Electronics() {
  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div className="FilterSidebar col-lg-3 col-md-4 col-12">
            <FilterSidebar />
          </div>
          <div className="Broducts col-lg-9 col-md-8 col-12">
            <ElectronicsProducts />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Electronics;
