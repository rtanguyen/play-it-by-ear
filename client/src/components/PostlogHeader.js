import React from "react";
import Auth from "../utils/auth";
import LogoPic from "../assets/BU-Logo_Beyond Us.png";
import { Link } from "react-router-dom";

const PostlogHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top prelogin-nav">
      <div className="container-fluid nav-container">
        <div className="col-1" />
        <div className="col-4">
          <a className="navbar-brand mainLogo" href="#">
            <img src={LogoPic} className="logoNav" style={{ width: "10%" }} />
          </a>
        </div>
        <div className="col-2" />
        <div className="col-3">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdownLeft">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#happeningnow"
                >
                  Happening Now
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#trending">
                  Trending
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#news">
                  News
                </a>
              </li>
              {/* <li className="nav-item login">
                <button type="button" className="btn btn-outline-light logButton btn-sm"><a className="nav-link text-light" href="#">Log In</a></button>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="col-1">
          <button
            type="button"
            className="btn btn-outline-light logButton btn-sm"
          >
            <Link to="/">Log out</Link>
          </button>
        </div>
        <div className="col-1" />
      </div>
    </nav>
  );
};

export default PostlogHeader;
