import React from "react";
import { useHistory } from "react-router-dom";

import Nav from "../Nav";
import Footer from "./Footer";
import shop1 from "../img/shop1.jpg";
import shop2 from "../img/shop2.jpg";
import shop3 from "../img/shop3.jpg";

import com from "../img/shopImg/compu.jpg";
import ear from "../img/shopImg/ears.jpg";
import ps from "../img/shopImg/ps4.jpg";
import toy from "../img/shopImg/toy.jpg";
import baby from "../img/shopImg/baby.jpg";
import home from "../img/shopImg/home.jpg";
import pc from "../img/shopImg/pc&game.jpg";
import smart from "../img/shopImg/smartitems.jpg";
import fash from "../img/shopImg/fashion.jpg";
import mouse from "../img/shopImg/mouse.jpg";
import keyboard from "../img/shopImg/keyboard.jpg";
import chairs from "../img/shopImg/chairs.jpg";
import sports from "../img/shopImg/sports.jpg";
import kitchen from "../img/shopImg/kitchen.jpg";
import homediy from "../img/shopImg/homediy.jpg";
import everyday from "../img/shopImg/everyday.jpg";
import fit from "../img/shopImg/fitness.jpg";
import kinde from "../img/shopImg/kindle.jpg";
import arrival from "../img/shopImg/arrival.jpg";
import tool from "../img/shopImg/tool.jpg";
const Home = () => {
  const history = useHistory();
  console.log(history);
  const tologin = (e) => {
    console.log("hello login");
    e.preventDefault();
    history.push("/login");
  };
  const bookImages = [
    { src: "bent" },
    { src: "blast" },
    { src: "champ" },
    { src: "color" },
    { src: "island" },
    { src: "positive" },
    { src: "sir" },
    { src: "strio" },
    { src: "thegame" },
    { src: "tod" },
    { src: "toown" },
    { src: "unicorn" },
    { src: "what" },
  ];
  return (
    // <Nav />
    // <h1>kaungsannhein</h1>
    <React.Fragment>
      <Nav />
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={shop1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item">
            <img src={shop3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item">
            <img src={shop2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="shoppingitemsContainer">
        <div className="itemscontainer p-4 ">
          <h3>Shop by Category</h3>

          <div className="shopimgbox">
            <div className="shopbox d-flex ">
              <div className="imgsbox ">
                <img src={com} className="shopimg" />
                <span className="d-block mt-1">Computer & Accessories</span>
              </div>
              <div className="imgsbox">
                <img src={baby} className="shopimg" />
                <span className="d-block mt-1 ms-4">Baby</span>
              </div>
            </div>
            <div className="shopbox d-flex ">
              <div className="imgsbox">
                <img src={ps} className="shopimg" />
                <span className="d-block mt-1">Videos & Games</span>
              </div>
              <div className="imgsbox ms-2">
                <img src={toy} className="shopimg" />
                <span className="d-block mt-1">Toys & Games</span>
              </div>
            </div>
          </div>
        </div>
        <div className="itemscontainer p-4 ">
          <h3>Mix and mingle Cyber Monday deals</h3>

          <div className="shopimgbox">
            <div className="shopbox d-flex ">
              <div className="imgsbox ">
                <img src={home} className="shopimg" />
                <span className="d-block mt-1">Home</span>
              </div>
              <div className="imgsbox">
                <img src={pc} className="shopimg" />
                <span className="d-block mt-1 ms-4">PC & Games</span>
              </div>
            </div>
            <div className="shopbox d-flex ">
              <div className="imgsbox">
                <img src={fash} className="shopimg" />
                <span className="d-block mt-1">Fashion</span>
              </div>
              <div className="imgsbox ms-2 ">
                <img src={smart} className="shopimg" />
                <span className="d-block mt-1">Smart Home</span>
              </div>
            </div>
          </div>
        </div>
        <div className="itemscontainer p-4 ">
          <h3>Gaming accessories</h3>

          <div className="shopimgbox">
            <div className="shopbox d-flex ">
              <div className="imgsbox ">
                <img src={ear} className="shopimg" />
                <span className="d-block mt-1">Headsets</span>
              </div>
              <div className="imgsbox">
                <img src={mouse} className="shopimg" />
                <span className="d-block mt-1 ms-4">Computer mice</span>
              </div>
            </div>
            <div className="shopbox d-flex ">
              <div className="imgsbox">
                <img src={keyboard} className="shopimg" />
                <span className="d-block mt-1">Keyboards</span>
              </div>
              <div className="imgsbox ms-2 ">
                <img src={chairs} className="shopimg" />
                <span className="d-block mt-1">Chairs</span>
              </div>
            </div>
          </div>
        </div>
        <div className="itemscontainer p-4 ">
          <h3>Bigger, brighter Cyber Monday deals</h3>

          <div className="shopimgbox">
            <div className="shopbox d-flex ">
              <div className="imgsbox ">
                <img src={sports} className="shopimg" />
                <span className="d-block mt-1">Sports & Outdoor</span>
              </div>
              <div className="imgsbox">
                <img src={kitchen} className="shopimg" />
                <span className="d-block mt-1 ms-4">Kitchens</span>
              </div>
            </div>
            <div className="shopbox d-flex ">
              <div className="imgsbox">
                <img src={homediy} className="shopimg" />
                <span className="d-block mt-1">Home DIY & Appliances</span>
              </div>
              <div className="imgsbox ms-2 ">
                <img src={everyday} className="shopimg" />
                <span className="d-block mt-1">Everday Essentials</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bookstore mx-auto">
        <h3 className="my-3">Top Sellers in Books for you</h3>
        <div className="bookimgcontainer">
          {bookImages.map((images, index) => (
            <img
              src={require(`../img/bookimg/${images.src}.jpg`)}
              className="bookimg"
            />
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-evenly ">
        <div className="titeshop">
          <h2 className="mb-2 ">For your Fitness Needs</h2>
          <img src={fit} className="titeimg" />

          <a href="" className="link mt-3">
            Shop now
          </a>
        </div>
        <div className="titeshop">
          <h2 className="mb-2 ">Kindle E readers</h2>
          <img src={kinde} className="titeimg" />

          <a href="" className="link mt-3">
            Shop now
          </a>
        </div>
        <div className="titeshop">
          <h2 className="mb-2 ">New arrivals in Toys</h2>
          <img src={arrival} className="titeimg" />

          <a href="" className="link mt-3">
            Shop now
          </a>
        </div>
        <div className="titeshop">
          <h3 className="mb-2 "> Deals in Tools and Home Improvement</h3>
          <img src={tool} className="titeimg" />

          <a href="" className="link mt-3">
            Shop now
          </a>
        </div>
      </div>

      <div className="sign d-flex flex-column justify-content-center align-items-center mt-5  p-4">
        <h4>See personalized recommendations</h4>
        <button className="signbtn mt-2" onClick={tologin}>
          Sign in
        </button>
        <h6 className="my-3">Pls sign in!</h6>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
