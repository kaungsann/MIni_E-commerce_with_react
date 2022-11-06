import React, { Fragment, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style.css";

const Login = () => {
  const goto = useHistory();
  let name = true;
  let email = true;
  let password = true;
  const [disabled, setdisabled] = useState(true);

  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const btnRef = useRef();

  const inputName = (e) => {
    let nameValue = e.target.value;
    let valid = /^[a-zA-Z0-9\s]+$/;
    if (valid.test(nameValue)) {
      name = true;
      nameRef.current.classList.remove("is-invalid");
    } else {
      name = false;

      nameRef.current.classList.add("is-invalid");
      console.log("error");
    }
    checkValid();
  };

  const emailValid = (e) => {
    let emailValue = e.target.value;
    let validEmail = /^([a-z0-9\_\-]+)@([a-z]+)\.([a-z]{2,5})$/;
    if (validEmail.test(emailValue)) {
      email = true;
      console.log(emailRef);

      emailRef.current.classList.remove("is-invalid");
    } else {
      email = false;

      console.log("error");
      emailRef.current.classList.add("is-invalid");
    }
    checkValid();
  };

  const passwordValid = (e) => {
    let passwordValue = e.target.value;
    let pasvalid = /^[a-zA-Z0-9\W]{6,20}$/;

    if (pasvalid.test(passwordValue)) {
      password = true;

      passRef.current.classList.remove("is-invalid");
    } else {
      password = false;

      passRef.current.classList.add("is-invalid");
    }
    checkValid();
  };

  const checkValid = () => {
    if (name || email || password) {
      setdisabled(false);
    }
  };

  const login = (e) => {
    e.preventDefault();
    if (name && email && password) {
      goto.push("/");
    } else {
      toast("You need to still enter valid", {
        theme: "dark",
      });
    }
  };
  // React.useEffect(() => {
  //   toast("welcome our login");
  // }, []);
  return (
    <Fragment>
      <ToastContainer />
      <div className="inputcontainer col-md-3 d-flex flex-column justify-content-center align-items-center mx-auto mt-5">
        <h2 className="text-secondary mb-4 mt-4">Ecommerence Website</h2>
        <div className="col-md-12">
          <input
            ref={nameRef}
            type="text"
            className={`form-control mt-4 ${
              name ? null : "border border-3 border-danger"
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
