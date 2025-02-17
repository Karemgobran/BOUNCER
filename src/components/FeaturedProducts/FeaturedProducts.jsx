import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FeaturedProducts.scss";
import products from "../../data/FeaturedProducts";
import axios from "axios";
import { useState } from "react";
const FeaturedProducts = () => {
  const [limitProducts, setlimitProducts] = useState([]);

  function getlimitedProducts() {
    axios
      .get("https://fakestoreapi.com/products?limit=3")
      .then((res) => {
        setlimitProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getlimitedProducts();
  }, []);
  return (
    <div className="featured-products container py-5">
      <h2 className="section-title text-center">FEATURED PRODUCTS</h2>
      <div className="row  justify-content-center gap-3 gap-lg-0">
        {limitProducts.map((product) => (
          <div key={product.id} className="col-12 col-md-6 col-lg-4">
            <div className="product-card d-flex align-items-center w-100">
              <div className="image">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-img"
                />
              </div>
              <div className="product-info">
                <h5 className="product-title">{product.title}</h5>
                <div className="rating">
                  {"★".repeat(product.rating.rate)}
                  {"☆".repeat(5 - product.rating.rate)}
                </div>
                <div className="price">
                  <span className="new-price">${product.price}</span>
                  <span className="old-price">${product.oldPrice}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
