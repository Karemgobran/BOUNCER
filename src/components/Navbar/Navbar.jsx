import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logoo.png";
import "./Navbar.scss";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="container Navbar text-center">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        <ul className="d-flex justify-content-center">
          {[
            { name: "Home", path: "/" },
            { name: "Store", path: "/Store" },
            { name: "iPhone", path: "/Iphone" },
            { name: "iPad", path: "/IPAD" },
            { name: "MacBook", path: "/MACBOOK" },
            { name: "Accessories", path: "/ACCESORIES" },
          ].map((ele) => (
            <li key={ele.path}>
              <Link
                className={location.pathname === ele.path ? "active" : ""}
                to={ele.path}
              >
                {ele.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="path">HOME {location.pathname}</p>
      </div>
    </nav>
  );
}

export default Navbar;
