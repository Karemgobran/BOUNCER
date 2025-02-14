import logo from "../../assets/images/logoo.png";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="container Navbar text-center">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        <ul className="d-flex justify-content-center">
          <li>
            <a className="active" href="#">
              home
            </a>
          </li>
          <li>
            <a href="#">Store</a>
          </li>
          <li>
            <a href="#">Iphone</a>
          </li>
          <li>
            <a href="#">IPAD</a>
          </li>
          <li>
            <a href="#">MACBOOK</a>
          </li>
          <li>
            <a href="#">ACCESORIES</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
