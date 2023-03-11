import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navigation-container d-flex align-items-center">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png"
                className="navbar-brand"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span />
              <span />
              <span />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarSupportedContent"
            >
              {/* <ul className="navbar-nav ms-auto">
                <li className={`nav-item br`}>
                  <div className="searchbar">
                    <label htmlFor="">Search Lauches by Dates</label>
                    <input type="date" />
                  </div>
                </li>
              </ul> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
