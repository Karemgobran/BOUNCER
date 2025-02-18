import Banner from "../Banner/Banner";
import "./AllProducts.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import axios from "axios";

function AllProducts() {
  const scrollRef = useRef(null);
  const [viewMode, setviewMode] = useState("grid");
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);

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

  function getProducts() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="banner-relative">
        <Banner />
      </div>
      <div className="container py-3 pt-3 pb-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="">
            <div className="select d-flex ">
              <div className="sortBy">
                <label htmlFor="sort">Sort By</label>
              </div>
              <select id="sort" className="form-select form-select-sm ">
                <option>Name</option>
                <option>Price</option>
                <option>Date</option>
              </select>
              <label htmlFor="show" className="me-2 ms-2">
                Show
              </label>
              <select id="show" className="form-select form-select-sm">
                <option>12</option>
                <option>24</option>
                <option>36</option>
              </select>
            </div>
          </div>
          <div className="view-icons d-flex flex-nowrap">
            <button
              className={`btn btn-light grid-view ${
                viewMode === "grid" ? "active" : ""
              }`}
              onClick={() => setviewMode("grid")}
            >
              <i className="bx bxs-grid"></i>
            </button>
            <button
              className={`btn btn-light list-view ${
                viewMode === "list" ? "active" : ""
              }`}
              onClick={() => setviewMode("list")}
            >
              <i className="bx bx-list-ul"></i>
            </button>
            <button
              className="sid btn btn-light list-view"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className="bx bx-tone"></i>
            </button>
          </div>
          <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="position-relative">
              <FilterSidebar />
              <button className="exit" onClick={() => setIsOpen(!isOpen)}>
                <i className="bx bx-x"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative">
        <div
          className={`products-container d-flex  ${viewMode}`}
          ref={scrollRef}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card card shadow-sm border-0 p-3 overflow-hidden "
            >
              <div className="image overflow-hidden position-relative">
                <img
                  src={product.image}
                  className="card-img-top w-100"
                  alt={product.title}
                />
                {viewMode === "grid" && (
                  <div className="Card-hover d-flex justify-content-center w-100 h-100 gap-2 position-absolute align-items-center">
                    <i className="bx bx-heart"></i>
                    <i className="bx bx-cart-alt"></i>
                  </div>
                )}
              </div>
              {viewMode === "grid" && (
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <div className="price d-flex">
                    <span className="new-price">${product.price}</span>
                    <span className="old-price">${product.oldPrice}</span>
                  </div>
                  <div className="rating">
                    {"★".repeat(product.rating.rate)}
                    {"☆".repeat(5 - product.rating.rate)}
                  </div>
                </div>
              )}

              {viewMode === "list" && (
                <div className="list-view-card d-flex p-3  rounded">
                  <div className="product-info flex-grow-1">
                    <div className="price d-flex align-items-center">
                      <span className="new-price text-danger fw-bold fs-4">
                        {product.price}
                      </span>
                      <span className="old-price text-decoration-line-through text-secondary ms-2">
                        {product.oldPrice}
                      </span>
                    </div>
                    <p className="description text-muted mt-2">
                      Nunc facilisis sagittis ullamcorper. Proin lectus ipsum,
                      gravida et mattis vulputate, tristique ut lectus. Sed et
                      lectus lorem nunc leifend laoreet.
                    </p>
                    <div className="rating">
                      {"★".repeat(product.rating.rate)}
                      {"☆".repeat(5 - product.rating.rate)}
                    </div>
                    <div className="buttons mt-3 d-flex">
                      <button className="btn btn-outline-primary d-flex align-items-center">
                        <i className="bx bx-cart-alt me-2"></i> Add To Cart
                      </button>
                      <button className="btn btn-outline-secondary ms-2 d-flex align-items-center">
                        <i className="bx bx-heart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {viewMode === "grid" && (
          <>
            <button className="scroll-btn left " onClick={() => scroll("left")}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              className="scroll-btn right"
              onClick={() => scroll("right")}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </>
        )}
      </div>
      <div className="container mt-5">
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                5
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AllProducts;
