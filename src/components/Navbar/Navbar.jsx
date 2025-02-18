import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logoo.png";
import "./Navbar.scss";
import axios from "axios";
import { useEffect, useState } from "react";

function Navbar() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategories(["Home", "Store", ...res.data]);
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <nav className="container Navbar text-center">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        <ul className="d-flex justify-content-center">
          {categories.length > 0 ? (
            categories.map((category) => {
              // تحويل المسافات إلى "-" وإنشاء مسار مناسب
              const path =
                category === "Home"
                  ? "/"
                  : `/${category.toLowerCase().replace(/\s+/g, "-")}`;

              return (
                <li key={path}>
                  <Link
                    className={location.pathname === path ? "active" : ""}
                    to={path}
                  >
                    {category}
                  </Link>
                </li>
              );
            })
          ) : (
            <li>Loading...</li>
          )}
        </ul>
        <p className="path">HOME {location.pathname}</p>
      </div>
    </nav>
  );
}

export default Navbar;
