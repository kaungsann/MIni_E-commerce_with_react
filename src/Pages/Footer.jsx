import React from "react";

const Footer = () => {
  return (
    <>
      <div className="top mt-3">
        <h5
          className="topbtn"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          Back To Top
        </h5>
      </div>

      <div className="footer p-5 d-flex justify-content-evenly">
        <div className="mt-4">
          <h4>Get to Know Us</h4>
          <div className="p-2">Careers</div>
          <div className="p-2">Blog</div>
          <div className="p-2">About Shopping</div>
          <div className="p-2">Investor Relations</div>
          <div className="p-2">KKshopping Devices</div>
          <div className="p-2">KKshopping Science</div>
        </div>
        <div className="mt-4">
          <h4 className="p-2">Make Money with Us</h4>
          <div className="p-2">Independently Publish with Us</div>
          <div className="p-2">Sell on Amazon</div>
          <div className="p-2">Advertise Your Products</div>
          <div className="p-2">Associates Program</div>
          <div className="p-2">Host an Amazon Hub</div>
        </div>
        <div className="mt-4">
          <h4>Let Us Help You</h4>
          <div className="p-2">COVID-19 and KKshopping</div>
          <div className="p-2">Your Account</div>
          <div className="p-2">Your Orders</div>
          <div className="p-2">Delivery Rates & Policies</div>
          <div className="p-2">Manage Your Content and Devices</div>
          <div className="p-2">Help</div>
        </div>
      </div>

      {/* <div className="none"></div> */}
      <div className="last d-flex flex-column justify-content-center align-items-center">
        <h3 className="textbe">KK Shopping</h3>
        <div className="d-flex mt-4">
          <div className="me-2">Conditional of use & sale</div>
          <div className="me-2">Privacy Notes</div>
          <div className="me-2">Interest-Based Ads Notice</div>
        </div>
        <div className="p-2">
          © 2021-2022, KKShopping.com, Inc. or its affiliates
        </div>
      </div>
    </>
  );
};

export default Footer;
