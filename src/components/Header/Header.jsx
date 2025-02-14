import { useState, useEffect, useRef } from "react";
import "./Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleFocus = () => setIsSearchActive(true);
  const handleBlur = () => setIsSearchActive(false);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar navbar-expand-lg p-2 position-relative">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="LangAndCurrency d-flex align-items-center gap-2">
          <div className="language">
            <select className="form-select">
              <option value="Eng">English</option>
              <option value="Deu">Deutsch</option>
              <option value="Esp">Español</option>
            </select>
          </div>
          <div className="currency">
            <select className="form-select border-none">
              <option value="USD">$ - USD</option>
              <option value="EUR">€ - EUR</option>
              <option value="GBP">£ - GBP</option>
            </select>
          </div>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <div className="Account">
            <FontAwesomeIcon icon={faUser} size="sm" />
            <a href="#">My Profile</a>
          </div>
          <div className="cart d-flex gap-2" ref={dropdownRef}>
            <div className="drop" onClick={toggleDropdown}>
              <a href="#">0 items</a>
            </div>
            {isDropdownOpen && (
              <div className="dropdown   position-absolute show">
                <ul className="product">
                  <li>
                    <p>Samsung A 16</p>
                    <p>$450 </p>
                  </li>
                  <li>
                    <p>Samsung A 16</p>
                    <p>$450 </p>
                  </li>
                  <li className="d-flex justify-content-between p-2">
                    <p>Shipping</p>
                    <p>free</p>
                  </li>
                  <li className="d-flex justify-content-between p-2">
                    <p>Total</p>
                    <p>$900</p>
                  </li>
                </ul>
                <div className="buttons d-flex">
                  <button type="button" className="btn btn-light width-50">
                    Cart
                  </button>
                  <button type="button" className="btn btn-primary width-50">
                    Check Out
                  </button>
                </div>
              </div>
            )}
            <div className="pl-2">
              <a href="#">$0,00</a>
            </div>
          </div>
          <div className="search position-relative">
            <input
              type="search"
              className={`search-input ${isSearchActive ? "active" : ""}`}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="position-absolute search-icon"
              onClick={handleFocus}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
