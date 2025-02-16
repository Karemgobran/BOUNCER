import { Link } from "react-router-dom";
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
            <Link className="active" to="/">
              home
            </Link>
          </li>
          <li>
            <Link to="/Store">Store</Link>
          </li>
          <li>
            <Link to="/Iphone">Iphone</Link>
          </li>
          <li>
            <Link to="/IPAD">IPAD</Link>
          </li>
          <li>
            <Link to="/MACBOOK">MACBOOK</Link>
          </li>
          <li>
            <Link to="/ACCESORIES ">ACCESORIES</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
