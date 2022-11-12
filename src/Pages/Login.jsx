import React, { Fragment, useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style.css";
import icons from "../img/images.png";
import LoginContext from "../LoginProvider";
const Login = () => {
  let [name, setname] = useState(true);
  let [email, setemail] = useState(true);
  const [password, setpassword] = useState(true);

  const [disabled, setdisabled] = useState(true);

  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const btnRef = useRef();
  const history = useHistory();
  const loginData = useContext(LoginContext);

  const inputName = (e) => {
    let nameValue = e.target.value;
    let valid = /^[a-zA-Z0-9\s]+$/;
    if (valid.test(nameValue)) {
      setname(true);

      nameRef.current.classList.remove("is-invalid");
      nameRef.current.classList.add("innvalid");
    } else {
      setname(false);
      nameRef.current.classList.add("is-invalid");

      console.log("error");
    }
    checkValid();
  };

  const emailValid = (e) => {
    let emailValue = e.target.value;
    let validEmail = /^([a-z0-9\_\-]+)@([a-z]+)\.([a-z]{2,5})$/;
    if (validEmail.test(emailValue)) {
      setemail(true);

      console.log(emailRef);
      emailRef.current.classList.add("innvalid");
      emailRef.current.classList.remove("is-invalid");
    } else {
      setemail(false);

      console.log("error");

      emailRef.current.classList.add("is-invalid");
    }
    checkValid();
  };

  const passwordValid = (e) => {
    let passwordValue = e.target.value;
    let pasvalid = /^[a-zA-Z0-9\W]{6,20}$/;

    if (pasvalid.test(passwordValue)) {
      setpassword(true);

      passRef.current.classList.add("innvalid");
      passRef.current.classList.remove("is-invalid");
    } else {
      setpassword(false);

      passRef.current.classList.add("is-invalid");
    }
    checkValid();
  };

  const checkValid = () => {
    if (name && email && password) {
      setdisabled(false);
    }
  };

  const login = (e) => {
    console.log("hello");
    e.preventDefault();
    if (!name || !email || !password) {
      toast("Something is wrong pls check it !");
    }
    if (
      nameRef.current.value.length === 0 ||
      emailRef.current.value.length === 0 ||
      passRef.current.value.length === 0
    ) {
      toast("You need cto enter fill the text");
    }
    if (
      nameRef.current.classList.contains("innvalid") &&
      emailRef.current.classList.contains("innvalid") &&
      passRef.current.classList.contains("innvalid")
    ) {
      console.log(" you are login successfully");
      console.log(history);
      history.push("/home");
      let jsonData = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passRef.current.value,
      };
      let convertJson = JSON.stringify(jsonData);
      window.localStorage.setItem("valid", convertJson);
    }
  };

  return (
    <Fragment>
      <ToastContainer />
      <h3 className="shoptitle">KK Shopping</h3>
      <div className="inputcontainer col-md-3 d-flex flex-column justify-content-center align-items-center mx-auto p-5 bg-white">
        <img src={icons} className="icons" />
        <div className="col-md-12">
          <input
            ref={nameRef}
            type="text"
            className={`form-control mt-4 ${
              name ? "" : "border border-3 border-danger"
            }`}
            placeholder="Username"
            onChange={inputName}
          />
          <div className="invalid-feedback"> Username is invalid</div>
        </div>

        <div className="col-md-12">
          <input
            type="email"
            className={`form-control mt-4 ${
              email ? null : "border border-3 border-danger"
            }`}
            placeholder="Enter user email"
            onChange={emailValid}
            ref={emailRef}
          />
          <div className="invalid-feedback"> Email is invalid</div>
        </div>

        <div className="col-md-12">
          <input
            type="password"
            class="form-control mt-4  password "
            placeholder="Enter user Password"
            onChange={passwordValid}
            ref={passRef}
          />
          <div className="invalid-feedback">
            {" "}
            You need to enter password 6 to 32
          </div>
        </div>

        <button
          type="button"
          class="btn btn-primary w-100 mt-4 submit "
          ref={btnRef}
          disabled={disabled}
          onClick={login}
        >
          Login
        </button>
      </div>
    </Fragment>
  );
};

export default Login;
