import React, { Fragment } from "react";
import Nav from "../Nav";
import "../style.css";
import shopimg from "../img/girlshop.jpg";
import Footer from "./Footer";
function Order() {
  const shopImg = [
    { src: "justdo", price: "40", deleteprice: "65", discount: "30" },
    { src: "nikewhite", price: "48", deleteprice: "75", discount: "30" },
    { src: "colnike", price: "62", deleteprice: "82", discount: "30" },
    { src: "NikeTshirt", price: "70", deleteprice: "89", discount: "30" },
    { src: "adbl", price: "94", deleteprice: "118", discount: "30" },
    { src: "adidas", price: "167", deleteprice: "260", discount: "30" },
    { src: "adshir", price: "134", deleteprice: "198", discount: "30" },
    { src: "jack", price: "154", deleteprice: "196", discount: "30" },
    { src: "hoodie", price: "184", deleteprice: "210", discount: "30" },
    { src: "sweat", price: "98", deleteprice: "125", discount: "30" },
    { src: "nishoe", price: "370", deleteprice: "450", discount: "30" },
    { src: "shoes1", price: "180", deleteprice: "240", discount: "30" },
    { src: "shoes", price: "135", deleteprice: "185", discount: "30" },
    { src: "nikeair", price: "315", deleteprice: "360", discount: "30" },
    { src: "nikeblack", price: "210", deleteprice: "258", discount: "30" },
  ];
  return (
    <>
      <Nav />
      <img src={shopimg} className="shopping" />
      <h3 className="mt-5 mb-4 ms-5">Top Deals</h3>
      <React.Fragment>
        <div className="d-flex justify-content-evenly align-items-center shirtcontainer">
          {shopImg.map((shopimg, index) => {
            return (
              <div className="p-5 cardshirt ">
                <img
                  src={require(`../img/${shopimg.src}.jpg`)}
                  className="shirt"
                />
                <div className="mt-4 d-flex">
                  <h4 className="text ">${shopimg.price}</h4>
                  <h4 className="underline ms-3">${shopimg.deleteprice}.00</h4>
                </div>
                <h4 className="text">{shopimg.discount}% OFF </h4>
                <button className="btn btn-outline-info mt-4">
                  View Details
                </button>
              </div>
            );
          })}
        </div>
        <Footer />
      </React.Fragment>
    </>
  );
}

export default Order;
