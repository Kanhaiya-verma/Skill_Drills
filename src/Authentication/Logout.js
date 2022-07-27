import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  //   const emailLogout = localStorage.getItem("email");
  //   const passwordLogout = localStorage.getItem("password");
  const emailRemove = localStorage.removeItem("email");
  const passwordRemove = localStorage.removeItem("password");

  const buttonHandler = (e) => {
    e.preventDefault();
    emailRemove && passwordRemove ? navigate("/Login") : navigate("/Login");
  };

  return (
    <div>
      <div>
        <button
          className="btn btn-danger"
          style={{ color: "#ffff" }}
          onClick={buttonHandler}
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Logout;
