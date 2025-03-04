import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductCard.scss";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import mac_1 from "../../assets/images/mack.png";
import mac_2 from "../../assets/images/Oculus-Rift-profile_grande.png";
function ProductCard() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, [productId]);
  console.log(product);
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container product-page">
        <div className="row">
          <div className="col-lg-9">
            <div className="d-flex flex-column">
              <div className="parentt d-flex gap-3">
                <div className="left">
                  <div className="images d-flex flex-column">
                    <div className="top-image">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid current"
                      />
                    </div>
                    <div className="bottom-image d-flex gap-2 prod">
                      {[...Array(4)].map((_, index) => (
                        <div key={index}>
                          <img
                            src={product.image}
                            alt="Thumbnail"
                            className="img-thumbnail card"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="right p-3">
                  <div className="title">
                    <h2>{product.title}</h2>
                    <div className="review d-flex">
                      <span>{product.rating.count} reviews</span>
                    </div>
                  </div>
                  <div className="info">
                    <div className="d-flex price gap-2">
                      <p className="current-price">${product.price}</p>
                    </div>
                    <div className="child">
                      <div className="d-flex justify-content-between">
                        <strong>Availability:</strong>
                        <p>In stock</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <strong>Category:</strong>
                        <p>Accessories</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <strong>Free shipping:</strong>
                        <p>..</p>
                      </div>
                    </div>
                  </div>
                  <div className="color-size">
                    <div>
                      <strong>Select Color:</strong>
                      <div className="d-flex gap-1">
                        {[
                          "#006CFF",
                          "#FC3E39",
                          "black",
                          "#FFF600",
                          "#FF00B4",
                          "#EFDFDF",
                        ].map((color, index) => (
                          <button
                            key={index}
                            className="color-btn"
                            style={{ backgroundColor: color }}
                          ></button>
                        ))}
                      </div>
                    </div>
                    <div className="size mt-3">
                      <strong>Select Size:</strong>
                      <select className="form-select">
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                      </select>
                    </div>
                  </div>
                  <div className="buttons mt-3 d-flex">
                    <button className="btn btn-outline-primary d-flex align-items-center">
                      <i className="bx bx-cart-alt me-2"></i> Add To Cart
                    </button>
                    <button className="btn btn-outline-secondary ms-2 d-flex align-items-center">
                      <i className="bx bx-heart"></i>
                    </button>
                  </div>
                  <div className="social-buttons mt-3 d-flex gap-2">
                    <button className="btn btn-facebook">
                      <i className="bx bxl-facebook-circle pe-1"></i>
                      Share on Facebook
                    </button>
                    <button className="btn btn-twitter">
                      <i className="bx bxl-twitter pe-1"></i>Share on Twitter
                    </button>
                  </div>
                </div>
              </div>
              <div className="container mt-4">
                <ul className="nav nav-tabs" id="productTabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="product-info-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#product-info"
                      type="button"
                      role="tab"
                      aria-controls="product-info"
                      aria-selected="true"
                    >
                      Product Information
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="reviews-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#reviews"
                      type="button"
                      role="tab"
                      aria-controls="reviews"
                      aria-selected="false"
                    >
                      Reviews 0
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="another-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#another"
                      type="button"
                      role="tab"
                      aria-controls="another"
                      aria-selected="false"
                    >
                      Another tab
                    </button>
                  </li>
                </ul>
                <div
                  className="tab-content p-3 border border-top-0"
                  id="productTabsContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="product-info"
                    role="tabpanel"
                    aria-labelledby="product-info-tab"
                  >
                    <p>{product.description}</p>
                    <p>
                      Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
                      luctus malesuada tincidunt. Class aptent taciti sociosqu
                      ad litora torquent per conubia nostra, per inceptos
                      himenaeos. Integer enim purus, posuere at ultricies eu,
                      placerat a felis.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="reviews"
                    role="tabpanel"
                    aria-labelledby="reviews-tab"
                  >
                    <p>No reviews yet.</p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="another"
                    role="tabpanel"
                    aria-labelledby="another-tab"
                  >
                    <p>Content for another tab.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 right-page">
            <div className="best-seller card">
              <h4>Best Seller</h4>
              <img src={mac_1} alt="MacBook Pro" className="img-fluid " />
              <p>Apple MacBook Pro</p>
              <p className="price">
                <span className="current-price">$499</span>{" "}
                <span className="old-price">$599</span>
              </p>
            </div>
            <div
              className="side-product mt-3 card "
              style={{ backgroundColor: "#C1C8CE" }}
            >
              <h4>GoPro Hero 6</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <p className="price">$299</p>
              <img src={mac_2} alt="GoPro Hero 6" className="img-fluid " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
