import "./Footer.scss";
import logo from "../../../public/images/logoo.png";
import brands from "../../../public/images/Brands.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <img src={logo} alt="Logo" className="mb-4 img-fluid logo" />
            <p className="text-muted">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`s standard dummy text
              ever since the 1500s, when an unknown printer.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <p className="text-muted">
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
            <div className="social-icons d-flex gap-3">
              <a href="#" className="text-decoration-none">
                <i className="bx bxl-facebook-circle fs-4 text-primary"></i>
              </a>
              <a href="#" className="text-decoration-none">
                <i className="bx bxl-twitter fs-4 text-info"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>My Company, 4578 Marmora Road, Glasgow D04 89GR</p>
            <p>Call us now: 0123-456-789</p>
            <p>Email: support@whatever.com</p>
          </div>
        </div>
        <hr />
        <div className="row">
          {[
            "Information",
            "Service",
            "Extras",
            "My Account",
            "Useful Links",
            "Our Offers",
          ].map((section, index) => (
            <div key={index} className="col-md-4 col-lg-2">
              <h6>{section}</h6>
              <ul className="list-unstyled p-0 ">
                <li>
                  <a href="#" className="text-muted text-decoration-none">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted text-decoration-none">
                    Information
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted text-decoration-none">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted text-decoration-none">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <p className="text-muted">
            &copy; {new Date().getFullYear()} Ecommerce theme by
            www.bisenbaev.com
          </p>
          <div className="payment-icons d-flex justify-content-center gap-3 mt-3">
            <img src={brands} alt="MasterCard" className="img-fluid" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
