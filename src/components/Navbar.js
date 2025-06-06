import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/my-context";
import axios from "axios";
import Login from "./Login";
import { FaHeart } from "react-icons/fa";
import Registration from "./Registration";
import "../pages/navbar.css";

const Navbar = () => {
  const { userRole, currentUser, setUserFunction, setRoleFunction } =
    useContext(MyContext);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    if (currentUser) {
      setUserFunction(null);
      setRoleFunction("");
      localStorage.removeItem("user");
      localStorage.removeItem("jwtToken");

      delete axios.defaults.headers.common["Authorization"];
    }
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    navigate("/");
  };

  const handleLoginSuccess = (responseData) => {
    setUserFunction(responseData);
    setRoleFunction(responseData.roles);

    localStorage.setItem("user", JSON.stringify(responseData));
    localStorage.setItem("jwtToken", responseData.token);

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${responseData.token}`;

    setIsLoginOpen(false);
    navigate("/home");
  };

  const handleFavClick = () => {
    navigate("/fav");
  };

  return (
    <nav className="navbar">
      <div className="nav1">
        <div className="navbar-left">
          {!currentUser && (
            <>
              <button onClick={() => navigate("/login")}>Prijavi se</button>
              <button onClick={() => navigate("/registration")}>Registruj se</button>
            </>
          )}
        </div>
        <div className="navbar-right">
          {currentUser && userRole === "SalonOwner" && (
            <button onClick={() => navigate("/post")}>Kreiraj post</button>
          )}
          {currentUser && userRole === "User" && (
            <button onClick={handleFavClick}>
              <FaHeart className="icon"/>
            </button>
          )}
          {!currentUser && (
            <button onClick={handleFavClick}>
              <FaHeart className="icon"/>
            </button>
          )}
          {currentUser && ["User", "SalonOwner", "Admin"].includes(userRole) && (
            <button onClick={handleLogout}>Odjavi se</button>
          )}
        </div>
      </div>

      <div className="navbar-center">
        <img
          src={process.env.PUBLIC_URL + "/images/logo2.png"}
          alt="Logo"
          className="nav-logo"
        />
      </div>

      {isLoginOpen && (
        <Login
          onLoginSuccess={handleLoginSuccess}
          onClose={() => setIsLoginOpen(false)}
        />
      )}
      {isRegisterOpen && <Registration onClose={() => setIsRegisterOpen(false)} />}
    </nav>
  );
};

export default Navbar;