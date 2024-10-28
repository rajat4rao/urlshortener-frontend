import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const navigate = useNavigate();

  const logout = () => {
    handleLogout();
    navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {isLoggedIn ? (
            <>
              <li className="nav-item">
                <Link className="nav-link link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link" to="/shorten">
                  Shorten URL
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link" onClick={logout} to="/">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
