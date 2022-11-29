import React, { useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import CardContext from "./Pages/CardProvider";
const Nav = () => {
  const card = useContext(CardContext);
  return (
    <>
      <div className="navcontainer">
        <h3 className="titlenav text-white col-md-2 ms-3" href="#">
          KK Shopping
        </h3>
        <input
          type="text"
          className="search col-md-5 ps-3 pull-2 inputsearch"
          placeholder="search items"
        />

        <div className="d-flex col-md-5 navitems">
          <Link className="nav-link active size  text-white" to="/">
            Home
          </Link>
          <Link
            className="nav-link  active size  d-flex text-white"
            to="/order"
          >
            Order
          </Link>
          <Link className="nav-link active size text-white" to="/shop">
            Shopping
          </Link>
          <Link
            className="nav-link active size d-flex  text-white"
            to="/setting"
          >
            <FaShoppingCart className="buyicons" />
            <div className=" boxno">{card.add.length}</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
