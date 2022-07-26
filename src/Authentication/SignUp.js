import React, { useState } from "react";
import Index from "../Html/Index";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    navigate("/Login");
    alert("save again");
  };

  return (
    <div>
      <Index />

      <div className="container">
        <div className="col-md-5 ml-auto mr-auto mt-5">
          <div className=" card d-flex justify-content-center p-5 card_design">
            <div style={{ textAlign: "center", color: "#c50bdbcc" }}>
              <h1>SignUp</h1>
            </div>

            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={emailHandler}
                  value={email}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={password}
                  onChange={passwordHandler}
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label mb-2"
                  htmlFor="exampleCheck1"
                >
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="btn button_style"
                onClick={submitHandler}
              >
                Submit
              </button>
              <small id="LoginText" className="form-text text-muted mt-3 ">
                Already member
                <NavLink to={"/Login"} style={{ color: "  #c50bdacc" }}>
                  <b> Login Here</b>
                </NavLink>
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
