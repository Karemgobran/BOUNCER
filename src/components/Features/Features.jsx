import "./Features.scss";
// import shipping from "../../assets/images/shipping.png";
import refund from "../../assets/images/refund.png";
import support from "../../assets/images/support.png";
function Features() {
  return (
    <div className="features container">
      <div className="feature">
        <img className="mb-3" src={support} alt="shipping" />
        <h3>FREE SHIPPING</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div className="feature">
        <img className="mb-3" src={refund} alt="REFUND" />
        <h3>100% REFUND</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div className="feature">
        <img className="mb-3" src={support} alt="support" />
        <h3>SUPPORT 24/7</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
  );
}

export default Features;
