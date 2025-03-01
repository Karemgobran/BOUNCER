import React from "react";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import Products from "../../components/Products/Products";
import "./MensClothing.scss";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function MensClothing() {
  const { category } = useParams();
  const [formattedCategory, setFormattedCategory] = useState("");

  useEffect(() => {
    if (category) {
      setFormattedCategory(category.replace(/-/g, " "));
    }
  }, [category]);
  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div className="FilterSidebar col-lg-3 col-md-4 col-12">
            <FilterSidebar />
          </div>
          <div className="Broducts col-lg-9 col-md-8 col-12">
            <Products category={formattedCategory} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MensClothing;
