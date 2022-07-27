import React from "react";
import { Outlet } from "react-router-dom";
import SignUp from "./SignUp";

const useAuth = () => {
  // const navigate = useNavigate();
  const userEmail = localStorage.getItem("email");
  const userPassword = localStorage.getItem("password");
  if (userEmail && userPassword) {
    console.log("user already loggedin");
  }
  return userEmail && userPassword;
};
const Auth = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <SignUp />;
};

export default Auth;
