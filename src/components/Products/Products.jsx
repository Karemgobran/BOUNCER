import Banner from "../Banner/Banner";
import "./Products.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddToCard from "../AddToCard/AddToCard";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

function Products({ category }) {
  const scrollRef = useRef(null);
  const [viewMode, setViewMode] = useState("grid");
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // إضافة حالة التحميل
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const navigate = useNavigate();

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // تعيين التحميل إلى true قبل بدء جلب البيانات

        // إضافة تأخير 3 ثواني قبل جلب البيانات
        setTimeout(async () => {
          const response = category
            ? await axios.get(
                `https://fakestoreapi.com/products/category/${category}`
              )
            : await axios.get("https://fakestoreapi.com/products");
          setProducts(response.data);
          setLoading(false); // تعيين التحميل إلى false بعد إتمام الجلب
        }, 3000); // تأخير 3 ثواني
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // تعيين التحميل إلى false في حالة حدوث خطأ
      }
    };

    fetchProducts();
  }, [category]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 750, behavior: "smooth" });
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  const openProductCard = (productId) => {
    navigate(`/ProductCard/${productId}`);
  };

  async function addToCard(productId) {
    // تمرير productId هنا
    try {
      const res = await AddToCard(productId); // استخدم productId المرسل
      if (res.status == 200) toast.success("Product added");
    } catch (err) {
      console.error(err);
      toast.error("Error adding product to cart");
    }
  }

  return (
    <div>
      <div className="banner-relative">
        <Banner />
      </div>
      <div className="container py-3 pt-3 pb-3">
        <div className="d-flex align-items-center justify-content-between">
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
          <div className="view-icons d-flex flex-nowrap">
            <button
              className={`btn btn-light grid-view ${
                viewMode === "grid" ? "active" : ""
              }`}
              onClick={() => setViewMode("grid")}
            >
              <i className="bx bxs-grid"></i>
            </button>
            <button
              className={`btn btn-light ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
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
          {isOpen && (
            <div className="sidebar open">
              <FilterSidebar />
              <button className="exit" onClick={() => setIsOpen(false)}>
                <i className="bx bx-x"></i>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="position-relative">
        {loading ? ( // عرض اللودر إذا كانت البيانات لا تزال قيد التحميل
          <Loader />
        ) : (
          <div
            className={`products-container d-flex ${viewMode}`}
            ref={scrollRef}
          >
            {currentProducts.map((product) => (
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
                  {viewMode === "grid" && (
                    <div className="Card-hover d-flex justify-content-center w-100 h-100 gap-2 position-absolute align-items-center">
                      <i className="bx bx-heart"></i>
                      <i
                        onClick={() => addToCard(product.id)}
                        className="bx bx-cart-alt"
                      ></i>
                    </div>
                  )}
                </div>
                <div className="card-body text-center">
                  <h5
                    className="card-title"
                    onClick={() => openProductCard(product.id)}
                  >
                    {product.title}
                  </h5>
                  <div className="price d-flex">
                    <span className="new-price">${product.price}</span>
                  </div>
                  <div className="rating">
                    {"★".repeat(Math.round(product.rating.rate)) +
                      "☆".repeat(5 - Math.round(product.rating.rate))}
                  </div>
                  {viewMode == "list" && (
                    <div className="buttons mt-3 d-flex">
                      <button
                        onClick={() => addToCard(product.id)}
                        className="btn btn-outline-primary d-flex align-items-center"
                      >
                        <i className="bx bx-cart-alt me-2"></i> Add To Cart
                      </button>
                      <button className="btn btn-outline-secondary ms-2 d-flex align-items-center">
                        <i className="bx bx-heart"></i>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {viewMode === "grid" && (
          <>
            <button className="scroll-btn left" onClick={() => scroll("left")}>
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
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Products;
