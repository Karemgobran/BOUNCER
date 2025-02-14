import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BestSeller.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import products from "../../data/products";

function BestSeller() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProducts, setVisibleProducts] = useState(8);
  const scrollRef = useRef(null);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const displayedProducts = filteredProducts.slice(0, visibleProducts);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const toggleLoadMore = () => {
    if (visibleProducts >= filteredProducts.length) {
      setVisibleProducts(8);
    } else {
      setVisibleProducts((prev) => prev + 4);
    }
  };

  return (
    <div className="best-seller container py-4 position-relative">
      <h2 className="text-center">BEST SELLER</h2>
      <nav className="categories text-center mb-4">
        {["All", "Mac", "iPhone", "iPad", "iPod", "Accessories"].map(
          (category) => (
            <button
              key={category}
              className={`btn mx-2 ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          )
        )}
      </nav>

      <div className="products-container" ref={scrollRef}>
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="product-card card shadow-sm border-0 p-3"
          >
            <img
              src={product.img}
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{product.name}</h5>
              <div className="price">
                <span className="new-price">${product.price}</span>
                <span className="old-price">${product.oldPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="scroll-btn left " onClick={() => scroll("left")}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button className="scroll-btn right" onClick={() => scroll("right")}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>

      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={toggleLoadMore}>
          {visibleProducts >= filteredProducts.length
            ? "SHOW LESS"
            : "LOAD MORE"}
        </button>
      </div>
    </div>
  );
}

export default BestSeller;
