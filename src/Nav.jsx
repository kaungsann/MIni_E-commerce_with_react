import React, { useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";

import CardContext from "./Pages/CardProvider";
const Nav = () => {
  const card = useContext(CardContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary color-secondary">
        <div className="container-fluid col-md-4 color-white">
          <a className="navbar-brand font" href="#">
            Ecommeremce
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-4">
                <Link className="nav-link active size me-3 ms-5" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active size me-3 ms-5" to="/shop">
                  Shopping
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  active size me-3 ms-5 d-flex"
                  to="/order"
                >
                  Order
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active size d-flex ms-5"
                  to="/setting"
                >
                  Buy
                  <span className="badge bg-dark ms-2">{card.add.length}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
