import React from "react";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import Broducts from "../../components/Broducts/Broducts";
import "./ACCESORIES.scss";
function ACCESORIES() {
  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-lg-3 col-md-4 col-12">
            <FilterSidebar />
          </div>
          <div className="col-lg-9 col-md-8 col-12">
            <Broducts />
          </div>
        </div>
      </div>
    </>
  );
}

export default ACCESORIES;
