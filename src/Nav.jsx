import React, { useContext, useEffect, useRef, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import CardContext from "./Pages/CardProvider";

const Nav = () => {
  const data = "https://fakestoreapi.com/products/";

  let [search, setSearch] = useState("");
  let [store, setStore] = useState([]);
  let [filterProducts, SetfilterProducts] = useState(store);
  let inputRef = useRef();
  let filterItems = [];
  console.log(inputRef.value);
  const card = useContext(CardContext);

  useEffect(() => {
    fetch(data)
      .then((res) => {
        let responseDate = res.json();
        return responseDate;
      })
      .then((serverFromData) => {
        setStore(serverFromData);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  // const searchItems = (e) => {
  //   let searchValue = e.target.value.toLowerCase();
  //   filterProducts = products.filter((product) => {
  //     return product.title.toLowerCase().includes(searchValue);
  //   });
  //   console.log(filterProducts, "hello");
  // };
  return (
    <>
      <div className="navcontainer">
        <h3 className="titlenav text-white col-md-2 ms-3" href="#">
          KK Shopping
        </h3>
        <div className="  col-md-5  searchbar">
          <input
            type="text"
            className="w-100 search "
            placeholder="search items"
            onChange={(e) => {
              let inValue = e.target.value.toLowerCase();
              setSearch(inValue);
            }}
            ref={inputRef}
          />
          <div className="inputbox">
            {store
              .filter((items) => {
                return items.title.toLowerCase().includes(search);
              })
              .map((product) => {
                if (search === "") {
                  return;
                }
                inputRef.current.innerHTML = "";
                return (
                  <div key={product.id} className="frdata">
                    <div className="dname">{product.title}</div>
                    <img src={product.image} className="imgdata" />
                  </div>
                );
              })}
          </div>
        </div>

        <div className="d-flex col-md-5 navitems">
          <Link className="nav-link active size  text-white" to="/">
            Top Categories
          </Link>
          <Link
            className="nav-link  active size  d-flex text-white"
            to="/order"
          >
            Top Deal
          </Link>
          <Link className="nav-link active size text-white" to="/shop">
            Shopping
          </Link>
          <Link
            className="nav-link active size d-flex  text-white"
            to="/setting"
          >
            <FaShoppingCart className="buyicons" />
            <div className=" boxno">{card.add.length} Cart</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
