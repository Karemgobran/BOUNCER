import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FeaturedProducts.scss";
import products from "../../data/FeaturedProducts";

const FeaturedProducts = () => {
  return (
    <div className="featured-products container py-5">
      <h2 className="section-title text-center">FEATURED PRODUCTS</h2>
      <div className="row  justify-content-center">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-md-6 col-lg-4">
            <div className="product-card d-flex align-items-center w-100">
              <img
                src={product.img}
                alt={product.name}
                className="product-img"
              />
              <div className="product-info">
                <h5 className="product-title">{product.name}</h5>
                <div className="rating">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
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
