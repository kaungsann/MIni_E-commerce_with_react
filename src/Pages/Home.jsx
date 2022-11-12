import React, { useContext } from "react";
import LoginContext from "../LoginProvider";
import Nav from "../Nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const logCon = useContext(LoginContext);
  console.log(logCon.convertObj.name);

  return (
    <>
      <ToastContainer />
      <Nav />
      <>
        {toast(`welcome ${logCon.convertObj.name}`)}
        <h1>kaungsannhein</h1>
      </>
      {/* {toast(`welcome ${changeOBJ.name}`)} */}
      {/* <React.Fragment>
        <h1>kaungsannhein</h1>
        {/* <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="..." class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> */}
      {/* </React.Fragment> */}
    </>
  );
};

export default Home;
