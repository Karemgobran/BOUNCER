import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BestSeller.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function BestSeller() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState(["All"]); // ✅ تصحيح الحالة
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);

  function getProducts() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }

  function getCategories() {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(["All", ...response.data]);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

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
    setVisibleProducts((prev) =>
      prev >= filteredProducts.length ? 8 : prev + 4
    );
  };

  return (
    <div className="best-seller container py-4 position-relative">
      <h2 className="text-center">BEST SELLER</h2>
      <nav className="categories text-center mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn mx-2 ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      <div className="products-container d-flex" ref={scrollRef}>
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="product-card card shadow-sm border-0 p-3 overflow-hidden"
          >
            <div className="image overflow-hidden position-relative">
              <img
                src={product.image}
                className="card-img-top w-100"
                alt={product.title}
              />
              <div className="Card-hover d-flex justify-content-center w-100 h-100 gap-2 position-absolute align-items-center">
                <i className="bx bx-heart"></i>
                <i className="bx bx-cart-alt"></i>
              </div>
            </div>
            <div className="card-body text-center">
              <p className="card-title">{product.title}</p>
              <div className="price d-flex">
                <span className="new-price">${product.price}</span>
                {product.oldPrice && (
                  <span className="old-price">${product.oldPrice}</span>
                )}
              </div>
              <div className="rating">
                {"★".repeat(Math.floor(product.rating.rate))}
                {"☆".repeat(5 - Math.floor(product.rating.rate))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="scroll-btn left" onClick={() => scroll("left")}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button className="scroll-btn right" onClick={() => scroll("right")}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>

      <div className="text-center mt-3">
        <button className="more btn btn-primary" onClick={toggleLoadMore}>
          {visibleProducts >= filteredProducts.length
            ? "SHOW LESS"
            : "LOAD MORE"}
        </button>
      </div>
    </div>
  );
}

export default BestSeller;
