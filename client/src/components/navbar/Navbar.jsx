import React, { useContext } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { currentUser } = useContext(AuthContext);

  // console.log(currentUser.user.firstName);

  return (
    <div className="navbar">
      <div className="wrapper">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
        </a>
        <ul>
          <li>EVENTS</li>
          <li>
            <Link className="navLink" to={`/events`}>
              BROWSE EVENTS
            </Link>
          </li>

          {currentUser ? (
            <>
              <li>
                <Link to={`/profile`}>
                  {currentUser.user.firstName} <span>Profile</span>
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link className="navLink" to={`/login`}>
                LOGIN
              </Link>{" "}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
