import "./Banner.scss";
import pic from "../../assets/images/pic.png";
function Banner() {
  return (
    <div className="banner align-items-center justify-content-between ">
      <div className="container d-flex align-items-center ">
        <div className="info text-white">
          <p className="product-name">iPhone 6 Plus</p>
          <p className="product-info">
            Performance and design. Taken right to the edge.
          </p>
          <div className="shop mt-3 ">
            <a href="#" className="text-white">
              SHOP NOW
            </a>
          </div>
        </div>
        <div className="image">
          <img src={pic} alt="iPhone 6 Plus" className="w-100" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
