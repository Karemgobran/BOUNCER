import Banner from "../../components/Banner/Banner";
import "./Broducts.scss";
import products from "../../data/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

function Broducts() {
  const scrollRef = useRef(null);
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

  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="container py-3 pt-3 pb-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="">
            <div className="select d-flex align-items-center">
              <div className="sortBy">
                <label htmlFor="sort">Sort By</label>
              </div>
              <select id="sort" className="form-select form-select-sm ">
                <option selected>Name</option>
                <option>Price</option>
                <option>Date</option>
              </select>
              <label htmlFor="show" className="me-2 ms-2">
                Show
              </label>
              <select id="show" className="form-select form-select-sm">
                <option selected>12</option>
                <option>24</option>
                <option>36</option>
              </select>
            </div>
          </div>
          <div className="view-icons d-flex flex-nowrap">
            <button className="btn btn-light grid-view active">
              <i className="bx bxs-grid"></i>
            </button>
            <button className="btn btn-light list-view">
              <i className="bx bx-list-ul"></i>
            </button>
            <button className="sid btn btn-light list-view">
              <i className="bx bx-tone"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="position-relative">
        <div className="products-container d-flex " ref={scrollRef}>
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card card shadow-sm border-0 p-3 overflow-hidden "
            >
              <div className="image overflow-hidden position-relative">
                <img
                  src={product.img}
                  className="card-img-top w-100"
                  alt={product.name}
                />
                <div className="Card-hover d-flex justify-content-center w-100 h-100 gap-2 position-absolute align-items-center">
                  <i className="bx bx-heart"></i>
                  <i className="bx bx-cart-alt"></i>
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <div className="price d-flex">
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

export default Broducts;
